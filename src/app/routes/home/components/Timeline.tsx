// TODO: if your official Truescope title is now Product Engineer, update it here.
const techRoles = [
  { company: "Truescope", role: "Web Developer", years: "Now — 2023" },
  { company: "Freelance", role: "Web Developer", years: "2023 — 2022" },
];

/** Pre-tech roles, grouped into one row so the focus stays on the engineering work. */
const earlierRoles = [
  "Enrolled Nurse",
  "Ward Orderly",
  "Account Manager",
  "Labourer",
  "Hairdresser",
];

const rowClass =
  "rise grid grid-cols-[minmax(96px,130px)_minmax(0,1fr)] gap-4 border-b border-line py-4";

const Timeline = () => (
  <div>
    <p className="mb-5 text-sm text-muted italic">
      Four years shipping software, built on earlier roles in healthcare,
      sales and the trades that taught me to work under pressure and with
      people.
    </p>
    <ol>
      {techRoles.map((r, i) => (
        <li
          key={r.company}
          className={rowClass}
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          <div className="pt-[3px] font-pixel text-[13px] text-muted">
            {r.years}
          </div>
          <div>
            <div className="text-[17px] font-semibold">{r.company}</div>
            <div className="mt-0.5 text-sm text-muted">{r.role}</div>
          </div>
        </li>
      ))}
      <li
        className={rowClass}
        style={{ animationDelay: `${techRoles.length * 0.06}s` }}
      >
        <div className="pt-[3px] font-pixel text-[13px] text-muted">
          2022 — 2010
        </div>
        <div>
          <div className="text-[17px] font-semibold">Before tech</div>
          <div className="mt-0.5 text-sm text-muted">
            Healthcare, sales &amp; trades
          </div>
          <ul className="mt-3 flex flex-wrap gap-2">
            {earlierRoles.map((role) => (
              <li
                key={role}
                className="border border-line px-2.5 py-1 text-xs text-muted"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </li>
    </ol>
  </div>
);

export default Timeline;
