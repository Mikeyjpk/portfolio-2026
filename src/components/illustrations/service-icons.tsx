/** Small line icons used in the About › "What I do" list. */

const line = {
  fill: "none",
  stroke: "#0B0B0B",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const BrowserIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
    <g {...line}>
      <rect x="3" y="5" width="26" height="22" rx="3" />
      <line x1="3" y1="11" x2="29" y2="11" />
      <path d="M13 15 L10 19 L13 23 M19 15 L22 19 L19 23" />
    </g>
  </svg>
);

export const ServerIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
    <g {...line}>
      <rect x="4" y="4" width="24" height="10" rx="2" />
      <rect x="4" y="18" width="24" height="10" rx="2" />
    </g>
    <circle cx="9" cy="9" r="1.6" fill="#D9772B" />
    <circle cx="9" cy="23" r="1.6" fill="#D9772B" />
  </svg>
);

export const SparkIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
    <path
      d="M16 3 C17.5 12 20 14.5 29 16 C20 17.5 17.5 20 16 29 C14.5 20 12 17.5 3 16 C12 14.5 14.5 12 16 3Z"
      fill="#D9772B"
    />
  </svg>
);

export const CursorIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
    <path d="M7 4 L25 17 L17 18.5 L13 27 Z" {...line} />
    <path d="M22 25 L27 25 M24.5 22.5 L24.5 27.5" {...line} stroke="#D9772B" />
  </svg>
);
