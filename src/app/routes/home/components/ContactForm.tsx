import { useState } from "react";
import Toast from "../../../../components/ui/toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    isVisible: boolean;
    message: string;
    type: "success" | "error";
  }>({
    isVisible: false,
    message: "",
    type: "success",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdkqpydj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setToast({
          isVisible: true,
          message: "Message sent successfully!",
          type: "success",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setToast({
        isVisible: true,
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
      <form onSubmit={handleSubmit} className="max-w-xs space-y-6 text-sm">
        {/* Name */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="h-7 w-[3px] bg-neutral-900" />
            <input
              type="text"
              name="name"
              required
              className="flex-1 border-none border-b border-transparent focus:border-black focus:outline-none text-sm"
              placeholder="Name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="h-7 w-[2px] bg-[#d66234]" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="flex-1 border-none border-b border-transparent focus:border-black focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1">
          <div className="flex items-start gap-3">
            <span className="h-20 w-[2px] bg-[#ffd2c3]" />
            <textarea
              name="message"
              required
              placeholder="Enter message here..."
              className="flex-1 resize-none border-none border-b border-transparent focus:border-black focus:outline-none text-sm"
              rows={4}
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 inline-flex items-center gap-2 bg-black px-6 py-2 text-[11px] uppercase tracking-[0.25em] text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send"} <span>▸</span>
        </button>
      </form>
    </>
  );
};

export default ContactForm;
