import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebars from "@/components/Sidebars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edward Vasallo - Portfolio",
  description: "Portafolio personal de Edward Vasallo, Full Stack Web Developer.",
    icons: {
    // Configura el ícono principal (favicon)
    icon: '/icon.svg', // Ruta al ícono en la carpeta public
    // Opcional: Si hiciste un ícono de 180x180 para Apple/móviles
    // apple: '/apple-icon.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-950 text-white `}>
        <Navbar />
        <main className="bg-gray-950 pt-20">
          <div className=" max-w-6xl mx-auto px-6 md:px-12">{children}</div>
        </main>
        <Sidebars/>
        <Footer />
      </body>
    </html>
  );
}
