/** Large animated icons used on the Focus-area cards. */

export const AtomIcon = () => (
  <svg viewBox="0 0 100 100" width="80" height="80" aria-hidden="true">
    <g className="spin" fill="none" stroke="#0B0B0B" strokeWidth="4">
      <ellipse cx="50" cy="50" rx="44" ry="16" />
      <ellipse cx="50" cy="50" rx="44" ry="16" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="44" ry="16" transform="rotate(120 50 50)" />
    </g>
    <circle cx="50" cy="50" r="8" fill="#D9772B" />
  </svg>
);

export const LayersIcon = () => (
  <svg viewBox="0 0 100 100" width="80" height="80" aria-hidden="true">
    <path
      className="layer l3"
      d="M50 62 L90 74 L50 88 L10 74 Z"
      fill="#E5383B"
    />
    <path
      className="layer l2"
      d="M50 40 L90 52 L50 66 L10 52 Z"
      fill="#D9772B"
    />
    <path
      className="layer l1"
      d="M50 16 L90 30 L50 44 L10 30 Z"
      fill="#0B0B0B"
    />
  </svg>
);

const TEETH = [
  { x: 45, y: 18 },
  { x: 45, y: 72 },
  { x: 18, y: 45 },
  { x: 72, y: 45 },
];

export const GearCycleIcon = () => (
  <svg viewBox="0 0 100 100" width="80" height="80" aria-hidden="true">
    <g
      className="spinr"
      fill="none"
      stroke="#0B0B0B"
      strokeWidth="3.5"
      strokeLinecap="round"
    >
      <path d="M50 6 A44 44 0 0 1 94 50" />
      <path d="M88 42 L94 50 L99 41" />
      <path d="M50 94 A44 44 0 0 1 6 50" />
      <path d="M12 58 L6 50 L1 59" />
    </g>
    <g className="spin">
      <circle cx="50" cy="50" r="24" fill="#0B0B0B" />
      <g fill="#0B0B0B">
        {TEETH.map((t) => (
          <rect
            key={`a${t.x}${t.y}`}
            x={t.x}
            y={t.y}
            width="10"
            height="10"
            rx="2"
          />
        ))}
        {TEETH.map((t) => (
          <rect
            key={`b${t.x}${t.y}`}
            x={t.x}
            y={t.y}
            width="10"
            height="10"
            rx="2"
            transform="rotate(45 50 50)"
          />
        ))}
      </g>
    </g>
    <path
      d="M44 44 L38 50 L44 56 M56 44 L62 50 L56 56 M52 42 L48 58"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Little agent/robot head: bobs, blinks, antenna light pulses. */
export const AgentIcon = () => (
  <svg
    viewBox="0 0 100 100"
    width="80"
    height="80"
    aria-hidden="true"
    overflow="visible"
  >
    {/*
      The bob animation lifts the head 12 units, which pushed the antenna
      (top at y=5) out of the viewBox and clipped it. Shift the head down 8
      units so the full bob stays inside. The translate is on a wrapper <g>
      because .bob's CSS transform would override a transform on itself.
    */}
    <g transform="translate(0 8)">
      <g className="bob">
        <line
          x1="50"
          y1="14"
          x2="50"
          y2="26"
          stroke="#0B0B0B"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle className="pix" cx="50" cy="10" r="5" fill="#E5383B" />
        <rect x="10" y="44" width="8" height="18" rx="3" fill="#0B0B0B" />
        <rect x="82" y="44" width="8" height="18" rx="3" fill="#0B0B0B" />
        <rect
          x="18"
          y="26"
          width="64"
          height="54"
          rx="14"
          fill="none"
          stroke="#0B0B0B"
          strokeWidth="4"
        />
        <g className="blink">
          <rect x="33" y="44" width="9" height="13" rx="3" fill="#0B0B0B" />
          <rect x="58" y="44" width="9" height="13" rx="3" fill="#0B0B0B" />
        </g>
        <path
          d="M40 67 H60"
          stroke="#0B0B0B"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </g>
    <path
      className="tw"
      d="M86 76 C87 82 88 83 94 84 C88 85 87 86 86 92 C85 86 84 85 78 84 C84 83 85 82 86 76Z"
      fill="#D9772B"
    />
    <rect
      className="tw"
      style={{ animationDelay: ".8s" }}
      x="8"
      y="80"
      width="6"
      height="6"
      fill="#0B0B0B"
    />
  </svg>
);

const ctlStroke = {
  fill: "none",
  stroke: "#0B0B0B",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const ArrowCircle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="13" {...ctlStroke} />
    <path d="M10 16h11M17 11.5l4.5 4.5-4.5 4.5" {...ctlStroke} />
  </svg>
);

export const CloseCircle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="13" {...ctlStroke} />
    <path d="M11.5 11.5l9 9M20.5 11.5l-9 9" {...ctlStroke} />
  </svg>
);
