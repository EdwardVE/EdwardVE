"use client"

import { useEffect, useState } from "react";
import CanvasLoader from "./CanvasLoader";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // dura 3s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <CanvasLoader />; // tu loader 3D
  }

  return <>{children}</>;
}
