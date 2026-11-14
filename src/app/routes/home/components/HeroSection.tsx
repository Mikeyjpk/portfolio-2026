import Navbar from "@/app/layout/components/Navbar";
import Ufo from "@/components/illustrations/Ufo";

const HeroSection = () => (
  <section className="screen flex items-stretch justify-center px-[clamp(12px,4vw,56px)] py-[clamp(12px,3vh,32px)]">
    <div
      className="card-in relative flex h-full w-full max-w-[1240px] flex-col justify-between gap-[clamp(12px,3vh,48px)] overflow-hidden rounded-[28px] bg-white px-[clamp(20px,4vw,56px)] py-[clamp(20px,5vh,56px)] shadow-[0_1px_0_rgba(11,11,11,.06),0_40px_80px_-40px_rgba(11,11,11,.25)]"
      style={{ animationDelay: ".25s" }}
    >
      <Navbar className="rise" style={{ animationDelay: "1.1s" }} />

      {/*
        < lg: UFO stacked above the headline, both centred.
        lg+:  side by side on one row (never wraps). The headline is capped at
              132px so it always fits beside the UFO inside the 1240px card.
      */}
      <div className="flex min-h-0 flex-auto flex-col items-center justify-center gap-4 text-center lg:flex-row lg:justify-between lg:gap-10 lg:text-left">
        <h1
          aria-label="Hey, I'm Mikey"
          className="m-0 min-w-0 font-pixel leading-[.95] font-bold tracking-[-2px]"
          style={{ fontSize: "clamp(40px, min(9.5vw, 13vh), 132px)" }}
        >
          <span
            aria-hidden="true"
            className="reveal block pb-1.5 text-orange"
            style={{ animationDelay: ".55s" }}
          >
            HEY,
          </span>
          <span
            aria-hidden="true"
            className="reveal block pb-1.5 whitespace-nowrap"
            style={{ animationDelay: ".72s" }}
          >
            I’M MIKEY
          </span>
        </h1>
        <div
          className="rise order-first w-[clamp(110px,26vh,220px)] shrink-0 lg:order-none lg:w-[clamp(110px,min(26vh,16vw),220px)]"
          style={{ animationDelay: "1.15s" }}
        >
          <Ufo />
        </div>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-6">
        <div
          className="rise flex items-center gap-4"
          style={{ animationDelay: "1.25s" }}
        >
          <div className="relative h-12 w-[1.5px] overflow-hidden bg-line">
            <div className="cue absolute inset-0 bg-ink" />
          </div>
          <div className="eyebrow">Scroll · 2026</div>
        </div>
        <div className="rise sm:ml-auto sm:text-right" style={{ animationDelay: "1.35s" }}>
          <div className="text-base font-bold tracking-[3px]">
            Product Engineer
          </div>
          <div className="mt-2 text-[11px] tracking-[3px] text-muted uppercase">
            Full-stack · AI features · TypeScript &amp; React
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
