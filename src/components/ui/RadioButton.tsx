export interface RadioButtonProps {
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  name: string;
  disabled?: boolean;
}

export default function RadioButton({
  label,
  value,
  checked,
  onChange,
  name,
  disabled = false,
}: RadioButtonProps) {
  return (
    <label
      className={`flex items-center gap-2 ${!disabled && "cursor-pointer"} ${disabled ? "opacity-50" : ""}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        disabled={disabled}
        className="sr-only"
      />
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${checked ? "border-primary" : "border-input"} ${!disabled && "hover:border-primary"} ${disabled ? "cursor-not-allowed" : ""}`}
      >
        {checked && <div className="bg-primary h-2.5 w-2.5 rounded-full"></div>}
      </div>
      <span className="text-foreground text-sm select-none">{label}</span>
    </label>
  );
}
