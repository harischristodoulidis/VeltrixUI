import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";
import Button from "../ui/Button";
import { Bell, FileText, Home, Settings, Users } from "lucide-react";

export default function Navbars() {
  const items = [
    { id: "Home", label: "Home", active: true },
    { id: "Products", label: "Products" },
    { id: "About", label: "About" },
    { id: "Contact", label: "Contact" },
  ];

  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-foreground mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
        Navigation
      </h2>

      {/* Navbar */}
      <div className="mb-6">
        <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
          Navbar
        </h3>
        <div className="border-border rounded-lg border">
          <Navbar
            brand="Brand"
            items={[
              {
                label: "Home",
                href: "#home",
                active: true,
              },
              {
                label: "Products",
                children: [
                  { label: "All Products", href: "#all-products" },
                  { label: "New Arrivals", href: "#new-arrivals" },
                  { label: "Best Sellers", href: "#best-sellers" },
                  { label: "Sale", href: "#sale", active: false },
                ],
              },
              {
                label: "Services",
                children: [
                  { label: "Consulting", href: "#consulting" },
                  { label: "Development", href: "#development" },
                  { label: "Support", href: "#support" },
                ],
              },
              {
                label: "About",
                href: "#about",
              },
              {
                label: "Contact",
                href: "#contact",
              },
            ]}
            actions={
              <>
                <Button variant="outline">Sign In</Button>
                <Button variant="primary">Sign Up</Button>
              </>
            }
            mobileActions={
              <>
                <Button variant="secondary">Sign In</Button>
                <Button variant="primary">Sign Up</Button>
              </>
            }
          />
        </div>
      </div>

      {/* Sidebar */}
      <div className="mb-6">
        <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
          Sidebar
        </h3>
        <div className="border-border h-87.5 overflow-hidden rounded-lg border sm:h-[400px]">
          <Sidebar
            header={
              <div className="text-base font-semibold sm:text-lg">
                Dashboard
              </div>
            }
            items={[
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
            ]}
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
    </section>
  );
}
