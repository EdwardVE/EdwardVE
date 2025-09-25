"use client";

import { useEffect, useRef, useState } from "react";

export default function GlobalCursorLight() {
  const mousePos = useRef({ x: 0, y: 0 });
  const [lightPos, setLightPos] = useState({ x: 0, y: 0 });

  const lightRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(120); // valor inicial por defecto

  useEffect(() => {
    // Calcular la mitad del ancho del círculo dinámicamente
    if (lightRef.current) {
      const rect = lightRef.current.getBoundingClientRect();
      setOffset(rect.width / 2);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const lerpFactor = 0.1;

    const frame = () => {
      setLightPos((prev) => {
        const newX = prev.x + (mousePos.current.x - prev.x) * lerpFactor;
        const newY = prev.y + (mousePos.current.y - prev.y) * lerpFactor;
        return { x: newX, y: newY };
      });
      animationFrameId = requestAnimationFrame(frame);
    };

    frame();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={lightRef}
      className="pointer-events-none fixed w-60 h-60 rounded-full bg-purple-400 opacity-30 blur-3xl mix-blend-color-dodge transition-transform duration-100"
      style={{
        transform: `translate(${lightPos.x - offset}px, ${lightPos.y - offset}px)`,
      }}
    />
  );
}
