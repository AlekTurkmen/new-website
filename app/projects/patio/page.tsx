'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Dynamic import of Three.js components
const importThree = async () => {
  const THREE = await import('three');
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
  const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
  return { THREE, GLTFLoader, OrbitControls };
};

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const modelLoaded = useRef(false);

    useEffect(() => {
        let cleanup: (() => void) | undefined;

        const initScene = async () => {
            if (!containerRef.current || modelLoaded.current) return;
            
            const { THREE, GLTFLoader, OrbitControls } = await importThree();
            
            // Create scene
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x111111);

            // Create camera
            const camera = new THREE.PerspectiveCamera(30, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
            camera.position.z = 5;

            // Create renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            containerRef.current.innerHTML = '';
            containerRef.current.appendChild(renderer.domElement);

            // Add orbit controls
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;

            // Add lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 5, 5);
            scene.add(directionalLight);

            // Load model
            const loader = new GLTFLoader();
            loader.load('/images/projects/patio/Outside-Patio-Model.gltf', (gltf) => {
                scene.add(gltf.scene);
                modelLoaded.current = true;
                
                // Center and scale model
                const box = new THREE.Box3().setFromObject(gltf.scene);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 3 / maxDim;
                gltf.scene.scale.multiplyScalar(scale);
                gltf.scene.position.sub(center.multiplyScalar(scale));
            });

            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            }
            animate();

            // Handle resize
            const handleResize = () => {
                if (!containerRef.current) return;
                camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            };
            window.addEventListener('resize', handleResize);

            // Cleanup
            cleanup = () => {
                window.removeEventListener('resize', handleResize);
                renderer.dispose();
                scene.clear();
            };
        };

        initScene();
        return () => cleanup?.();
    }, []);

    return (
      <>
        <div className="relative min-h-screen text-white font-lexend-regular bg-black">
          <Navbar />
          <ScrollProgress className="top" />
          
          <div className="relative">
            <main className="max-w-4xl mx-auto py-16 px-4">
              {/* Title section */}
              <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
                  Outdoor Cabana & Patio Retrofit
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  June 2023
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <p className="text-gray-300">
                  I took on a small renovation project for my small NYC backyard.
                </p>

                <p className="text-gray-300">
                  I'm fortunate enough to attend The Cooper Union which turns an ivy league level education into a state school tuition price (it's like driving a Rolls Royce for the price of a Prius). The tuition savings are incredible. This affords me the ability to rent an apartment in NYC. I love home renovation projects so I decided to go for a cabana style setup with some string lights.
                </p>

                <p className="text-gray-300">Here are a couple before pictures.</p>

                <div className="relative w-full aspect-[16/5] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/images/projects/patio/IMG_2276.webp"
                    alt="Pano Before"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/patio/IMG_2407.webp"
                      alt="Left Before"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/patio/IMG_2408.webp"
                      alt="Right Before"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  I made a small model in OnShape before I went ahead and added the cabana tarps just to get a better visual for what I was imagining.
                </p>

                <div className="relative">
                  <div 
                    ref={containerRef}
                    className="w-full h-[500px] border border-gray-700 rounded-lg bg-gray-900 overflow-hidden"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 p-3 rounded-lg text-sm text-gray-300 backdrop-blur-sm">
                    <p className="mb-1">Mouse Controls:</p>
                    <ul className="space-y-1 text-xs">
                      <li>🖱️ Left Click + Drag: Rotate</li>
                      <li>🖱️ Right Click + Drag: Pan</li>
                      <li>⚲ Scroll: Zoom</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-300">And this is what the final result looks like.</p>

                <div className="relative w-full aspect-[16/5] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/images/projects/patio/IMG_2916.webp"
                    alt="Pano After"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative w-full aspect-[16/5] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/images/projects/patio/IMG_2918.webp"
                    alt="Pano After"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/patio/IMG_2911.webp"
                      alt="Left After"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/patio/IMG_2912.webp"
                      alt="Right After"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/patio/IMG_2913.webp"
                      alt="Left After"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/patio/IMG_2914.webp"
                      alt="Right After"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
  }