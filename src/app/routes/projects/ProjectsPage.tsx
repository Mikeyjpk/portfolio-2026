import Navbar from "@/app/layout/components/Navbar";

const ProjectsPage = () => (
  <>
    <header className="px-[clamp(20px,5vw,80px)] pt-8">
      <Navbar className="mx-auto max-w-[1240px]" />
    </header>
    <section className="section flex min-h-[70svh] flex-col items-center justify-center gap-6 text-center">
      <h1 className="h-pixel">Under construction</h1>
      <p className="max-w-md text-[17px] leading-relaxed text-body">
        I’m currently working on this page. Check back soon for updates!
      </p>
    </section>
  </>
);

export default ProjectsPage;
