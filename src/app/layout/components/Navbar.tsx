import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between">
        <div className="flex">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div>Resume</div>
      </nav>
    </>
  );
};

export default Navbar;
