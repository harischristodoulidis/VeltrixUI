import { badgeVariants, type BadgeVariant } from "../../variants/badgeVariants";

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: "sm" | "md";
  children: React.ReactNode;
}

export default function Badge({
  variant = "default",
  size = "md",
  children,
}: BadgeProps) {
  const sizeClasses =
    size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm";

  return (
    <span
      className={`inline-flex items-center rounded-md font-medium ${badgeVariants[variant]} ${sizeClasses}`}
    >
      {children}
    </span>
  );
}
