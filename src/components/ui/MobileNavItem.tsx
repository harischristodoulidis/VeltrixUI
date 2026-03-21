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

  const handleClick = () => {
    if (item.children && item.children?.length > 0) {
      setIsExpanded(!isExpanded);
    } else {
      if (item.onClick) {
        item.onClick();
      }
      onClose();
    }
  };

  return (
    <div>
      {item.href && !item.children ? (
        <a
          href={item.href}
          className={baseClasses}
          onClick={(e) => {
            e.preventDefault();
            if (item.onClick) {
              item.onClick();
            }
            onClose();
          }}
        >
          <span>{item.label}</span>
        </a>
      ) : (
        <button className={baseClasses} onClick={handleClick}>
          <span>{item.label}</span>
          {item.children && item.children.length > 0 && (
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${isExpanded && "rotate-180"}`}
            />
          )}
        </button>
      )}

      {item.children && item.children.length > 0 && isExpanded && (
        <div className="mt-1 ml-4 space-y-1">
          {item.children.map((child) => {
            if (child.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (child.onClick) {
                      e.preventDefault();
                      child.onClick();
                    }
                    onClose();
                  }}
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
                  key={item.label}
                  onClick={(e) => {
                    e.preventDefault();
                    if (child.onClick) {
                      e.preventDefault();
                      child.onClick();
                    }
                    onClose();
                  }}
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
