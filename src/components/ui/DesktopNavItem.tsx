import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type NavItem from "../../interfaces/NavItem";

export default function DesktopNavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const baseClasses = `px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1
    ${item.active ? "bg-muted" : "hover:text-foreground hover:bg-muted"}`;
  const content = (
    <>
      {item.label}
      {item.children && item.children.length > 0 && (
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${isOpen && "rotate-180"}`}
        />
      )}
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (item.children && item.children.length > 0) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (item.onClick) {
      e.preventDefault();
      item.onClick();
    } else if (item.href) {
      // Let the default link behavior happen
      return;
    }
  };

  const handleMouseEnter = () => {
    if (item.children && item.children.length > 0) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (item.children && item.children.length > 0) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.href && !item.children ? (
        <a href={item.href} className={baseClasses} onClick={handleClick}>
          {content}
        </a>
      ) : (
        <button className={baseClasses} onClick={handleClick}>
          {content}
        </button>
      )}

      {/* Desktop Dropdown Menu */}
      {item.children && item.children.length > 0 && isOpen && (
        <div
          className="absolute top-full left-0 z-100 mt-0 min-w-50 rounded-lg shadow-lg"
          style={{
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <div className="py-4">
            {item.children.map((child) => {
              if (child.href) {
                return (
                  <a
                    key={child.label}
                    href={child.href}
                    onClick={(e) => {
                      if (child.onClick) {
                        e.preventDefault();
                        child.onClick();
                      }
                      setIsOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      child.active
                        ? "bg-muted text-muted-foreground"
                        : "text-foreground hover:bg-muted hover:text-muted-foreground"
                    }`}
                  >
                    {child.label}
                  </a>
                );
              } else {
                return (
                  <button
                    key={item.label}
                    onClick={(e) => {
                      e.preventDefault();
                      if (child.onClick) child.onClick();
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      child.active
                        ? "bg-muted text-muted-foreground"
                        : "text-foreground hover:bg-muted hover:text-muted-foreground"
                    }`}
                  >
                    {child.label}
                  </button>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}
