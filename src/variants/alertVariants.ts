export const alertVariants = {
  info: "bg-[#dbeafe] border-info text-[#1e3a8a]",
  success: "bg-[#dcfce7] border-success text-[#14532d]",
  warning: "bg-[#fed7aa] border-warning text-[#7c2d12]",
  error: "bg-[#fee2e2] border-error text-[#7f1d1d]",
} as const;

export type AlertVariant = keyof typeof alertVariants;
