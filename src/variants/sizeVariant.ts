export interface Sizes {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  [key: string]: string;
}

export const progressSizeVariants: Partial<Record<keyof Sizes, string>> = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

export const modalSizeVariants: Partial<Record<keyof Sizes, string>> = {
  sm: "max-w-sm",
  md: "max-w-md sm:max-w-lg",
  lg: "max-w-lg sm:max-w-2xl",
  xl: "max-w-xl sm:max-w-4xl",
};

export type ProgressSizeVariant = keyof typeof progressSizeVariants;

export type ModalSizeVariant = keyof typeof modalSizeVariants;
