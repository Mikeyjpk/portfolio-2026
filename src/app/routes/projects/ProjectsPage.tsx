import Navbar from "@/app/layout/components/Navbar";
import { caseStudies, games, type CaseStudy, type Game } from "./projects-data";

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

/** Pixel-pattern stand-in until a real screenshot/GIF is added. */
const GamePlaceholderArt = () => (
  <div
    aria-hidden="true"
    className="flex aspect-video items-center justify-center bg-ink"
    style={{
      backgroundImage:
        "linear-gradient(#1c1c1c 1px, transparent 1px), linear-gradient(90deg, #1c1c1c 1px, transparent 1px)",
      backgroundSize: "16px 16px",
    }}
  >
    <div className="grid grid-cols-[repeat(5,10px)] gap-1">
      {[1, 1, 0, 1, 1, 2, 2, 2, 2, 2].map((c, i) => (
        <span
          key={i}
          className="pix size-2.5"
          style={{
            background:
              c === 1 ? "var(--color-orange)" : c === 2 ? "#fff" : "transparent",
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  </div>
);

const GameCard = ({ game }: { game: Game }) => {
  const body = (
    <>
      {game.image ? (
        <img
          src={game.image}
          alt={`Screenshot of ${game.title}`}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <GamePlaceholderArt />
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-semibold">{game.title}</h3>
        <p className="text-[15px] leading-relaxed text-body">
          {game.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {game.tools.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
        {game.url && (
          <span className="mt-2 text-xs font-semibold tracking-[4px] text-orange-deep uppercase">
            Play ▸
          </span>
        )}
      </div>
    </>
  );

  const cardClass =
    "fcard flex h-full flex-col overflow-hidden bg-white [--glow:rgba(217,119,43,.3)]";

  return game.url ? (
    <a
      href={game.url}
      target="_blank"
      rel="noreferrer"
      className={`${cardClass} text-ink no-underline hover:text-ink`}
    >
      {body}
    </a>
  ) : (
    <div className={cardClass}>{body}</div>
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
        <div className="border-b-[1.5px] border-ink">
          {caseStudies.map((s, i) => (
            <CaseStudyRow key={s.id} study={s} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section id="games" className="section bg-white">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="h-pixel">Games</h2>
          <p className="max-w-[420px] text-[15px] leading-relaxed text-muted">
            Outside work, I make games, which gives me an excuse to try tools I
            wouldn’t use at my day job.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ProjectsPage;
