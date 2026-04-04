import React from "react";
import { useState, useRef, useEffect } from "react";
import type DropdownItem from "../../interfaces/DropdownItem";

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
}

export default function Dropdown({
  trigger,
  items,
  align = "left",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item: DropdownItem) => {
    if (!item.disabled && item.onClick) {
      item.onClick();
      setIsOpen(false);
    }
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div
          className={`bg-background border-border absolute z-50 mt-2 min-w-50 overflow-hidden rounded-lg border shadow-xl ${align === "right" ? "right-0" : "left-0"}`}
        >
          <div className="py-1">
            {items.map((item) => (
              <React.Fragment key={item.label}>
                {item.divider ? (
                  <div className="border-border my-1 border-t"></div>
                ) : (
                  <button
                    onClick={() => handleItemClick(item)}
                    disabled={item.disabled}
                    className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${item.disabled ? "cursor-not-allowed opacity-50" : "hover:bg-muted hover:text-muted-foreground text-foreground"}`}
                  >
                    {item.icon && <span className="shrink-0">{item.icon}</span>}
                    <span>{item.label}</span>
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
