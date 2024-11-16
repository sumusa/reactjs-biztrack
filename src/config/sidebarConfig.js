import {
  DashboardIcon,
  ShoppingCartIcon,
  UserIcon,
  SettingsIcon,
} from "lucide-react";

export const sidebarConfig = [
  {
    label: "Dashboard",
    href: "/",
    icon: DashboardIcon,
  },
  {
    label: "Products",
    href: "/products",
    icon: ShoppingCartIcon,
  },
  {
    label: "Customers",
    href: "/customers",
    icon: UserIcon,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
];
