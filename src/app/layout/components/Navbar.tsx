import { useId } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
  style?: React.CSSProperties;
}

/** Resume isn't available yet — shown as a disabled item with a tooltip. */
const ResumeLink = () => {
  const tipId = useId();

  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        aria-disabled="true"
        aria-describedby={tipId}
        onClick={(e) => e.preventDefault()}
        className="cursor-not-allowed uppercase tracking-[inherit] text-muted opacity-60"
      >
        Resume
      </button>
      <span
        id={tipId}
        role="tooltip"
        className="pointer-events-none absolute top-full right-0 z-10 mt-3 whitespace-nowrap bg-ink px-3 py-2 text-[10px] tracking-[2px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        Not currently available
      </span>
    </span>
  );
};

const Navbar = ({ className, style }: NavbarProps) => {
  // Only link to the page you're *not* on.
  const onProjects = useLocation().pathname.startsWith("/projects");

  return (
    <nav
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 text-xs font-medium tracking-[4px] uppercase",
        className
      )}
      style={style}
    >
      {onProjects ? (
        <Link className="navlink" to="/">
          Home
        </Link>
      ) : (
        <Link className="navlink" to="/projects">
          Projects
        </Link>
      )}
      <ResumeLink />
    </nav>
  );
};

export default Navbar;
