import type { PropsWithChildren } from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface BaseInputProps {
  id: string;
  label?: string;
  error?: string;
  helperText?: string;
  type?: string;
}

type InputProps =
  | (BaseInputProps &
      React.InputHTMLAttributes<HTMLInputElement> & {
        as?: "input";
      })
  | (BaseInputProps &
      React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
        as: "textarea";
      });

function PasswordInputDiv({ children }: PropsWithChildren) {
  return <div className="relative">{children}</div>;
}

export default function Input(props: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const baseStyles = `border border-border 
  text-foreground
  px-3 py-2 w-full 
  rounded-lg
  focus:ring-ring focus:ring-ring
  placeholder:text-muted-foreground
  focus:border-transparent focus:ring-2 focus:outline-none 
  disabled:cursor-not-allowed disabled:opacity-50 ${props.error ? "border-destructive focus:ring-destructive" : ""}`;

  let inputContent;

  if (props.as === "textarea") {
    const { as, className = "", ...textareaProps } = props;
    inputContent = (
      <textarea
        className={`${baseStyles}resize-vertical min-h-25 ${className}`}
        {...textareaProps}
      />
    );
  } else {
    const { as, className = "", ...inputProps } = props;
    inputContent = (
      <input
        className={`${baseStyles} ${className}`}
        {...inputProps}
        type={
          props.type !== "password"
            ? "text"
            : showPassword
              ? "text"
              : "password"
        }
      />
    );
  }
  return (
    <div
      className={`${props.type === "password" ? "relative w-full" : "w-full"}`}
    >
      {props.label && (
        <label
          htmlFor={props.id}
          className="text-foreground mb-2 block text-sm font-semibold"
        >
          {props.label}
        </label>
      )}
      {props.type === "password" ? (
        <PasswordInputDiv>
          {inputContent}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </PasswordInputDiv>
      ) : (
        inputContent
      )}
      {props.error && (
        <p className="text-destructive mt-1 ml-2 text-sm">{props.error}</p>
      )}
      {props.helperText && !props.error && (
        <p className="text-muted-foreground mt-1 ml-2 text-sm">
          {props.helperText}
        </p>
      )}
    </div>
  );
}
