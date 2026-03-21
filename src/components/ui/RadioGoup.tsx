import { useState } from "react";
import RadioButton from "./RadioButton";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name: string;
  label?: string;
  disabled?: boolean;
}

export default function RadioGroup({
  options,
  value,
  defaultValue,
  onChange,
  name,
  label,
  disabled = false,
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;

  const handleChange = (next: string) => {
    if (!isControlled) {
      setInternalValue(next);
    }
    onChange?.(next);
  };

  return (
    <div className="flex flex-col gap-3">
      {label && <h4 className="text-foreground text-sm">{label}</h4>}
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={handleChange}
          name={name}
          disabled={disabled || option.disabled}
        />
      ))}
    </div>
  );
}
