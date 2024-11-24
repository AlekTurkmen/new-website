'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useRouter } from 'next/navigation';

// Define the shader code constants
const vertexShader = `
  varying vec2 vUv;
  varying float vDistort;
  
  uniform float uTime;
  uniform float uSpeed;
  uniform float uNoiseDensity;
  uniform float uNoiseStrength;
  uniform float uFrequency;
  uniform float uAmplitude;

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
  }
  
  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }
  
  vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
  }

  float pnoise(vec3 P, vec3 rep) {
    vec3 Pi0 = mod(floor(P), rep);
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
  }

  mat3 rotation3dY(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat3(
      c, 0.0, -s,
      0.0, 1.0, 0.0,
      s, 0.0, c
    );
  }

  vec3 rotateY(vec3 v, float angle) {
    return rotation3dY(angle) * v;
  }

  void main() {
    vUv = uv;
    
    float t = uTime * uSpeed;
    float distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;

    vec3 pos = position + (normal * distortion);
    float angle = sin(uv.y * uFrequency + t) * uAmplitude;
    pos = rotateY(pos, angle);    
    
    vDistort = distortion;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vDistort;
  
  uniform float uTime;
  uniform float uIntensity;
  
  vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b * cos(6.28318 * (c * t + d));
  }     
  
  void main() {
    float distort = vDistort * uIntensity;
    
    vec3 brightness = vec3(0.5, 0.5, 0.5);
    vec3 contrast = vec3(0.5, 0.5, 0.5);
    vec3 oscilation = vec3(1.0, 1.0, 1.0);
    vec3 phase = vec3(0.0, 0.1, 0.2);
  
    vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

class Scene {
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private clock: THREE.Clock;
  private controls: OrbitControls;
  private mesh: THREE.Mesh;
  private targetRotation: number = 0;
  private currentRotation: number = 0;
  private animationFrameId: number | null = null;
  private isAnimating: boolean = false;

  constructor(container: HTMLElement) {
    // Initialize core components
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
    
    // Setup renderer
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor('black', 1);
    container.appendChild(this.renderer.domElement);

    // Setup camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 4);

    // Setup controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = false;

    // Create mesh
    const geometry = new THREE.IcosahedronGeometry(1, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: 0.2 },
        uNoiseDensity: { value: 1.5 },
        uNoiseStrength: { value: 0.2 },
        uFrequency: { value: 3.0 },
        uAmplitude: { value: 6.0 },
        uIntensity: { value: 7.0 },
      },
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    // Start animation at the end of constructor
    this.isAnimating = true;
    this.animate();
  }

  private bindEvents(): void {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('wheel', this.handleScroll);
  }

  private handleResize = (): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  private handleScroll = (event: WheelEvent): void => {
    const scrollSensitivity = 0.0004;
    this.targetRotation += event.deltaY * scrollSensitivity;
  };

  private animate = (): void => {
    if (!this.isAnimating) return;
    
    this.animationFrameId = requestAnimationFrame(this.animate);
    
    // Update controls
    this.controls.update();
    
    // Update shader uniforms
    if (this.mesh.material instanceof THREE.ShaderMaterial) {
      this.mesh.material.uniforms.uTime.value = this.clock.getElapsedTime();
    }

    // Update rotation
    this.currentRotation += (this.targetRotation - this.currentRotation) * 0.1;
    this.mesh.rotation.y = this.currentRotation;

    // Render
    this.renderer.render(this.scene, this.camera);
  };

  public dispose(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('wheel', this.handleScroll);

    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
    this.renderer.dispose();
    this.scene.clear();
  }

  public startAnimation(): void {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.animate();
    }
  }

  public stopAnimation(): void {
    this.isAnimating = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();

  const initScene = () => {
    if (!containerRef.current || sceneRef.current) return;

    try {
      sceneRef.current = new Scene(containerRef.current);
      setIsInitialized(true);
    } catch (error) {
      console.error('Failed to initialize scene:', error);
      setIsInitialized(false);
    }
  };

  // Initialize on mount
  useEffect(() => {
    initScene();

    // Add navigation event listeners
    const handleStart = () => {
      if (sceneRef.current) {
        sceneRef.current.stopAnimation();
      }
    };

    const handleComplete = () => {
      if (sceneRef.current) {
        sceneRef.current.startAnimation();
      }
    };

    // Listen for Next.js route events
    window.addEventListener('beforeunload', handleStart);
    window.addEventListener('routeChangeStart', handleStart);
    window.addEventListener('routeChangeComplete', handleComplete);
    window.addEventListener('focus', handleComplete);
    
    return () => {
      window.removeEventListener('beforeunload', handleStart);
      window.removeEventListener('routeChangeStart', handleStart);
      window.removeEventListener('routeChangeComplete', handleComplete);
      window.removeEventListener('focus', handleComplete);
      
      if (sceneRef.current) {
        sceneRef.current.dispose();
        sceneRef.current = null;
        setIsInitialized(false);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}
