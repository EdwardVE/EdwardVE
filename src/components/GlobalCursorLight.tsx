"use client";

import { useEffect, useState } from "react";

export default function GlobalCursorLight() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lightPos, setLightPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const frame = () => {
      // Lerp: suaviza el movimiento de la luz
      setLightPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(frame);
    };
    frame();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos]);

  return (
    <>
      <div
        className="pointer-events-none fixed w-60 h-60 rounded-full bg-purple-400 opacity-30 blur-3xl mix-blend-color-dodge transition-transform duration-100"
        style={{
          transform: `translate(${lightPos.x - 120}px, ${lightPos.y - 120}px)`,
        }}
      />
    </>
  );
}
