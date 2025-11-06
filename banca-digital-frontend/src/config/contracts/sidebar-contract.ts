export interface SidebarLink {
  href: string;
  label: string;
  icon: string;
}

export const SidebarLinks: SidebarLink[] = [
  {
    href: "/app-layout/dashboard",
    label: "Dashboard",
    icon: "/sidebar_icons/dashboard_icon.svg",
  },
  {
    href: "/app-layout/transferir",
    label: "Transferir",
    icon: "/sidebar_icons/transferir_icon.svg",
  },
  {
    href: "",
    label: "Pagar",
    icon: "/sidebar_icons/pagar_icon.svg",
  },
  {
    href: "/app-layout/mis-transacciones",
    label: "Mis transacciones",
    icon: "/sidebar_icons/mistransacciones_icon.svg",
  },
  {
    href: "",
    label: "Gestionar",
    icon: "/sidebar_icons/gestionar_icon.svg",
  },
  {
    href: "",
    label: "Cheques",
    icon: "/sidebar_icons/cheques_icon.svg",
  },
  {
    href: "",
    label: "Paganet",
    icon: "/sidebar_icons/paganet_icon.svg",
  },
  {
    href: "",
    label: "Administrar",
    icon: "/sidebar_icons/mistransacciones_icon.svg",
  },
  {
    href: "",
    label: "Ahorro Automático",
    icon: "/sidebar_icons/ahorro_icon.svg",
  },
  {
    href: "",
    label: "Configuración",
    icon: "/sidebar_icons/configuraciones_icon.svg",
  },
];
