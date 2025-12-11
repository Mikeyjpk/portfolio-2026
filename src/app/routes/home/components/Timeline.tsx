const timelineEvents = [
  {
    id: 1,
    company: "Truescope",
    role: "Web Developer",
    yearTo: "Present",
    yearFrom: "2023",
  },
  {
    id: 2,
    company: "Freelance",
    role: "Web Developer",
    yearTo: "2023",
    yearFrom: "2022",
  },
  {
    id: 3,
    company: "Westmead Hospital",
    role: "Enrolled Nurse",
    yearTo: "2022",
    yearFrom: "2019",
  },
  {
    id: 4,
    company: "Liverpool Emergency Department",
    role: "Ward Orderly",
    yearTo: "2019",
    yearFrom: "2018",
  },
  {
    id: 5,
    company: "Dan Murphy's",
    role: "Account Manager",
    yearTo: "2018",
    yearFrom: "2016",
  },
  {
    id: 6,
    company: "Kyloss",
    role: "Labourer",
    yearTo: "2016",
    yearFrom: "2013",
  },
  {
    id: 7,
    company: "Luxe Concept",
    role: "Hairdresser",
    yearTo: "2013",
    yearFrom: "2010",
  },
];

const Timeline = () => {
  return (
    <section className="">
      <p className="text-subtitle">
        A look at my journey and the experiences that shaped who I am today.
      </p>

      <div className="flex flex-col gap-4">
        {timelineEvents.map((event) => (
          <div key={event.id} className="flex gap-8">
            <div className="text-right w-14">
              <p>{event.yearTo}</p>
              <p>{event.yearFrom}</p>
            </div>
            <div>
              <p>{event.company}</p>
              <p>{event.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
