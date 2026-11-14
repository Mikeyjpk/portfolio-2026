import { cn } from "@/lib/utils";
import { useIntro } from "./intro-context";

// 5×2 pixel logo: null = empty cell.
const PIXELS: ({ color: string; delay: number } | null)[] = [
  { color: "var(--color-orange)", delay: 0 },
  { color: "var(--color-orange)", delay: 0.1 },
  null,
  { color: "var(--color-orange)", delay: 0.2 },
  { color: "var(--color-orange)", delay: 0.3 },
  { color: "#fff", delay: 0.15 },
  { color: "#fff", delay: 0.25 },
  { color: "#fff", delay: 0.35 },
  { color: "#fff", delay: 0.45 },
  { color: "#fff", delay: 0.55 },
];

const IntroCurtain = () => {
  const { phase, pct } = useIntro();
  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 bg-ink text-white",
        phase === "exit" && "curtain"
      )}
    >
      <div className="grid grid-cols-[repeat(5,10px)] gap-1" aria-hidden="true">
        {PIXELS.map((px, i) =>
          px ? (
            <span
              key={i}
              className="pix size-2.5"
              style={{ background: px.color, animationDelay: `${px.delay}s` }}
            />
          ) : (
            <span key={i} className="size-2.5" />
          )
        )}
      </div>
      <div
        className="font-pixel text-8xl leading-none tracking-[4px]"
        aria-hidden="true"
      >
        {String(pct).padStart(3, "0")}
      </div>
      <div className="relative h-0.5 w-60 bg-[#2a2a2a]" aria-hidden="true">
        <div
          className="absolute inset-y-0 left-0 bg-orange"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-[11px] tracking-[6px] text-[#a8a49c] uppercase">
        Printing business card
      </div>
    </div>
  );
};

export default IntroCurtain;
