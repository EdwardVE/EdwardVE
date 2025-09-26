"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Points,
  PointMaterial,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

export default function CanvasLoader() {
  const [progress, setProgress] = useState(0);

  // Simulación de carga: exactamente 3 segundos
  useEffect(() => {
    let start: number | null = null;
    const duration = 3000; // 3 segundos

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  // Generamos partículas
  const particles = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 0.5;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 1.5;

      positions[i * 3] = r * Math.cos(angle);
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = r * Math.sin(angle);
    }
    return positions;
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-gray-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      {/* Canvas con esfera + partículas */}
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        <Sphere args={[1, 64, 64]} scale={1.5}>
          <MeshDistortMaterial
            color="#8A2BE2"
            emissive="#00ffff2d"
            emissiveIntensity={0.3}
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </Sphere>

        <Points positions={particles}>
          <PointMaterial
            transparent
            color="#ff00ff"
            size={0.03}
            sizeAttenuation
            depthWrite={false}
          />
        </Points>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        {/* <Icosahedron args={[1, 1]}>
          <meshStandardMaterial color="#8A2BE2" wireframe />
        </Icosahedron> */}
        {/* <Torus args={[1, 0.3, 64, 128]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#00ffff" />
        </Torus> */}
      </Canvas>

      {/* Barra de carga */}
      <div className="absolute bottom-20 w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Texto progreso */}
      <p className="absolute bottom-12 text-gray-300 text-sm font-mono">
        {Math.round(progress)}%
      </p>
    </motion.div>
  );
}
