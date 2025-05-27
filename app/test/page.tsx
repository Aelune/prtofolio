'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const jobs = [
  { title: 'Intern', description: 'Started at the bottom.' },
  { title: 'Junior Developer', description: 'Learning and growing.' },
  { title: 'Mid-Level Developer', description: 'Handling real responsibilities.' },
  { title: 'Senior Developer', description: 'Leading teams and projects.' },
  { title: 'Tech Lead', description: 'Architecting systems and mentoring.' },
  { title: 'Engineering Manager', description: 'Managing teams and product delivery.' },
];

function createMountain() {
  const geometry = new THREE.PlaneGeometry(20, 20, 100, 100);
  geometry.rotateX(-Math.PI / 2);

  for (let i = 0; i < geometry.attributes.position.count; i++) {
    const x = geometry.attributes.position.getX(i);
    const y = geometry.attributes.position.getY(i);
    const dist = Math.sqrt(x * x + y * y);
    const height = Math.max(0, 5 - dist * 0.5) + Math.random() * 0.2;
    geometry.attributes.position.setZ(i, height);
  }

  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    color: 0x8B4513,
    flatShading: true,
  });

  const mountain = new THREE.Mesh(geometry, material);
  mountain.receiveShadow = true;
  return mountain;
}

function createSisyphus() {
  const group = new THREE.Group();
  const material = new THREE.MeshStandardMaterial({ color: 0xffc0cb });

  // Torso (tilted forward)
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.6), material);
  torso.rotation.x = Math.PI / 10;
  torso.position.set(0, 0.9, 0);
  group.add(torso);

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15), material);
  head.position.set(0, 1.3, 0.1);
  group.add(head);

  // Arms
  const armGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.4);
  const leftArm = new THREE.Mesh(armGeometry, material);
  leftArm.rotation.set(0, 0, Math.PI / 2.5);
  leftArm.position.set(-0.25, 1.1, 0.2);
  group.add(leftArm);

  const rightArm = new THREE.Mesh(armGeometry, material);
  rightArm.rotation.set(0, 0, -Math.PI / 2.5);
  rightArm.position.set(0.25, 1.1, 0.2);
  group.add(rightArm);

  // Legs
  const legGeometry = new THREE.CylinderGeometry(0.07, 0.07, 0.5);
  const leftLeg = new THREE.Mesh(legGeometry, material);
  leftLeg.position.set(-0.1, 0.4, 0);
  group.add(leftLeg);

  const rightLeg = new THREE.Mesh(legGeometry, material);
  rightLeg.position.set(0.1, 0.4, 0);
  group.add(rightLeg);

  // Boulder
  const boulder = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0x333333 })
  );
  boulder.position.set(0, 1.1, 0.5);
  boulder.castShadow = true;
  group.add(boulder);

  group.castShadow = true;
  return group;
}

export default function ExperienceVisualization() {
  const mountRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(5, 5, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const mountain = createMountain();
    scene.add(mountain);

    const sisyphus = createSisyphus();
    scene.add(sisyphus);

    const animate = () => {
      requestAnimationFrame(animate);

      const t = currentIndex / (jobs.length - 1);
      const y = t * 5;
      const z = -t * 5;
      sisyphus.position.set(0, y, z);
      sisyphus.rotation.y = Math.atan2(-5, 5);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    const onScroll = () => {
      const index = Math.floor(window.scrollY / window.innerHeight);
      setCurrentIndex(Math.min(jobs.length - 1, Math.max(0, index)));
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <div ref={mountRef} className="fixed inset-0 -z-10" />
      {jobs.map((job, index) => (
        <div
          key={index}
          className="h-screen text-black flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">{job.title}</h1>
            <p className="text-xl mt-2">{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
