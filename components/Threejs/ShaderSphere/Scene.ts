import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { vertexShader, fragmentShader } from './shaders';

export class Scene {
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
  private lastElapsedTime: number = 0;

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
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
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
        uColor1: { value: new THREE.Color(0x000000) }, // black
        uColor2: { value: new THREE.Color(0xff0000) }, // red
        uColor3: { value: new THREE.Color(0xffffff) }, // white
      },
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.bindEvents();
    this.startAnimation();
  }

  private getRandomColor(): THREE.Color {
    return new THREE.Color(
      Math.random(),
      Math.random(),
      Math.random()
    );
  }

  public randomizeColors(): void {
    if (this.mesh.material instanceof THREE.ShaderMaterial) {
      this.mesh.material.uniforms.uColor1.value = this.getRandomColor();
      this.mesh.material.uniforms.uColor2.value = this.getRandomColor();
      this.mesh.material.uniforms.uColor3.value = this.getRandomColor();
      
      // Force a render even if animation is paused
      this.renderer.render(this.scene, this.camera);
    }
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
    
    this.controls.update();
    
    if (this.mesh.material instanceof THREE.ShaderMaterial) {
      this.lastElapsedTime = this.clock.getElapsedTime();
      this.mesh.material.uniforms.uTime.value = this.lastElapsedTime;
    }

    this.currentRotation += (this.targetRotation - this.currentRotation) * 0.1;
    this.mesh.rotation.y = this.currentRotation;

    this.renderer.render(this.scene, this.camera);
  };

  public dispose(): void {
    this.stopAnimation();
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('wheel', this.handleScroll);
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
    this.renderer.dispose();
    this.scene.clear();
  }

  public startAnimation(): void {
    if (!this.isAnimating) {
      this.clock.start();
      // Adjust the clock's start time to maintain continuity
      this.clock.elapsedTime = this.lastElapsedTime;
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
    this.clock.stop();
  }
}