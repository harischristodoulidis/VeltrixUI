export const badgeVariants = {
  default: "bg-muted text-foreground",
  primary: "bg-primary text-primary-foreground",
  success: "bg-[#16a34a] text-white",
  warning: "bg-[#ea580c] text-white",
  error: "bg-error text-primary-foreground",
} as const;

export type BadgeVariant = keyof typeof badgeVariants;
