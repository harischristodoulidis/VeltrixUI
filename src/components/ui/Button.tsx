export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
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
  const baseStyles = `${loading && `cursor-progress`}
  cursor-pointer px-4 py-2 rounded-lg
  text-sm sm:text-base
  disabled:opacity-50 disabled:cursor-not-allowed`;

  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    secondary:
      "bg-secondary text-secondary-foreground font-semibold hover:bg-secondary-hover",
    outline:
      "border-2 border-border bg-transparent text-foreground font-semibold hover:bg-muted ",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
