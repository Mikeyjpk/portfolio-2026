import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast = ({
  message,
  type,
  isVisible,
  onClose,
  duration = 4000,
}: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
      <div
        className={`px-6 py-3 rounded-sm shadow-lg text-white text-sm font-medium ${
          type === "success" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        <div className="flex items-center gap-2">
          <span>{type === "success" ? "✓" : "✕"}</span>
          <span>{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-white/80 hover:text-white text-lg leading-none"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
