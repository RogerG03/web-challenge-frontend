"use client";
import Image from "next/image";
import ExchangeRate from "./ExchangeRate";
import { getCurrentDateTime } from "@/utils/currentDateTime";
import { useGlobal } from "@/context/GlobalContext";
import { animate, createScope } from "animejs";
import { useRef, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";

export default function Sidebar() {
  const sidebarRef = useRef<HTMLElement>(0 as unknown as HTMLElement);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  const { isSidebarOpen } = useGlobal();

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
      <section className="text-sm text-gray-600">
        <p>IP del servidor: {""}</p>
        <p>Ultimo Acceso: {getCurrentDateTime()}</p>
      </section>
    </aside>
  );
}
