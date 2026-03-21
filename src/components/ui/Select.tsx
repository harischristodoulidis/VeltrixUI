import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface SelectionOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectionOption[];
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (value: string) => void;
}

export default function Select({
  options,
  defaultValue,
  value,
  placeholder = "Select an option",
  label,
  disabled = false,
  error,
  onChange,
}: SelectProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;
  const selectedOption = options.find((opt) => opt.value === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !dropdownRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    if (!isControlled) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="text-foreground mb-2 block text-xs sm:text-sm">
          {label}
        </label>
      )}
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`bg-background border-border focus:ring-ring flex w-full items-center justify-between rounded-lg border px-3 py-2 text-left text-xs transition-all duration-200 focus:border-transparent focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm ${!selectedValue && error && "border-destructive focus:ring-destructive"} ${isOpen && "ring-ring ring-2"}`}
        >
          <span
            className={`truncate ${selectedOption ? "text-foreground" : "text-muted-foreground"}`}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={`text-muted-foreground ml-2 h-3 w-3 shrink-0 transition-transform duration-200 sm:h-4 sm:w-4 ${isOpen && "rotate-180"}`}
          />
        </button>

        {isOpen && (
          <div className="bg-background border-border absolute z-50 mt-2 w-full overflow-hidden rounded-lg border shadow-lg">
            <div className="max-h-60 overflow-y-auto py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  disabled={option.disabled}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs transition-colors duration-150 sm:text-sm ${option.value === selectedValue && "bg-muted text-accent-foreground"} ${!option.disabled && "hover:bg-muted hover:text-muted-foreground cursor-pointer"} ${option.disabled && "cursor-not-allowed opacity-50"}`}
                >
                  <span className="truncate">{option.label}</span>
                  {option.value === selectedValue && (
                    <Check className="text-primary ml-2 h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {!selectedValue && error && (
        <p className="text-destructive mt-1 text-xs sm:text-sm">{error}</p>
      )}
    </div>
  );
}
