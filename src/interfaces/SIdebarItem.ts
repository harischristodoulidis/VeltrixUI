import type { LucideIcon } from "lucide-react";

export default interface SidebarItem {
  label: string;
  icon?: LucideIcon;
  active?: boolean;
  badge?: string | number;
  href?: string;
  onClick?: () => void;
}
