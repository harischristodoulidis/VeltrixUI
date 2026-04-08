export const buttonVariants = {
  primary: "bg-primary text-white hover:opacity-90",
  secondary:
    "bg-secondary text-secondary-foreground font-semibold hover:bg-secondary-hover",
  outline:
    "border-2 border-border bg-transparent text-foreground font-semibold hover:bg-muted ",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
