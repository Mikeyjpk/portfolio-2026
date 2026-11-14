const timelineEvents = [
  { company: "Truescope", role: "Web Developer", yearTo: "Now", yearFrom: "2023" },
  { company: "Freelance", role: "Web Developer", yearTo: "2023", yearFrom: "2022" },
  { company: "Westmead Hospital", role: "Enrolled Nurse", yearTo: "2022", yearFrom: "2019" },
  { company: "Liverpool Emergency Department", role: "Ward Orderly", yearTo: "2019", yearFrom: "2018" },
  { company: "Dan Murphy’s", role: "Account Manager", yearTo: "2018", yearFrom: "2016" },
  { company: "Kyloss", role: "Labourer", yearTo: "2016", yearFrom: "2013" },
  { company: "Luxe Concept", role: "Hairdresser", yearTo: "2013", yearFrom: "2010" },
];

const Timeline = () => (
  <div>
    <p className="mb-5 text-sm text-muted italic">
      A look at the journey and the experiences that shaped who I am today.
    </p>
    <ol>
      {timelineEvents.map((event, i) => (
        <li
          key={event.company}
          className="rise grid grid-cols-[minmax(96px,130px)_minmax(0,1fr)] gap-4 border-b border-line py-4"
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          <div className="pt-[3px] font-pixel text-[13px] text-muted">
            {event.yearTo} — {event.yearFrom}
          </div>
          <div>
            <div className="text-[17px] font-semibold">{event.company}</div>
            <div className="mt-0.5 text-sm text-muted">{event.role}</div>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default Timeline;
