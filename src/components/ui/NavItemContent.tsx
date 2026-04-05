import { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import type NavItem from "../../interfaces/NavItem";

interface NavItemContentProps {
  item: NavItem;
  isMobile?: boolean;
  onClose?: () => void;
}

export default function NavItemContent({
  item,
  isMobile,
  onClose,
}: NavItemContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const desktopBaseClasses = `px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1
    ${item.active ? "bg-muted" : "hover:text-foreground hover:bg-muted"}`;
  const mobileBaseClasses = `w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between
    ${
      item.active
        ? "bg-muted text-muted-foreground"
        : "hover:text-foreground hover:bg-muted"
    }`;
  const baseClasses = isMobile ? mobileBaseClasses : desktopBaseClasses;

  const content = (
    <>
      {item.label}
      {item.children && item.children.length > 0 && (
        <ChevronDown
          className={`${isMobile ? `h-4 w-4` : `h-3 w-3`} transition-transform duration-200 ${isExpanded && "rotate-180"}`}
        />
      )}
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (!item.href) {
      e.preventDefault();
    }
    if (isMobile && item.href) {
      onClose?.();
    }
    if (item.children && item.children.length > 0) {
      setIsExpanded(!isExpanded);
    } else if (item.onClick) {
      item.onClick();
      if (isMobile) onClose?.();
    }
  };

  const handleChildClick = (child: NavItem, e: React.MouseEvent) => {
    if (!child.href) {
      e.preventDefault();
    }
    if (child.onClick) {
      child.onClick();
    }
    isMobile ? onClose?.() : setIsExpanded(false);
  };

  const handleMouseEnter = useCallback(() => {
    if (item.children && item.children.length > 0) {
      setIsExpanded(true);
    }
  }, [item]);

  const handleMouseLeave = useCallback(() => {
    if (item.children && item.children.length > 0) {
      setIsExpanded(false);
    }
  }, [item]);

  return (
    <div
      className={!isMobile ? "relative" : undefined}
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
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

      {item.children && item.children.length > 0 && isExpanded && (
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
                    key={child.id}
                    href={child.href}
                    onClick={(e) => handleChildClick(child, e)}
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
                    key={child.id}
                    onClick={(e) => handleChildClick(child, e)}
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
