const HeroSection = () => {
  return (
    <section className="flex flex-col h-screen py-4">
      <div className="flex-1 flex items-center">
        <h1 className="text-display text-sm flex flex-col">
          <span className="text-accent">Hey,</span> I'M MIKEY
        </h1>
      </div>

      <div className="text-heading flex justify-between items-end w-full">
        <p>2026</p>
        <div className="flex flex-col items-end gap-2">
          <p className="text-title">Web Developer</p>
          <p className="-mr-[1em]">PORTFOLIO</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
