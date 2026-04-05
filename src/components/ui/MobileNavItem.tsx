import { useState } from "react";
import type NavItem from "../../interfaces/NavItem";
import { ChevronDown } from "lucide-react";

export default function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const baseClasses = `w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between
    ${
      item.active
        ? "bg-muted text-muted-foreground"
        : "hover:text-foreground hover:bg-muted"
    }`;

  const content = (
    <>
      {item.label}
      {item.children && item.children.length > 0 && (
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isExpanded && "rotate-180"}`}
        />
      )}
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (!item.href) {
      e.preventDefault();
    } else {
      onClose();
    }
    if (item.children && item.children?.length > 0) {
      setIsExpanded(!isExpanded);
    } else if (item.onClick) {
      item.onClick();
      onClose();
    }
  };

  const handleChildClick = (child: NavItem, e: React.MouseEvent) => {
    if (!child.href) {
      e.preventDefault();
    }
    if (child.onClick) {
      child.onClick();
    }
    onClose();
  };

  return (
    <div>
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
        <div className="mt-1 ml-4 space-y-1">
          {item.children.map((child) => {
            if (child.href) {
              return (
                <a
                  key={child.id}
                  href={child.href}
                  onClick={(e) => handleChildClick(child, e)}
                  className={`block rounded-lg px-4 py-2 text-sm transition-colors ${
                    child.active
                      ? "bg-muted text-muted-foreground"
                      : "hover:text-foreground hover:bg-muted"
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
                  className={`w-full rounded-lg px-4 py-2 text-left text-sm transition-colors ${
                    child.active
                      ? "bg-muted text-accent-foreground"
                      : "hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {child.label}
                </button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
