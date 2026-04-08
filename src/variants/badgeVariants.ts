export const badgeVariants = {
  default: "bg-muted text-foreground",
  primary: "bg-primary text-primary-foreground",
  success: "bg-success text-primary-foreground",
  warning: "bg-warning text-primary-foreground",
  error: "bg-error text-primary-foreground",
} as const;

export type BadgeVariant = keyof typeof badgeVariants;
