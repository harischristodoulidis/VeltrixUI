import {
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
  X,
  type LucideProps,
} from "lucide-react";
import { alertVariants, type AlertVariant } from "../../variants/alertVariants";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const icons: Record<
  AlertVariant,
  React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >
> = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
};

const iconColors: Record<AlertVariant, string> = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

export default function Alert({
  variant = "info",
  title,
  children,
  onClose,
}: AlertProps) {
  const Icon = icons[variant];

  return (
    <div
      className={`rounded-lg border-l-4 p-3 sm:p-4 ${alertVariants[variant]}`}
    >
      <div className="flex gap-2 sm:gap-3"></div>
      <Icon
        className={`h-4 w-4 shrink-0 sm:h-5 sm:w-5 ${iconColors[variant]}`}
      />
      <div className="min-w-0 flex-1">
        {title && (
          <h4 className="mb-1 text-sm font-medium sm:text-base">{title}</h4>
        )}
        <div className="text-xs sm:text-sm">{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="shrink-0 text-current opacity-70 transition-opacity hover:opacity-100"
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      )}
    </div>
  );
}
