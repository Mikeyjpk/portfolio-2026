import Navbar from "@/app/layout/components/Navbar";
import Ufo from "@/components/illustrations/Ufo";

const HeroSection = () => (
  <section className="screen flex items-stretch justify-center px-[clamp(12px,4vw,56px)] py-[clamp(12px,3vh,32px)]">
    <div
      className="card-in relative flex h-full w-full max-w-[1240px] flex-col justify-between gap-[clamp(12px,3vh,48px)] overflow-hidden rounded-[28px] bg-white px-[clamp(20px,4vw,56px)] py-[clamp(20px,5vh,56px)] shadow-[0_1px_0_rgba(11,11,11,.06),0_40px_80px_-40px_rgba(11,11,11,.25)]"
      style={{ animationDelay: ".25s" }}
    >
      <Navbar className="rise" style={{ animationDelay: "1.1s" }} />

      {/* Mobile: UFO stacked above the headline, both centred. sm+: side by side. */}
      <div className="flex min-h-0 flex-auto flex-col items-center justify-center gap-4 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:gap-[clamp(12px,3vh,40px)] sm:text-left">
        <h1
          aria-label="Hey, I'm Mikey"
          className="m-0 font-pixel leading-[.95] font-bold tracking-[-2px]"
          style={{ fontSize: "clamp(40px, min(9.5vw, 13vh), 148px)" }}
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
            className="reveal block pb-1.5"
            style={{ animationDelay: ".72s" }}
          >
            I’M MIKEY
          </span>
        </h1>
        <div
          className="rise order-first w-[clamp(110px,26vh,220px)] sm:order-none"
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
        <div className="rise text-right" style={{ animationDelay: "1.35s" }}>
          <div className="text-base font-bold tracking-[3px]">Web Developer</div>
          <div className="mt-2 text-xs tracking-[10px] text-muted uppercase">
            Portfolio
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
