"use client";
import Image from "next/image";
import ExchangeRate from "./ExchangeRate";
import { useGlobal } from "@/context/GlobalContext";
import { animate, createScope } from "animejs";
import { useRef, useEffect, useState } from "react";
import NavigationLinks from "./NavigationLinks";
import Config from "@/config/api-config.json";

export default function Sidebar() {
  const sidebarRef = useRef<HTMLElement>(0 as unknown as HTMLElement);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  const { isSidebarOpen, setIsSidebarOpen } = useGlobal();
  useEffect(() => {
    if (!sidebarRef.current) return;

    // Crear scope para encapsular la animación
    scope.current = createScope({ root: sidebarRef.current }).add(() => {
      animate(sidebarRef.current, {
        translateX: isSidebarOpen ? 0 : -300,
        duration: 400,
        easing: "easeOutCubic",
        complete: () => {
          if (!isSidebarOpen) sidebarRef.current!.classList.add("hidden");
          else sidebarRef.current!.classList.remove("hidden");
        },
      });
    });

    return () => scope.current?.revert(); // limpiar animación al desmontar
  }, [isSidebarOpen]);

  const [currentDate] = useState(() => new Date().toLocaleString());
  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <aside
      ref={sidebarRef}
      className={`"flex flex-col gap-5 w-full max-w-[280px] bg-nav p-6 overflow-y-auto `}
    >
      <Image
        src="/lafise_logo.svg"
        alt="Logo Lafise"
        width={192}
        height={63}
        layout="fixed"
      />
      {/*links de navegación */}
      <NavigationLinks></NavigationLinks>
      {/*Tasa de cambio */}
      <ExchangeRate></ExchangeRate>
      <section className="text-sm mt-2 text-gray-600">
        <p>
          IP del servidor:{" "}
          {Config.api.baseUrl.replace("http://", "").split("/")[0]}
        </p>
        <p>Ultimo Acceso: {currentDate}</p>
      </section>
      <button
        onClick={toggleSidebar}
        title="Boton barra lateral"
        className="btn-mobile-only text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Image
          src="/header_icons/hamburguesa_icon.svg"
          width={24}
          height={24}
          alt="Boton menu barra lateral"
        ></Image>
      </button>
    </aside>
  );
}
