import React from "react";
import { ChevronRight } from "lucide-react";
import type BreadcrumpItem from "../../interfaces/BreadcrumpItem";

export interface BreadcrumpProps {
  items: BreadcrumpItem[];
}

export default function Breadcrump({ items }: BreadcrumpProps) {
  return (
    <nav className="sm:tex-sm flex items-center gap-2 text-xs">
      {items.map((item, index) => {
        return (
          <React.Fragment key={item.label}>
            {index > 0 && (
              <ChevronRight className="text-muted-foreground h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
            )}
            {index === items.length - 1 ? (
              <span className="text-foreground font-medium whitespace-nowrap">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                onClick={item.onClick}
                className="text-muted-foreground hover:text-foreground cursor-pointer whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
