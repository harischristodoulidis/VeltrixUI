import { useState } from "react";
import { Check } from "lucide-react";

export interface CheckboxProps {
  id?: string;
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({
  id,
  label,
  defaultChecked = false,
  checked,
  disabled = false,
  onChange,
  ...props
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  function toggleCheckbox() {
    const next = !isChecked;
    if (checked === undefined) {
      setInternalChecked(next);
    }
    if (!disabled && onChange) {
      onChange(next);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        role="checkbox"
        aria-checked={isChecked}
        onClick={toggleCheckbox}
        disabled={disabled}
        className={`flex h-5 w-5 items-center justify-center rounded border-2 ${isChecked ? "bg-primary border-primary" : "bg-background border-border"} ${!disabled && "hover:border-primary cursor-pointer"} ${disabled ? "cursor-not-allowed opacity-50" : ""} focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none`}
        {...props}
      >
        {isChecked && (
          <Check className="text-primary-foreground h-3 w-3" strokeWidth={3} />
        )}
      </button>
      {label && (
        <p
          className={`text-foreground text-sm select-none ${!disabled && "cursor-pointer"} ${disabled ? "opacity-50" : ""}`}
          onClick={toggleCheckbox}
        >
          {label}
        </p>
      )}
    </div>
  );
}
