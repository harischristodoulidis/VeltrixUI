import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DesktopNavItem from "./DesktopNavItem";
import type NavItem from "../../interfaces/NavItem";
import MobileNavItem from "./MobileNavItem";

export interface NavbarProps {
  brand?: React.ReactNode;
  items?: NavItem[];
  actions?: React.ReactNode;
  mobileActions?: React.ReactNode;
}

export default function Navbar({
  brand,
  items = [],
  actions,
  mobileActions,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="border-border w-full border-b px-3 py-2.5 sm:px-4 sm:py-3">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-6">
            {/* Mobile Menu Button */}
            {items.length > 0 && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-muted-foreground shrink-0 transition-colors lg:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            )}

            {/* Brand */}
            {brand && (
              <div className="text-foreground truncate text-base font-semibold sm:text-lg">
                {brand}
              </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {items.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
            </div>

            {/* Desktop Actions */}
            {actions && (
              <div className="hidden shrink-0 items-center gap-2 sm:flex">
                {actions}
              </div>
            )}

            {/* Mobile Actions */}
            {mobileActions && (
              <div className="flex shrink-0 items-center gap-2 sm:hidden">
                {mobileActions}
              </div>
            )}
            {!mobileActions && actions && (
              <div className="flex shrink-0 items-center gap-2 sm:hidden">
                {actions}
              </div>
            )}

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Mobile Menu Drawer */}
                <div className="border-border fixed top-0 bottom-0 left-0 z-50 w-70 max-w-[80vw] overflow-y-auto border-r shadow-xl lg:hidden">
                  {/* Mobile Menu Header */}
                  <div className="border-border flex items-center justify-between border-b p-4">
                    {brand && (
                      <div className="text-foreground text-lg font-semibold">
                        {brand}
                      </div>
                    )}
                    {/* Mobile Close Button */}
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-muted-foreground hover:text-foreground ml-auto transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div className="p-2">
                    {items.map((item) => (
                      <MobileNavItem
                        key={item.label}
                        item={item}
                        onClose={() => setIsMobileMenuOpen(false)}
                      />
                    ))}
                  </div>

                  {/* Mobile Menu Actions */}
                  {(mobileActions || actions) && (
                    <div className="border-border mt-auto border-t p-4">
                      <div className="flex flex-col gap-2">
                        {mobileActions || actions}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
