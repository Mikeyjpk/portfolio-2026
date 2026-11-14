import { useState } from "react";
import Toast from "@/components/ui/toast";
import { cn } from "@/lib/utils";

const ContactForm = ({ className }: { className?: string }) => {
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
      <form
        onSubmit={handleSubmit}
        className={cn("flex flex-col gap-7", className)}
      >
        <label className="block">
          <span className="sr">Name</span>
          <input
            className="ofield w-full border-l-4 border-ink bg-transparent px-[18px] py-4 text-[17px]"
            type="text"
            name="name"
            autoComplete="name"
            required
            placeholder="Name"
          />
        </label>
        <label className="block">
          <span className="sr">Email</span>
          <input
            className="ofield w-full border-l-[3px] border-orange bg-transparent px-[18px] py-4 text-[17px]"
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="Email"
          />
        </label>
        <label className="block">
          <span className="sr">Message</span>
          <textarea
            // Resize grip only shows on hover/focus (active keeps it alive mid-drag).
            className="ofield w-full resize-none hover:resize-y focus:resize-y active:resize-y border-l-2 border-pink bg-transparent px-[18px] py-3 text-[17px]"
            name="message"
            rows={5}
            required
            placeholder="Enter message here…"
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="osend mt-3 inline-flex h-12 cursor-pointer items-center gap-3.5 self-start bg-ink px-[30px] text-xs font-semibold tracking-[4px] text-white uppercase disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending…" : "Send"}
          <svg
            className="tri"
            width="8"
            height="10"
            viewBox="0 0 8 10"
            aria-hidden="true"
          >
            <path d="M0 0 L8 5 L0 10 Z" fill="#FFFFFF" />
          </svg>
        </button>
      </form>
    </>
  );
};

export default ContactForm;
