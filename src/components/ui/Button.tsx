import {
  buttonVariants,
  type ButtonVariant,
} from "../../variants/buttonVariants";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  loading = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = `${loading && `cursor-progress`} cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed`;

  return (
    <button
      className={`${baseStyles} ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
