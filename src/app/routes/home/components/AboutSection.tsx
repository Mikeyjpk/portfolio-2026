import { useId, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  BrowserIcon,
  CursorIcon,
  ServerIcon,
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

  return (
    <div
      className={cn(
        "border-t-[1.5px] border-ink",
        last && "border-b-[1.5px]"
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          className="row-btn flex min-h-11 w-full cursor-pointer items-center gap-6 px-2 py-7 text-left"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
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
    icon: BrowserIcon,
    title: "Frontend Development",
    text: "Building responsive, accessible web applications with React, TypeScript, and modern CSS frameworks.",
  },
  {
    icon: ServerIcon,
    title: "Backend Development",
    text: "Creating robust APIs and server-side solutions with Node.js, databases, and cloud services.",
  },
  {
    icon: CursorIcon,
    title: "UI/UX Design",
    text: "Designing intuitive interfaces and user experiences that prioritize usability and aesthetics.",
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
                I’m Mikey, I love solving problems, learning new things and
                bringing ideas to life through code.
              </p>
              <p>
                My path hasn’t been linear, I’ve had a mix of experiences that
                have shaped how I think, create, and collaborate today.
              </p>
              <p>
                I care about building things that feel clean, intuitive, and
                genuinely helpful. Whether it’s an interface, workflow, or tool,
                I want it to feel thoughtful and enjoyable to use.
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
              I focus on creating digital experiences that are both functional
              and delightful.
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
