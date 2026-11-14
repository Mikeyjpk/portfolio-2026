const steps = [
  {
    title: "Spec",
    text: "Turn a fuzzy problem into a clear spec everyone can build against.",
  },
  {
    title: "Ship",
    text: "Build it end to end, across front-end, back-end and AI, and get it into customers’ hands.",
  },
  {
    title: "Scale",
    text: "Keep improving it after release as usage grows and needs change.",
  },
];

const Arrow = () => (
  <svg
    width="28"
    height="16"
    viewBox="0 0 28 16"
    aria-hidden="true"
    className="hidden shrink-0 self-center md:block"
  >
    <path
      d="M0 8 H24 M18 2 L25 8 L18 14"
      fill="none"
      stroke="#D9772B"
      strokeWidth="2.5"
      strokeLinecap="square"
    />
  </svg>
);

const HowIWorkSection = () => (
  <section className="bg-ink px-[clamp(20px,5vw,80px)] py-20 text-white">
    <div className="mx-auto max-w-[1240px]">
      {/* Not using .eyebrow: its muted colour is too dark on the ink band. */}
      <h2 className="mb-10 text-[11px] tracking-[6px] text-[#a8a49c] uppercase">
        How I work
      </h2>
      <ol className="flex flex-col gap-10 md:flex-row md:gap-8">
        {steps.map((step, i) => (
          <li key={step.title} className="contents">
            {i > 0 && <Arrow />}
            <div className="flex-1">
              <div className="flex items-baseline gap-3">
                <span className="font-pixel text-sm text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-pixel text-[clamp(32px,3.4vw,44px)] leading-none font-bold">
                  {step.title}
                </h3>
              </div>
              {/* Mobile: indented to line up under the title text, past the step number. */}
              <p className="mt-4 max-w-[340px] pl-8 text-[15px] leading-relaxed text-[#cfcbc2] md:pl-0">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowIWorkSection;
