import { useEffect, useRef, type CSSProperties, type RefObject } from "react";
import { SPELL_CHARGE_MS, SPELL_CYCLE_MS, type Spell } from "./spells";

const outline = {
  stroke: "#0B0B0B",
  strokeWidth: 5,
  strokeLinejoin: "round",
  strokeLinecap: "round",
} as const;

const STAR =
  "M10 0 C11 8 12 9 20 10 C12 11 11 12 10 20 C9 12 8 11 0 10 C8 9 9 8 10 0Z";

type Burst = {
  dx: number;
  dy: number;
  delay: number;
  color: string;
  star?: boolean;
};

const BURSTS: Burst[] = [
  { dx: -18, dy: -22, delay: 0, color: "var(--spell)" },
  { dx: -26, dy: 4, delay: 0.04, color: "#0B0B0B" },
  { dx: -14, dy: 24, delay: 0.02, color: "var(--spell)" },
  { dx: -8, dy: -34, delay: 0.06, color: "#0B0B0B", star: true },
  { dx: -30, dy: -10, delay: 0.03, color: "var(--spell)", star: true },
  { dx: -20, dy: 30, delay: 0.07, color: "var(--spell)" },
];

const burstStyle = (b: Burst) =>
  ({
    "--dx": `${b.dx}px`,
    "--dy": `${b.dy}px`,
    animationDelay: `${b.delay}s`,
  }) as CSSProperties;

/** Projectile head for each spell; the trail behind it is shared. */
const SpellHead = ({ kind }: { kind: Spell["kind"] }) => {
  switch (kind) {
    case "frost":
      return (
        <span className="absolute top-[-6px] right-0.5 size-3 rotate-45 border-2 border-white/80 bg-(--spell)" />
      );
    case "arcane":
      return (
        <svg
          className="absolute top-[-9px] right-[-2px]"
          viewBox="0 0 20 20"
          width="18"
          height="18"
        >
          <path className="spin" d={STAR} fill="var(--spell)" />
        </svg>
      );
    case "nature":
      return (
        <svg
          className="absolute top-[-6px] right-0"
          viewBox="0 0 18 12"
          width="18"
          height="12"
        >
          <path
            d="M0 6 C4 -1 13 -1 18 6 C13 13 4 13 0 6Z"
            fill="var(--spell)"
          />
          <path
            d="M3 6 L14 6"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            opacity="0.7"
          />
        </svg>
      );
    default:
      return (
        <span className="absolute top-[-6px] right-0 size-3 rounded-full bg-[radial-gradient(circle_at_65%_50%,#FFE2C7,var(--spell)_70%)]" />
      );
  }
};

interface WizardProps {
  spell: Spell;
  /** Fires once per loop (from the second loop on) as the orb starts charging. */
  onCharge?: () => void;
}

/**
 * Calls `onCharge` as the staff starts charging in each loop after the first.
 * It reads the CSS `bolt` animation's own clock (Web Animations API) rather
 * than running a separate timer, so the spell swap can't drift out of sync
 * with the projectile. With reduced motion there's no animation, so the
 * wizard keeps his first spell.
 */
const useChargeTick = (
  boltRef: RefObject<HTMLElement | null>,
  onCharge?: () => void,
) => {
  const onChargeRef = useRef(onCharge);
  useEffect(() => {
    onChargeRef.current = onCharge;
  }, [onCharge]);

  useEffect(() => {
    let lastLoop = 0;
    const id = window.setInterval(() => {
      const anim = boltRef.current
        ?.getAnimations()
        .find((a) => (a as CSSAnimation).animationName === "bolt");
      const t = Number(anim?.currentTime ?? NaN);
      if (!Number.isFinite(t)) return;
      const loop = Math.floor(t / SPELL_CYCLE_MS);
      if (loop > lastLoop && t % SPELL_CYCLE_MS >= SPELL_CHARGE_MS) {
        lastLoop = loop;
        onChargeRef.current?.();
      }
    }, 100);
    return () => window.clearInterval(id);
  }, [boltRef]);
};

/** A little wizard casting spells — each one flies out to the right. */
const Wizard = ({ spell, onCharge }: WizardProps) => {
  const boltRef = useRef<HTMLSpanElement>(null);
  useChargeTick(boltRef, onCharge);

  return (
    <div className="relative flex h-[200px] w-full justify-center">
      <svg
        viewBox="0 0 190 205"
        width="180"
        height="194"
        role="img"
        aria-label="A little wizard casting a spell"
        className="block overflow-visible"
      >
        <g>
          <path
            d="M42 116 C38 144 34 170 32 188 L124 188 C122 170 118 144 114 116 C104 108 52 108 42 116 Z"
            fill="#E6E2DA"
            {...outline}
          />
          <path d="M60 160 L96 160" fill="none" {...outline} />
          <path d="M58 188 L58 196 M98 188 L98 196" fill="none" {...outline} />
          <path
            d="M52 66 C44 86 44 108 50 124 L64 118 L62 74 Z"
            fill="#FFFFFF"
            {...outline}
          />
          <path
            d="M104 66 C112 86 112 108 106 124 L92 118 L94 74 Z"
            fill="#FFFFFF"
            {...outline}
          />
          <rect
            x="56"
            y="62"
            width="44"
            height="42"
            rx="15"
            fill="#F8DCC8"
            {...outline}
          />
          <g className="blink">
            <rect x="66" y="76" width="5" height="8" rx="2.5" fill="#0B0B0B" />
            <rect x="85" y="76" width="5" height="8" rx="2.5" fill="#0B0B0B" />
          </g>
          {/* Beard + moustache wobble every so often, like he's muttering. */}
          <g className="mutter-beard">
            <path
              d="M54 92 C46 100 47 112 54 117 C50 126 57 135 65 134 C67 143 77 147 78 141 C80 147 90 143 92 134 C100 135 106 126 102 117 C109 112 110 100 102 92 C96 99 88 100 78 98 C68 100 60 99 54 92 Z"
              fill="#FFFFFF"
              {...outline}
            />
            <path d="M78 112 C76 118 80 122 84 120" fill="none" {...outline} />
          </g>
          <path
            className="mutter-stache"
            d="M64 98 C66 91 74 90 78 96 C82 90 90 91 92 98 C87 102 81 101 78 99 C75 101 69 102 64 98 Z"
            fill="#FFFFFF"
            {...outline}
          />
          <path
            d="M50 64 C52 42 60 22 76 12 C88 6 98 12 110 4 C104 14 97 18 96 26 C100 38 104 50 106 64 Z"
            fill="#D9D6CF"
            {...outline}
          />
          <path
            d="M51 52 C68 49 88 49 105 52 L106 64 C88 61 68 61 50 64 Z"
            className="spell-fill"
            {...outline}
          />
          <rect
            x="72"
            y="49"
            width="13"
            height="13"
            rx="2"
            fill="#FFFFFF"
            {...outline}
          />
          <path
            d="M26 62 C46 72 110 72 130 62 C132 66 130 70 126 72 C104 80 52 80 30 72 C26 70 24 66 26 62 Z"
            fill="#D9D6CF"
            {...outline}
          />
        </g>
        <g>
          <line
            x1="132"
            y1="44"
            x2="132"
            y2="190"
            fill="none"
            stroke="#0B0B0B"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Staff orb: holds the current spell colour, flashes as it charges. */}
          <circle
            className="orb"
            cx="132"
            cy="34"
            r="10"
            stroke="#0B0B0B"
            strokeWidth="5"
          />
          <circle
            className="orb-flash"
            cx="132"
            cy="34"
            r="7.5"
            fill="#FFFFFF"
          />
        </g>
        <g>
          <path
            d="M112 122 C118 128 124 126 130 120"
            fill="none"
            stroke="#0B0B0B"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="131"
            cy="120"
            r="5"
            fill="#F8DCC8"
            stroke="#0B0B0B"
            strokeWidth="4"
          />
        </g>
        <rect
          className="tw"
          x="16"
          y="40"
          width="7"
          height="7"
          fill="#0B0B0B"
        />
        <path
          className="tw spell-fill"
          style={{ animationDelay: "1.2s" }}
          d="M20 110 C22 116 23 117 29 119 C23 121 22 122 20 128 C18 122 17 121 11 119 C17 117 18 116 20 110Z"
        />
      </svg>

      {/* Spell bolt + impact */}
      <div
        aria-hidden="true"
        className="spell absolute top-8 left-[calc(50%+40px)] h-0"
      >
        {/* Kept mounted across spells so the loop never restarts. */}
        <span className="bolt absolute top-0 left-0 h-0 w-[34px]" ref={boltRef}>
          <span className="absolute top-[-2px] right-2 h-1 w-[28px] rounded-full bg-[linear-gradient(90deg,transparent,var(--spell))]" />
          <SpellHead kind={spell.kind} />
        </span>
        <span className="impact absolute top-[-8px] right-[-6px] size-4 rounded-full bg-[color-mix(in_srgb,var(--spell)_40%,white)]" />
        {BURSTS.map((b, i) =>
          b.star ? (
            <svg
              key={i}
              className="burst absolute top-[-7px] right-[-2px]"
              viewBox="0 0 20 20"
              width="14"
              height="14"
              style={burstStyle(b)}
            >
              <path d={STAR} fill={b.color} />
            </svg>
          ) : (
            <span
              key={i}
              className="burst absolute top-[-3px] right-0 size-[7px]"
              style={{ ...burstStyle(b), background: b.color }}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Wizard;
