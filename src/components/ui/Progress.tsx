import {
  progressVariants,
  type progressVariant,
} from "../../variants/progressVariants";
import { sizeVariants, type SizeVariant } from "../../variants/sizeVariant";

export interface ProgressProps {
  value: number;
  max?: number;
  size?: SizeVariant;
  showLabel?: boolean;
  variant?: progressVariant;
}

export function Progress({
  value,
  max = 100,
  size = "md",
  showLabel = false,
  variant = "default",
}: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="w-full">
      <div
        className={`bg-muted w-full overflow-hidden rounded-full ${sizeVariants[size]}`}
      >
        <div
          className={`h-full transition-all duration-300 ease-out ${progressVariants[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-muted-foreground mt-1 text-right text-xs">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
}
