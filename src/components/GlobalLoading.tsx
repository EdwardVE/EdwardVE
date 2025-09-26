"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function GlobalLoading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // dura 1.5s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
        <Loader2 className="w-10 h-10 animate-spin text-purple-500" />
        <span className="ml-3 text-lg">Cargando...</span>
      </div>
    );
  }

  return <>{children}</>;
}
