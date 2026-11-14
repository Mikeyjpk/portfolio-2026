const Ufo = () => (
  <svg
    viewBox="0 0 200 220"
    role="img"
    aria-label="Animated UFO"
    className="block h-auto w-full"
  >
    <g
      className="bob"
      fill="none"
      stroke="#0B0B0B"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M58 104 A42 42 0 0 1 142 104" />
      <path d="M76 74 A30 30 0 0 1 104 64" strokeWidth="5" />
      <rect x="84" y="80" width="32" height="24" rx="9" />
      <line x1="94" y1="80" x2="94" y2="72" />
      <line x1="106" y1="80" x2="106" y2="72" />
      <rect x="50" y="104" width="100" height="16" />
      <rect x="22" y="120" width="156" height="24" rx="12" />
      <line x1="40" y1="132" x2="52" y2="132" />
      <line x1="94" y1="132" x2="106" y2="132" />
      <line x1="148" y1="132" x2="160" y2="132" />
      <path d="M66 144 L134 144 L122 162 L78 162 Z" />
      <g className="flame">
        <line x1="86" y1="176" x2="86" y2="190" />
        <line x1="100" y1="176" x2="100" y2="204" />
        <line x1="114" y1="176" x2="114" y2="190" />
      </g>
    </g>
    <path
      className="tw"
      d="M30 60 C33 70 34 71 44 74 C34 77 33 78 30 88 C27 78 26 77 16 74 C26 71 27 70 30 60Z"
      fill="#D9772B"
    />
    <path
      className="tw"
      style={{ animationDelay: "1.1s" }}
      d="M172 160 C174 167 175 168 182 170 C175 172 174 173 172 180 C170 173 169 172 162 170 C169 168 170 167 172 160Z"
      fill="#E5383B"
    />
    <rect
      className="tw"
      style={{ animationDelay: ".6s" }}
      x="46"
      y="42"
      width="8"
      height="8"
      fill="#0B0B0B"
    />
    <rect
      className="tw"
      style={{ animationDelay: "1.6s" }}
      x="150"
      y="190"
      width="8"
      height="8"
      fill="#0B0B0B"
    />
  </svg>
);

export default Ufo;
