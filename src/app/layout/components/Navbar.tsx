import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between tracking-[0.3em] px-4 py-4 max-w-5xl mx-auto">
        <div className="flex gap-4 ">
          <Link to="/">HOME</Link>
          <Link to="/projects">PROJECTS</Link>
        </div>
        <div className="">Resume</div>
      </nav>
    </>
  );
};

export default Navbar;
