import { SidebarLinks } from "@/config/contracts/sidebar-contract";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavigationLinks() {
  const pathname = usePathname();
  return (
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
              <Image src={link.icon} alt={link.label} width={24} height={24} />
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
  );
}
