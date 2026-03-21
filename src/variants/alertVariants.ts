export const alertVariants = {
  info: "bg-[#dbeafe] border-[#3b82f6] text-[#1e3a8a]",
  success: "bg-[#dcfce7] border-[#16a34a] text-[#14532d]",
  warning: "bg-[#fed7aa] border-[#ea580c] text-[#7c2d12]",
  error: "bg-[#fee2e2] border-[#dc2626] text-[#7f1d1d]",
} as const;

export type AlertVariant = keyof typeof alertVariants;
