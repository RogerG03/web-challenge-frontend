"use client";
import Link from "next/link";
import Image from "next/image";
import { SidebarLinks } from "@/config/contracts/sidebar-contract";
import { usePathname } from "next/navigation";
import ExchangeRate from "./ExchangeRate";
import { getCurrentDateTime } from "@/utils/currentDateTime";
//import anime from "animejs";
//import { useRef, useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();

  /*const sidebarRef = useRef(null);

 useEffect(() => {
    if (sidebarRef.current) {
      anime({
        targets: sidebarRef.current,
        translateX: isOpen ? 0 : -280,
        easing: "easeInOutQuad",
        duration: 300,
      });
    }
  }, [isOpen]); */

  return (
    <aside className="flex flex-col gap-5 w-full max-w-[280px] bg-nav p-6 overflow-y-auto">
      <Image
        src="/lafise_logo.svg"
        alt="Logo Lafise"
        width={192}
        height={63}
        layout="fixed"
      />
      <nav className="flex flex-col gap-2 mt-4">
        {SidebarLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href || "#"}
              className={`flex items-center gap-2 p-2 rounded transition-colors justify-between
                ${isActive ? "highlight-item" : "highlight-item-hover"}`}
            >
              <div className="flex gap-3">
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <span className="text-base">{link.label}</span>
              </div>
              <Image
                src={"/sidebar_icons/flecha_derecha_icon.svg"}
                alt={"flecha deco"}
                width={24}
                height={24}
              ></Image>
            </Link>
          );
        })}
      </nav>
      <ExchangeRate></ExchangeRate>
      <section className="text-sm text-gray-600">
        <p>IP del servidor: {""}</p>
        <p>Ultimo Acceso: {getCurrentDateTime()}</p>
      </section>
    </aside>
  );
}
