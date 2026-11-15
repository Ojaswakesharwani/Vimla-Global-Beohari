import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;
    camera.position.y = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group for all elements
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // 1. Central Globe / Knowledge Sphere (Wireframe Globe)
    const globeGeo = new THREE.SphereGeometry(4.2, 24, 24);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x0B2545,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    sceneGroup.add(globe);

    // 2. Inner Golden Ring (Global Vision)
    const ringGeo1 = new THREE.TorusGeometry(5.2, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xD9822B,
      transparent: true,
      opacity: 0.35
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    sceneGroup.add(ring1);

    // 3. Second Forest Green Orbit Ring (Local Roots)
    const ringGeo2 = new THREE.TorusGeometry(6.0, 0.035, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x1E6F50,
      transparent: true,
      opacity: 0.3
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    sceneGroup.add(ring2);

    // 4. Floating Geometric Knowledge Polyhedra (Books / Wisdom crystals)
    const geometries = [
      new THREE.IcosahedronGeometry(0.65, 0),
      new THREE.OctahedronGeometry(0.55, 0),
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.DodecahedronGeometry(0.5, 0)
    ];

    const polyGroup = new THREE.Group();
    const count = 16;
    const polys = [];

    for (let i = 0; i < count; i++) {
      const geo = geometries[i % geometries.length];
      const isGold = i % 3 === 0;
      const isGreen = i % 3 === 1;
      const col = isGold ? 0xD9822B : (isGreen ? 0x1E6F50 : 0x0B2545);
      
      const mat = new THREE.MeshBasicMaterial({
        color: col,
        wireframe: true,
        transparent: true,
        opacity: 0.22 + (Math.random() * 0.18)
      });

      const mesh = new THREE.Mesh(geo, mat);
      const angle = (i / count) * Math.PI * 2;
      const radius = 6.5 + Math.random() * 4.5;
      const height = (Math.random() - 0.5) * 7.0;

      mesh.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );

      mesh.userData = {
        speedX: (Math.random() - 0.5) * 0.015,
        speedY: (Math.random() - 0.5) * 0.015,
        orbitSpeed: 0.0015 + Math.random() * 0.002,
        initialAngle: angle,
        orbitRadius: radius,
        height: height
      };

      polyGroup.add(mesh);
      polys.push(mesh);
    }
    sceneGroup.add(polyGroup);

    // 5. Constellation Dots / Stars
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 60;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 26;
      starPositions[i + 1] = (Math.random() - 0.5) * 16;
      starPositions[i + 2] = (Math.random() - 0.5) * 12;
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xD9822B,
      size: 0.09,
      transparent: true,
      opacity: 0.4
    });
    const starPoints = new THREE.Points(starsGeo, starMat);
    sceneGroup.add(starPoints);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.6;
      targetY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        time += 0.008;

        // Smooth camera parallax
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        sceneGroup.rotation.y = time * 0.2 + mouseX * 0.3;
        sceneGroup.rotation.x = mouseY * 0.2;

        ring1.rotation.z += 0.003;
        ring2.rotation.z -= 0.0025;
        globe.rotation.y += 0.001;

        polys.forEach((p) => {
          p.rotation.x += p.userData.speedX;
          p.rotation.y += p.userData.speedY;
          const currentAngle = p.userData.initialAngle + time * p.userData.orbitSpeed * 10;
          p.position.x = Math.cos(currentAngle) * p.userData.orbitRadius;
          p.position.z = Math.sin(currentAngle) * p.userData.orbitRadius;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      globeGeo.dispose();
      globeMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      starsGeo.dispose();
      starMat.dispose();
      geometries.forEach(g => g.dispose());
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    />
  );
}
