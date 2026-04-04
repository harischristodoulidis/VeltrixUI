import { useEffect } from "react";

import {
  modalSizeVariants,
  type ModalSizeVariant,
} from "../../variants/sizeVariant";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: ModalSizeVariant;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  footer,
  size = "md",
  children,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative w-full ${modalSizeVariants[size]} bg-background overflow-hidden rounded-lg shadow-xl`}
      >
        {title && (
          <div className="border-border flex items-center justify-between border-b p-4 sm:p-6">
            <h2 className="text-foreground text-lg font-semibold sm:text-xl">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground shrink-0 transition-colors"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        )}

        <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4 sm:p-6">
          {children}
        </div>

        {footer && (
          <div className="border-border flex items-center justify-end gap-2 border-t p-4 sm:p-6">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
