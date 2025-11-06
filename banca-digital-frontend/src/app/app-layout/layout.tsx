import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import "@/styles/globals.css";
import HeaderBar from "@/components/header/HeaderBar";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${poppins.variable} antialiased`}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-auto">
            <HeaderBar />
            <main className="flex-1 p-6 bg-gray-100 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
