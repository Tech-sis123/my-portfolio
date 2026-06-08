"use client";

import type * as ThreeTypes from "three";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function ThreeBackground() {
  const { resolvedTheme } = useTheme();
  const mountedRef = useRef(false);
  const sceneRef = useRef<ThreeTypes.Scene | null>(null);
  const materialsRef = useRef<ThreeTypes.PointsMaterial[]>([]);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    let animId: number;
    let THREE: typeof import("three");

    async function init() {
      THREE = await import("three");

      const canvas = document.getElementById("three-canvas") as HTMLCanvasElement;
      if (!canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Transparent background to let CSS theme show through

      const scene = new THREE.Scene();
      sceneRef.current = scene;
      
      const isLight = document.documentElement.classList.contains("light") || resolvedTheme === "light";
      scene.fog = new THREE.Fog(isLight ? 0xf5f3ef : 0x070707, 3.5, 11);

      const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 20);
      camera.position.set(0, 0, 5);

      // Domain colors (muted)
      const domainColors = [0x22d3ee, 0xfb923c, 0xc084fc, 0x60a5fa];
      const nodePositions = [
        new THREE.Vector3(-1.2, 0.8, -0.5),
        new THREE.Vector3(1.2, 0.8, 0.3),
        new THREE.Vector3(-0.5, -1.1, 0.4),
        new THREE.Vector3(0.8, -0.8, -0.3),
      ];

      const nodeMeshes: ThreeTypes.Mesh[] = [];

      // Nodes: small core + halo
      nodePositions.forEach((pos, i) => {
        const color = domainColors[i];

        // Core
        const coreGeo = new THREE.SphereGeometry(0.04, 8, 8);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 });
        const core = new THREE.Mesh(coreGeo, coreMat);
        core.position.copy(pos);
        scene.add(core);

        // Halo
        const haloGeo = new THREE.SphereGeometry(0.22, 12, 12);
        const haloMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.06, side: THREE.BackSide });
        const halo = new THREE.Mesh(haloGeo, haloMat);
        halo.position.copy(pos);
        scene.add(halo);
        nodeMeshes.push(halo);
      });

      // Connecting lines removed per user request for a cleaner, star-like aesthetic

      // Dust particles — primary layer
      const primaryCount = 450;
      const primaryPos = new Float32Array(primaryCount * 3);
      for (let i = 0; i < primaryCount; i++) {
        primaryPos[i * 3] = (Math.random() - 0.5) * 8;
        primaryPos[i * 3 + 1] = (Math.random() - 0.5) * 8;
        primaryPos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      }
      const primaryGeo = new THREE.BufferGeometry();
      primaryGeo.setAttribute("position", new THREE.BufferAttribute(primaryPos, 3));
      const particleColor = (document.documentElement.classList.contains("light") || resolvedTheme === "light") ? 0x070707 : 0xffffff;
      const primaryMat = new THREE.PointsMaterial({ color: particleColor, size: 0.012, transparent: true, opacity: 0.55 });
      materialsRef.current.push(primaryMat as unknown as ThreeTypes.PointsMaterial);
      const primaryDust = new THREE.Points(primaryGeo, primaryMat);
      scene.add(primaryDust);

      // Dust particles — secondary depth layer
      const secondaryCount = 200;
      const secondaryPos = new Float32Array(secondaryCount * 3);
      for (let i = 0; i < secondaryCount; i++) {
        secondaryPos[i * 3] = (Math.random() - 0.5) * 10;
        secondaryPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
        secondaryPos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
      }
      const secondaryGeo = new THREE.BufferGeometry();
      secondaryGeo.setAttribute("position", new THREE.BufferAttribute(secondaryPos, 3));
      const secondaryMat = new THREE.PointsMaterial({ color: particleColor, size: 0.008, transparent: true, opacity: 0.25 });
      materialsRef.current.push(secondaryMat as unknown as ThreeTypes.PointsMaterial);
      scene.add(new THREE.Points(secondaryGeo, secondaryMat));

      // Mouse parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouseMove);

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      const clock = new THREE.Clock();

      function animate() {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        // Ambient camera drift
        targetX += (mouseX * 0.3 - targetX) * 0.03;
        targetY += (mouseY * -0.2 - targetY) * 0.03;

        const scrollY = window.scrollY || 0;
        camera.position.x = targetX * 0.4;
        camera.position.y = targetY * 0.3 + scrollY * 0.0008;
        camera.position.z = 5 + Math.sin(t * 0.15) * 0.1;

        // Drift particles slowly
        primaryDust.rotation.y = t * 0.006;
        primaryDust.rotation.x = t * 0.003;

        // Pulse nodes
        nodeMeshes.forEach((halo, i) => {
          const phase = (i / nodeMeshes.length) * Math.PI * 2;
          const s = 1 + Math.sin(t * 0.7 + phase) * 0.08;
          halo.scale.setScalar(s);
          (halo.material as ThreeTypes.MeshBasicMaterial).opacity = 0.06 + Math.sin(t * 0.7 + phase) * 0.02;
        });

        renderer.render(scene, camera);
      }

      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
      };
    }

    let cleanup: (() => void) | void;
    init().then((fn) => { cleanup = fn; });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  // Effect to handle theme changes dynamically
  useEffect(() => {
    if (!sceneRef.current || !resolvedTheme) return;
    const isLight = resolvedTheme === "light";
    const fogColor = isLight ? 0xf5f3ef : 0x070707;
    const particleColor = isLight ? 0x070707 : 0xffffff;

    if (sceneRef.current.fog) {
      (sceneRef.current.fog as ThreeTypes.Fog).color.setHex(fogColor);
    }
    materialsRef.current.forEach((mat) => {
      mat.color.setHex(particleColor);
    });
  }, [resolvedTheme]);

  return <canvas id="three-canvas" aria-hidden="true" />;
}
