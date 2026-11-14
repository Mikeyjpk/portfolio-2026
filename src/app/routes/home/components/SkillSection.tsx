import { useState } from "react";
import type { CSSProperties, ComponentType } from "react";
import { cn } from "@/lib/utils";
import {
  AgentIcon,
  ArrowCircle,
  AtomIcon,
  CloseCircle,
  GearCycleIcon,
  LayersIcon,
} from "@/components/illustrations/focus-icons";

interface SkillCard {
  id: string;
  icon: ComponentType;
  /** Title split over two lines on the card. */
  titleLines: [string, string];
  text: string;
  dotPoints: string[];
  glow: string;
  bar: string;
  dot: string;
}

const skillCardsData: SkillCard[] = [
  {
    id: "ai",
    icon: AgentIcon,
    titleLines: ["AI &", "Agents"],
    text: "Building AI-powered features into a production platform, including configurable agents that help customers turn raw media data into something they can act on.",
    // TODO: once you've picked which AI tools to name, swap one of these for them.
    dotPoints: [
      "Configurable agents in production",
      "From raw data to actionable insight",
      "Specced, shipped & scaled after release",
    ],
    glow: "rgba(229,56,59,.3)",
    bar: "var(--color-red)",
    dot: "var(--color-red)",
  },
  {
    id: "frontend",
    icon: AtomIcon,
    titleLines: ["Front-end", "Engineering"],
    text: "Building intuitive, performant interfaces with component-based architecture, from design systems to data-heavy views like charts and reports. Focused on clean code, accessibility, and refined user experience.",
    dotPoints: [
      "React & Next.js application architecture",
      "TypeScript-first development",
      "Tailwind design systems & data visualisation",
    ],
    glow: "rgba(11,11,11,.22)",
    bar: "var(--color-ink)",
    dot: "var(--color-ink)",
  },
  {
    id: "fullstack",
    icon: LayersIcon,
    titleLines: ["Full-Stack", "Development"],
    text: "Owning features across client, server, and database layers. Focused on scalable architecture, secure data handling, and features that keep working as they grow.",
    dotPoints: [
      "Prisma ORM, relational & NoSQL databases",
      "Authentication and session management",
      "Serverless functions and backend logic",
    ],
    glow: "rgba(217,119,43,.38)",
    bar: "var(--color-orange)",
    dot: "var(--color-orange)",
  },
  {
    id: "devops",
    icon: GearCycleIcon,
    titleLines: ["DevOps &", "CI/CD"],
    text: "Keeping delivery fast and reliable with automated build, test, and deployment pipelines, so features can ship often and scale safely after release.",
    dotPoints: [
      "CI/CD pipelines with GitHub Actions & Bitbucket",
      "Automated deployments to Vercel/Netlify",
      "Git branching and code review practices",
    ],
    glow: "rgba(242,184,168,.75)",
    bar: "var(--color-pink)",
    dot: "var(--color-red)",
  },
];

const STAGE_ACTIONS = ["Show summary", "Show details", "Close"];

interface SkillCardProps {
  card: SkillCard;
  stage: number;
  onClick: () => void;
}

const FocusCard = ({ card, stage, onClick }: SkillCardProps) => {
  const Icon = card.icon;
  const pane = (i: number) => ({
    className: cn("pane block", i === 0 && "p-title", i === stage && "cur"),
    "aria-hidden": i !== stage,
  });

  return (
    <button
      type="button"
      onClick={onClick}
      // min-height only matters when cards sit side by side (keeps a row level);
      // in the single-column mobile layout it just left a big empty gap.
      className="fcard flex cursor-pointer flex-col gap-6 overflow-hidden px-6 pt-8 text-left select-none sm:min-h-[440px] sm:gap-7 sm:px-8 sm:pt-10"
      style={{ "--glow": card.glow } as CSSProperties}
    >
      {/* Top-aligned so icons and titles line up across cards, whatever each card's text height. */}
      <span className="flex w-full flex-auto flex-col justify-start gap-5 sm:pt-6">
        <span className={cn("ico-wrap", stage !== 0 && "small")}>
          <Icon />
        </span>
        <span className="panes block w-full">
          <span {...pane(0)}>
            <span className="block text-center text-[26px] leading-[1.15] font-bold tracking-[-.4px]">
              {card.titleLines[0]}
              <br />
              {card.titleLines[1]}
            </span>
          </span>
          <span {...pane(1)}>
            <span className="block text-[15px] leading-[1.65] text-body">
              {card.text}
            </span>
          </span>
          <span {...pane(2)}>
            {card.dotPoints.map((point) => (
              <span
                key={point}
                className="flex gap-3 border-t border-line-soft py-2.5 text-[15px] leading-normal text-body"
              >
                <span
                  className="mt-[9px] size-1.5 flex-none"
                  style={{ background: card.dot }}
                />
                <span>{point}</span>
              </span>
            ))}
          </span>
        </span>
      </span>

      <span className="relative block size-8 self-center">
        <ArrowCircle className={cn("ctl absolute inset-0", stage === 2 && "off")} />
        <CloseCircle className={cn("ctl absolute inset-0", stage !== 2 && "off")} />
      </span>
      <span className="sr">
        {card.titleLines.join(" ")}: {STAGE_ACTIONS[stage]}
      </span>

      <span
        className="-mx-6 block h-[5px] w-[calc(100%+48px)] sm:-mx-8 sm:w-[calc(100%+64px)]"
        style={{ background: card.bar }}
      />
    </button>
  );
};

const SkillSection = () => {
  const [cardStages, setCardStages] = useState<Record<string, number>>({});

  const handleCardClick = (cardId: string) => {
    setCardStages((prev) => ({
      ...prev,
      [cardId]: ((prev[cardId] ?? 0) + 1) % 3,
    }));
  };

  return (
    <section id="focus" className="section">
      <div className="mx-auto max-w-[1240px]">
        {/* Centred below lg to match the hero and contact headings; split left/right on desktop. */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <h2 className="h-pixel">Focus areas</h2>
          <div className="eyebrow">Click a card to explore</div>
        </div>
        {/* 1 → 2×2 → 4 across, so four cards never leave an orphan on its own row. */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillCardsData.map((card) => (
            <FocusCard
              key={card.id}
              card={card}
              stage={cardStages[card.id] ?? 0}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
