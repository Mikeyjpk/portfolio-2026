import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedAccordionContextType {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
  type?: "single" | "multiple";
}

const AnimatedAccordionContext =
  React.createContext<AnimatedAccordionContextType | null>(null);

interface AnimatedAccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
  children: React.ReactNode;
}

function AnimatedAccordion({
  type = "single",
  defaultValue,
  className,
  children,
}: AnimatedAccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (defaultValue) {
      return new Set(
        Array.isArray(defaultValue) ? defaultValue : [defaultValue]
      );
    }
    return new Set();
  });

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(value)) {
          newSet.delete(value);
        } else {
          if (type === "single") {
            newSet.clear();
          }
          newSet.add(value);
        }
        return newSet;
      });
    },
    [type]
  );

  return (
    <AnimatedAccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AnimatedAccordionContext.Provider>
  );
}

interface AnimatedAccordionItemProps {
  value: string;
  accentColor?: string;
  className?: string;
  children: React.ReactNode;
}

function AnimatedAccordionItem({
  value,
  accentColor = "border-l-gray-500",
  className,
  children,
}: AnimatedAccordionItemProps) {
  return (
    <div className={cn("mb-4", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{
                value?: string;
                accentColor?: string;
              }>,
              { value, accentColor }
            )
          : child
      )}
    </div>
  );
}

interface AnimatedAccordionTriggerProps {
  value?: string;
  accentColor?: string;
  className?: string;
  children: React.ReactNode;
}

function AnimatedAccordionTrigger({
  value,
  accentColor = "border-l-gray-500",
  className,
  children,
}: AnimatedAccordionTriggerProps) {
  const context = React.useContext(AnimatedAccordionContext);
  if (!context || !value) return null;

  const { openItems, toggleItem } = context;
  const isOpen = openItems.has(value);

  return (
    <button
      onClick={() => toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 pl-4 text-left text-base font-medium transition-all border-l-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        accentColor,
        className
      )}
    >
      {children}
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
      </motion.div>
    </button>
  );
}

interface AnimatedAccordionContentProps {
  value?: string;
  accentColor?: string;
  className?: string;
  children: React.ReactNode;
}

function AnimatedAccordionContent({
  value,
  accentColor = "border-l-gray-500",
  className,
  children,
}: AnimatedAccordionContentProps) {
  const context = React.useContext(AnimatedAccordionContext);
  if (!context || !value) return null;

  const { openItems } = context;
  const isOpen = openItems.has(value);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div
            className={cn(
              "pb-4 pt-2 pl-4 border-l-4 space-y-3",
              accentColor,
              className
            )}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export {
  AnimatedAccordion,
  AnimatedAccordionItem,
  AnimatedAccordionTrigger,
  AnimatedAccordionContent,
};
