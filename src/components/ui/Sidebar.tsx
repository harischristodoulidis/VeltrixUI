import type SidebarItem from "../../interfaces/SIdebarItem";

export interface SidebarProps {
  items: SidebarItem[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Sidebar({ items, header, footer }: SidebarProps) {
  return (
    <aside className="bg-card border-border flex h-full w-full flex-col border-r sm:w-64">
      {header && (
        <div className="border-border border-b p-3 sm:p-4">{header}</div>
      )}
      <nav className="flex-1 overflow-y-auto p-2">
        {items.map((item) => {
          const Icon = item.icon;
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              onClick={item.onClick}
              className={`mb-1 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:text-sm ${
                item.active
                  ? "bg-muted"
                  : "hover:text-foreground hover:bg-muted"
              }`}
            >
              {Icon && <Icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />}
              <span className="flex-1 truncate text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-primary text-primary-foreground shrink-0 rounded-full px-1.5 py-0.5 text-xs sm:px-2">
                  {item.badge}
                </span>
              )}
            </a>
          ) : (
            <button
              key={item.label}
              onClick={item.onClick}
              className={`mb-1 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:text-sm ${
                item.active
                  ? "bg-muted"
                  : "hover:text-foreground hover:bg-muted"
              }`}
            >
              {Icon && <Icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />}
              <span className="flex-1 truncate text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-primary text-primary-foreground shrink-0 rounded-full px-1.5 py-0.5 text-xs sm:px-2">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      {footer && (
        <div className="border-border border-t p-3 sm:p-4">{footer}</div>
      )}
    </aside>
  );
}
