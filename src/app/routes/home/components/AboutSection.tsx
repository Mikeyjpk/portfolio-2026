import { useId, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  BrowserIcon,
  CursorIcon,
  ServerIcon,
  SparkIcon,
} from "@/components/illustrations/service-icons";
import Timeline from "./Timeline";

type RowKey = "who" | "where" | "what";

interface AboutRowProps {
  num: string;
  numClassName: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  last?: boolean;
  children: ReactNode;
}

const AboutRow = ({
  num,
  numClassName,
  title,
  open,
  onToggle,
  last,
  children,
}: AboutRowProps) => {
  const id = useId();
  const buttonId = `${id}-btn`;
  const panelId = `${id}-panel`;

  // The whole row is the click target (matching its hover tint). Clicks on the
  // title button bubble up here too, so the button has no handler of its own —
  // it stays a real <button> for keyboard (Enter/Space) and screen readers.
  const handleRowClick = () => {
    // Don't collapse the panel when the user is just selecting text in it.
    if (window.getSelection()?.toString()) return;
    onToggle();
  };

  return (
    <div
      onClick={handleRowClick}
      className={cn(
        "about-row cursor-pointer border-t-[1.5px] border-ink",
        last && "border-b-[1.5px]"
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          className="flex min-h-11 w-full cursor-pointer items-center gap-6 px-2 py-7 text-left"
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span className={cn("font-pixel text-sm", numClassName)}>{num}</span>
          <span className="flex-1 text-2xl font-semibold tracking-[-.3px]">
            {title}
          </span>
          <svg
            className={cn("chev", open && "open")}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            aria-hidden="true"
          >
            <path
              d="M11 3v16M3 11h16"
              stroke="#0B0B0B"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn("acc", open && "open")}
      >
        <div className="acc-in">
          <div className="pr-2 pb-9 pl-2 sm:pl-[62px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    icon: SparkIcon,
    title: "AI-Powered Features",
    text: "Designing and shipping AI features like configurable agents, built into the product so customers get answers, not just data.",
  },
  {
    icon: BrowserIcon,
    title: "Frontend Development",
    text: "Building responsive, accessible interfaces with React, TypeScript, and modern CSS, including data-heavy views like charts and reports.",
  },
  {
    icon: ServerIcon,
    title: "Backend Development",
    text: "Creating APIs and server-side logic with Node.js, databases, and cloud services that hold up as features scale.",
  },
  {
    icon: CursorIcon,
    title: "Product Ownership",
    text: "Turning problems into clear specs, shipping them, and iterating after release, with a designer’s eye for how it should feel to use.",
  },
];

const AboutSection = () => {
  const [open, setOpen] = useState<RowKey | null>("who");
  const toggle = (key: RowKey) => setOpen((cur) => (cur === key ? null : key));

  return (
    <section className="section bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8">
        <h2 className="eyebrow">About</h2>

        <div className="flex min-w-0 flex-col">
          <AboutRow
            num="01"
            numClassName="text-orange-deep"
            title="Who I am"
            open={open === "who"}
            onToggle={() => toggle("who")}
          >
            <div className="max-w-[880px] space-y-4 text-[17px] leading-[1.7] text-body">
              <p>
                I’m Mikey, a Product Engineer building full-stack, AI-powered
                features in TypeScript and React.
              </p>
              <p>
                I like owning a feature end to end: turning a problem into a
                clear spec, shipping it, and scaling it once it’s in customers’
                hands.
              </p>
              <p>
                I have 4 years of professional experience. At Truescope I build
                features for a media intelligence platform, including
                configurable agents, charts, reports and alerts that turn raw
                data into something customers can act on.
              </p>
              <p>
                Outside work, I love making things. I’ve written and produced
                music, including with a band signed to Greyscale Records. I
                also write stories, build small projects around the house, and
                I’m learning game development.
              </p>
            </div>
          </AboutRow>

          <AboutRow
            num="02"
            numClassName="text-red-deep"
            title="Where I’ve been"
            open={open === "where"}
            onToggle={() => toggle("where")}
          >
            <Timeline />
          </AboutRow>

          <AboutRow
            num="03"
            numClassName="text-ink"
            title="What I do"
            open={open === "what"}
            onToggle={() => toggle("what")}
            last
          >
            <p className="mb-6 text-[17px] leading-relaxed text-body">
              I build product features end to end, from the first spec to
              scaling them after release.
            </p>
            <ul className="flex flex-col border-b border-line-soft">
              {services.map(({ icon: Icon, title, text }, i) => (
                <li
                  key={title}
                  className="rise grid grid-cols-[44px_minmax(0,1fr)] gap-5 border-t border-line-soft py-6"
                  style={{ animationDelay: `${(i + 1) * 0.05}s` }}
                >
                  <Icon />
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-pixel text-xs text-orange-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-semibold">{title}</span>
                    </div>
                    <p className="mt-2 max-w-[520px] text-[15px] leading-relaxed text-body">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </AboutRow>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
