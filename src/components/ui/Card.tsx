import clsx from "clsx";

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={clsx("border-border rounded-lg border p-6 shadow-md", className)}
    >
      {children}
    </div>
  );
}
