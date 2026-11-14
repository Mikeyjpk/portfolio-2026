import { useState } from "react";
import type { CSSProperties, ComponentType } from "react";
import { cn } from "@/lib/utils";
import {
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
    id: "frontend",
    icon: AtomIcon,
    titleLines: ["Front-end", "Engineering"],
    text: "Building intuitive, performant user interfaces using modern frameworks and component-based architecture. Focused on clean code, responsive layouts, accessibility, and refined user experience.",
    dotPoints: [
      "React & Next.js application architecture",
      "TypeScript-first development",
      "Tailwind-based design systems",
    ],
    glow: "rgba(11,11,11,.22)",
    bar: "var(--color-ink)",
    dot: "var(--color-ink)",
  },
  {
    id: "fullstack",
    icon: LayersIcon,
    titleLines: ["Full-Stack", "Development"],
    text: "Building end-to-end web applications across client, server, and database layers. Focused on scalable architecture, secure data handling, and seamless integration between front and back-end.",
    dotPoints: [
      "Prisma ORM, Relational & NoSQL databases",
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
    text: "Improving delivery speed and reliability through automated build, test, and deployment pipelines. Focused on repeatable workflows and version control best practices.",
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
    className: cn("pane block", i === stage && "cur"),
    "aria-hidden": i !== stage,
  });

  return (
    <button
      type="button"
      onClick={onClick}
      className="fcard flex min-h-[440px] cursor-pointer flex-col gap-7 overflow-hidden px-8 pt-10 text-left select-none"
      style={{ "--glow": card.glow } as CSSProperties}
    >
      <span className="flex w-full flex-auto flex-col justify-center gap-7">
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
        className="-mx-8 block h-[5px] w-[calc(100%+64px)]"
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
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="h-pixel">Focus areas</h2>
          <div className="eyebrow">Click a card to explore</div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
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
