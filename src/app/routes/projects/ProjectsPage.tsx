import Navbar from "@/app/layout/components/Navbar";
import {
  caseStudies,
  sideQuests,
  type CaseStudy,
  type SideQuest,
} from "./projects-data";

const Tag = ({ children }: { children: string }) => (
  <li className="border border-line px-2.5 py-1 text-xs text-muted">
    {children}
  </li>
);

const CaseStudyRow = ({ study, index }: { study: CaseStudy; index: number }) => (
  <article
    className="rise grid gap-8 border-t-[1.5px] border-ink py-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16"
    style={{ animationDelay: `${0.1 + index * 0.08}s` }}
  >
    <header className="flex flex-col gap-4">
      <div className="flex items-baseline gap-3">
        <span className="font-pixel text-sm text-orange-deep">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="eyebrow">
          {study.org} · {study.years}
        </span>
      </div>
      <h2 className="text-[28px] leading-tight font-semibold tracking-[-.4px]">
        {study.title}
      </h2>
      <p className="text-[17px] leading-relaxed text-body">{study.summary}</p>
      <ul className="flex flex-wrap gap-2">
        {study.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>
    </header>

    <dl className="grid gap-6 sm:grid-cols-3">
      {(
        [
          ["Problem", study.problem],
          ["What I built", study.built],
          ["Outcome", study.outcome],
        ] as const
      ).map(([label, text]) => (
        <div key={label} className="border-l-2 border-line pl-4">
          <dt className="font-pixel text-xs text-muted uppercase">{label}</dt>
          <dd className="mt-2 text-[15px] leading-relaxed text-body">{text}</dd>
        </div>
      ))}
    </dl>
  </article>
);

/** Hazard-tape panel shown while there are no case studies to publish. */
const UnderConstruction = () => {
  const tape = {
    backgroundImage:
      "repeating-linear-gradient(-45deg, var(--color-ink) 0 14px, var(--color-orange) 14px 28px)",
  };
  return (
    <div className="rise overflow-hidden bg-white" style={{ animationDelay: ".1s" }}>
      <div aria-hidden="true" className="h-3" style={tape} />
      <div className="flex flex-col items-center gap-6 px-6 py-16 text-center">
        <div className="grid grid-cols-[repeat(5,10px)] gap-1" aria-hidden="true">
          {[1, 1, 0, 1, 1, 2, 2, 2, 2, 2].map((c, i) => (
            <span
              key={i}
              className="pix size-2.5"
              style={{
                background:
                  c === 1 ? "var(--color-orange)" : c === 2 ? "var(--color-ink)" : "transparent",
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        <h2 className="font-pixel text-[clamp(24px,3vw,36px)] leading-none font-bold">
          Under construction
        </h2>
        <p className="max-w-[460px] text-[15px] leading-relaxed text-body">
          Case studies are on the way. In the meantime, see what I focus on
          from the home page, or get in touch to talk about my work.
        </p>
      </div>
      <div aria-hidden="true" className="h-3" style={tape} />
    </div>
  );
};

const line = {
  fill: "none",
  stroke: "#0B0B0B",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const SIDE_QUEST_ICONS: Record<SideQuest["icon"], () => React.ReactElement> = {
  // Beamed eighth notes
  note: () => (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <path d="M22 46 V14 L50 8 V40" {...line} />
      <path d="M22 22 L50 16" {...line} stroke="#D9772B" />
      <ellipse cx="16" cy="46" rx="6" ry="5" {...line} />
      <ellipse cx="44" cy="40" rx="6" ry="5" {...line} />
    </svg>
  ),
  // House with a lit window
  house: () => (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <path d="M8 30 L32 10 L56 30" {...line} />
      <path d="M14 26 V54 H50 V26" {...line} />
      <path d="M27 54 V40 H37 V54" {...line} />
      <rect x="40" y="32" width="6" height="6" fill="#D9772B" />
    </svg>
  ),
  // Quill writing a line
  quill: () => (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <path d="M50 8 C34 12 22 26 18 46 L24 44 C30 30 40 18 50 8Z" {...line} />
      <path d="M18 46 L14 54" {...line} />
      <path d="M26 56 H52" {...line} stroke="#D9772B" />
    </svg>
  ),
  // Lightbulb with spark
  bulb: () => (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <path
        d="M32 8 C22 8 15 15 15 25 C15 32 19 36 23 40 V46 H41 V40 C45 36 49 32 49 25 C49 15 42 8 32 8Z"
        {...line}
      />
      <path d="M25 52 H39 M28 58 H36" {...line} />
      <path
        className="tw"
        d="M54 6 C55 10 56 11 60 12 C56 13 55 14 54 18 C53 14 52 13 48 12 C52 11 53 10 54 6Z"
        fill="#D9772B"
      />
    </svg>
  ),
  // Gamepad
  gamepad: () => (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <path
        d="M18 20 H46 C54 20 60 30 60 40 C60 48 54 50 50 46 L44 40 H20 L14 46 C10 50 4 48 4 40 C4 30 10 20 18 20Z"
        {...line}
      />
      <path d="M18 27 V35 M14 31 H22" {...line} />
      <circle cx="44" cy="28" r="2.5" fill="#E5383B" />
      <circle cx="50" cy="34" r="2.5" fill="#D9772B" />
    </svg>
  ),
};

const SideQuestCard = ({ quest }: { quest: SideQuest }) => {
  const Icon = SIDE_QUEST_ICONS[quest.icon];
  return (
    <div className="flex h-full flex-col gap-4 border-t-[1.5px] border-ink pt-8">
      <div className="flex items-start justify-between gap-4">
        <Icon />
        <span className="border border-line px-2.5 py-1 font-pixel text-[11px] text-muted uppercase">
          {quest.status}
        </span>
      </div>
      <h3 className="mt-2 text-xl font-semibold">{quest.title}</h3>
      <p className="text-[15px] leading-relaxed text-body">{quest.text}</p>
    </div>
  );
};

const ProjectsPage = () => (
  <>
    <header className="px-[clamp(20px,5vw,80px)] pt-8">
      <Navbar className="mx-auto max-w-[1240px]" />
    </header>

    <section className="section pt-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="rise mb-14 flex flex-col gap-5">
          <div className="eyebrow">Projects</div>
          <h1 className="h-pixel">Selected work</h1>
          <p className="max-w-[640px] text-[17px] leading-relaxed text-body">
            Features I’ve owned end to end, from turning the problem into a
            spec, to shipping it, to scaling it after release.
          </p>
        </div>
        {caseStudies.length > 0 ? (
          <div className="border-b-[1.5px] border-ink">
            {caseStudies.map((s, i) => (
              <CaseStudyRow key={s.id} study={s} index={i} />
            ))}
          </div>
        ) : (
          <UnderConstruction />
        )}
      </div>
    </section>

    <section id="side-quests" className="section bg-white">
      <div className="mx-auto max-w-[1240px]">
        {/* Subtitle sits under the title at every size. */}
        <div className="mb-12 flex flex-col gap-5">
          <h2 className="h-pixel">Side quests</h2>
          <p className="text-[17px] leading-relaxed text-body">
            Outside work I’m drawn to making things: writing music and
            stories, concepting ideas, building small projects around the
            house, and learning game development.
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {sideQuests.map((q) => (
            <SideQuestCard key={q.id} quest={q} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ProjectsPage;
