// Enhanced Image Disintegration Component
import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

interface ParticleUserData {
  originalPosition: THREE.Vector3;
  velocity: THREE.Vector3;
  rotationSpeed: THREE.Vector3;
  spiralOffset: number;
}

interface ImageHandDisintegrationProps {
  imageSrc?: string;
  particleDensity?: 'low' | 'medium' | 'high';
  disintegrationSpeed?: number;
  spiralIntensity?: number;
  showStats?: boolean;
}

export default function ImageHandDisintegration({
  imageSrc = '/Images/hand-of-adam.png',
  particleDensity = 'medium',
  disintegrationSpeed = 1,
  spiralIntensity = 1,
  showStats = false
}: ImageHandDisintegrationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial>[]>([]);
  const particleGeometryRef = useRef<THREE.SphereGeometry | null>(null);
  const scrollProgressRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [particleCount, setParticleCount] = useState<number>(0);
  const [fps, setFps] = useState<number>(60);

  const createParticlesFromImage = useCallback((imgSrc: string) => {
    const scene = sceneRef.current;
    if (!scene) return;

    setImageLoaded(false);

    // Clear existing particles efficiently
    particlesRef.current.forEach(particle => {
      particle.material.dispose();
      scene.remove(particle);
    });
    particlesRef.current = [];

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      // Density-based particle sampling
      const densityMap = { low: 100, medium: 150, high: 200 };
      const maxSize = densityMap[particleDensity];
      const scale = Math.min(maxSize / img.width, maxSize / img.height);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      // Reuse geometry for better performance
      if (!particleGeometryRef.current) {
        particleGeometryRef.current = new THREE.SphereGeometry(0.08, 8, 8);
      }
      const particleGeometry = particleGeometryRef.current;

      const aspectRatio = canvas.width / canvas.height;
      const imageHeight = 15;
      const imageWidth = imageHeight * aspectRatio;

      // Adaptive sampling step based on density
      const stepMap = { low: 3, medium: 2, high: 1.5 };
      const step = stepMap[particleDensity];

      let count = 0;

      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const i = (Math.floor(y) * canvas.width + Math.floor(x)) * 4;
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const a = pixels[i + 3];

          if (a < 50) continue;

          const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(`rgb(${r}, ${g}, ${b})`),
            emissive: new THREE.Color(`rgb(${Math.floor(r * 0.5)}, ${Math.floor(g * 0.5)}, ${Math.floor(b * 0.5)})`),
            emissiveIntensity: 0.2,
            shininess: 30,
          });

          const particle = new THREE.Mesh(particleGeometry, material);

          const px = -20 + (x / canvas.width) * imageWidth;
          const py = (1 - y / canvas.height) * imageHeight - imageHeight / 2;
          const pz = (Math.random() - 0.5) * 0.5;

          particle.position.set(px, py, pz);

          const userData: ParticleUserData = {
            originalPosition: particle.position.clone(),
            velocity: new THREE.Vector3(
              (Math.random() - 0.5) * 0.12 + (px > -10 ? 0.08 : 0.05),
              Math.random() * 0.1,
              (Math.random() - 0.5) * 0.12
            ),
            rotationSpeed: new THREE.Vector3(
              (Math.random() - 0.5) * 0.2,
              (Math.random() - 0.5) * 0.2,
              (Math.random() - 0.5) * 0.2
            ),
            spiralOffset: Math.random() * Math.PI * 2,
          };

          particle.userData = userData;
          particle.frustumCulled = true;

          scene.add(particle);
          particlesRef.current.push(particle);
          count++;
        }
      }

      setParticleCount(count);
      setImageLoaded(true);
    };

    img.onerror = () => {
      console.error('Failed to load image:', imgSrc);
      setImageLoaded(false);
    };

    img.src = imgSrc;
  }, [particleDensity]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 25);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
    keyLight.position.set(10, 10, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-10, 5, -5);
    scene.add(fillLight);

    createParticlesFromImage(imageSrc);

    let lastTime = performance.now();
    let frameCount = 0;
    let fpsUpdateTime = lastTime;

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      const currentTime = performance.now();
      frameCount++;

      if (currentTime - fpsUpdateTime > 1000) {
        setFps(Math.round(frameCount * 1000 / (currentTime - fpsUpdateTime)));
        frameCount = 0;
        fpsUpdateTime = currentTime;
      }

      const particles = particlesRef.current;
      const scrollProgress = scrollProgressRef.current;
      const animationProgress = Math.min(scrollProgress / (0.75 / disintegrationSpeed), 1);
      const hasActiveAnimation = animationProgress > 0 && animationProgress < 1;

      if (hasActiveAnimation !== isAnimating) {
        setIsAnimating(hasActiveAnimation);
      }

      particles.forEach((particle, index) => {
        const userData = particle.userData as ParticleUserData;
        const delay = (index / particles.length) * 0.2;
        const progress = Math.max(0, Math.min(1, (animationProgress - delay) / 0.8));

        if (progress > 0) {
          const spiralAngle = progress * Math.PI * 4;
          const spiralRadius = progress * 4 * spiralIntensity;

          const disp = userData.velocity.clone().multiplyScalar(progress * 40);
          disp.x += Math.cos(spiralAngle + userData.spiralOffset) * spiralRadius * 0.5;
          disp.y += Math.sin(spiralAngle * 0.5) * spiralRadius * 0.3;
          disp.z += Math.sin(spiralAngle + userData.spiralOffset) * spiralRadius * 0.5;

          particle.position.copy(userData.originalPosition).add(disp);

          particle.rotation.x += userData.rotationSpeed.x * progress * 0.6;
          particle.rotation.y += userData.rotationSpeed.y * progress * 0.6;
          particle.rotation.z += userData.rotationSpeed.z * progress * 0.4;

          const fadeStart = 0.7;
          const fadeProgress = Math.max(0, (progress - fadeStart) / (1 - fadeStart));
          particle.material.opacity = 1 - fadeProgress;
          particle.material.emissiveIntensity = 0.2 + fadeProgress * 0.8;
          particle.material.transparent = true;
          particle.visible = progress < 0.99;

          const scale = 1 - progress * 0.7;
          particle.scale.set(scale, scale, scale);
        } else {
          particle.position.copy(userData.originalPosition);
          particle.material.opacity = 1;
          particle.material.emissiveIntensity = 0.2;
          particle.visible = true;
          particle.rotation.set(0, 0, 0);
          particle.scale.set(1, 1, 1);
        }
      });

      scene.rotation.y = Math.sin(currentTime * 0.0001) * 0.05;
      renderer.render(scene, camera);

      lastTime = currentTime;
    };

    animate();

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgressRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      particlesRef.current.forEach(particle => {
        particle.material.dispose();
        scene.remove(particle);
      });

      if (particleGeometryRef.current) {
        particleGeometryRef.current.dispose();
      }

      if (rendererRef.current && containerRef.current) {
        const canvas = rendererRef.current.domElement;
        if (containerRef.current.contains(canvas)) {
          containerRef.current.removeChild(canvas);
        }
        rendererRef.current.dispose();
      }
    };
  }, [disintegrationSpeed, spiralIntensity, createParticlesFromImage, imageSrc]);

  useEffect(() => {
    if (imageSrc && sceneRef.current) {
      createParticlesFromImage(imageSrc);
    }
  }, [imageSrc, createParticlesFromImage]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat opacity-5 -z-10"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'contain',
          filter: 'blur(20px)',
        }}
      />

      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {imageLoaded && (
        <div className="fixed top-6 left-6 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm text-white px-5 py-3 rounded-xl shadow-lg z-10 pointer-events-none text-sm font-medium border border-slate-700/50 flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span>Scroll to disintegrate</span>
        </div>
      )}

      {showStats && imageLoaded && (
        <div className="fixed top-6 right-6 bg-slate-900/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg shadow-lg z-10 pointer-events-none text-xs font-mono border border-slate-700/50 space-y-1">
          <div className="flex justify-between gap-4">
            <span className="text-slate-400">Particles:</span>
            <span className="text-emerald-400">{particleCount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-400">FPS:</span>
            <span className={fps > 50 ? "text-emerald-400" : fps > 30 ? "text-yellow-400" : "text-red-400"}>
              {fps}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-400">Density:</span>
            <span className="text-blue-400">{particleDensity}</span>
          </div>
        </div>
      )}
    </>
  );
}
