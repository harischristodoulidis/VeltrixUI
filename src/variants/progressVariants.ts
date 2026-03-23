export const progressVariants = {
  default: "bg-primary",
  success: "bg-[#16a34a]",
  warning: "bg-[#ea580c]",
  error: "bg-destructive",
};

export type progressVariant = keyof typeof progressVariants;
