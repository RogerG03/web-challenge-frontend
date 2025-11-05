import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Banca Digital",
  description:
    "Nueva plantaforma de banca digital para usuarios modernos. Ofrecida por Lafice.",
  icons: {
    icon: "/lafise_isotype.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          {/* Menú lateral */}
          <aside className="w-64 bg-[#F9FAF9] text-black p-4">
            <Image
              src="/lafise_logo.png"
              alt="logo lafise"
              width="193"
              layout="responsive"
              height="63"
            ></Image>
            <nav className="flex flex-col gap-2">
              <Link href="/app-layout/dashboard">Dashboard</Link>
              <Link href="/app-layout/transferencias">Transferencias</Link>
              <Link href="/app-layout/historial">Historial</Link>
            </nav>
          </aside>

          {/* Contenido principal */}
          <main className="flex-1 p-6 bg-gray-100 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
