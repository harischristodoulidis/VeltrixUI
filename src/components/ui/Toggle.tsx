import { useState } from "react";

export interface TogleProps {
  id?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

export default function Toggle({
  id,
  defaultChecked = false,
  checked,
  disabled = false,
  label,
  onChange,
}: TogleProps) {
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    const next = !isChecked;
    if (checked === undefined) {
      setInternalChecked(next);
    }
    if (!disabled && onChange) {
      onChange(next);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        id={id}
        onClick={handleToggle}
        disabled={disabled}
        className={`relative h-6 w-11 cursor-pointer rounded-full transition-all duration-200 ${isChecked ? "bg-primary" : "bg-muted"} ${disabled && "cursor-not-allowed opacity-50"} focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none`}
      >
        <span
          className={`bg-primary-foreground absolute top-0.5 left-0.5 h-5 w-5 rounded-full shadow-sm transition-transform duration-200 ${isChecked ? "translate-x-5" : "translate-x-0"}`}
        />
      </button>
      {label && (
        <p
          onClick={handleToggle}
          className={`text-foreground cursor-pointer text-sm select-none ${disabled && "opacity-50"}`}
        >
          {label}
        </p>
      )}
    </div>
  );
}
