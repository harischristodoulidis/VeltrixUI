import { Bell, FileText, Home, Settings, Users } from "lucide-react";
import Sidebar from "../ui/Sidebar";

const items = [
  { label: "Home", icon: Home, active: true, href: "/" },
  { label: "Users", icon: Users, href: "#users" },
  {
    label: "Documents",
    badge: 2,
    icon: FileText,
    href: "#documents",
  },
  {
    label: "Notifications",
    icon: Bell,
    badge: 12,
    href: "#notifications/?filter=all",
  },
  { label: "Settings", icon: Settings, href: "#settings" },
];

export default function SidebarContent() {
  return (
    <div className="mb-6">
      <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
        Sidebar
      </h3>
      <div className="border-border h-87.5 overflow-hidden rounded-lg border sm:h-100">
        <Sidebar
          header={
            <div className="text-base font-semibold sm:text-lg">Dashboard</div>
          }
          items={items}
          footer={
            <div className="flex items-center gap-3">
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium">John Doe</div>
                <div className="text-muted-foreground truncate text-xs">
                  john@example.com
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
