import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalCursorLight from "@/components/GlobalCursorLight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edward Vasallo - Portfolio",
  description: "Portafolio personal de Edward Vasallo, Full Stack Web Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-950 text-white `}>
        <GlobalCursorLight/>
        <Navbar />
        <main className="bg-gray-950 pt-20">
          <div className=" max-w-6xl mx-auto px-6 md:px-12">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
