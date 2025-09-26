"use client";

import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

// ===== SHADER MATERIAL =====
const WaveShaderMaterial = shaderMaterial(
  { time: 0, color1: new THREE.Color("#ff00a8"), color2: new THREE.Color("#00f0ff") },
  // Vertex Shader
  `
    uniform float time;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 newPosition = position;

      // deformación con ondas
      newPosition.z += sin(position.y * 5.0 + time * 2.0) * 0.2;
      newPosition.x += cos(position.y * 3.0 + time * 1.5) * 0.15;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;

    void main() {
      vec3 color = mix(color1, color2, vUv.y);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ WaveShaderMaterial });

// 🔑 Aquí está el fix:
declare module "@react-three/fiber" {
  interface ThreeElements {
    waveShaderMaterial: React.JSX.IntrinsicElements["shaderMaterial"];
  }
}

// ===== ESFERA =====
function SphereMesh() {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={1.5}>
      <sphereGeometry args={[1, 128, 128]} />
      <waveShaderMaterial ref={materialRef} />
    </mesh>
  );
}

// ===== CANVAS =====
export default function WaveSphere() {
  return (
    <div className="absolute inset-0 z-50 bg-pink-500">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <SphereMesh />
      </Canvas>
    </div>
  );
}
