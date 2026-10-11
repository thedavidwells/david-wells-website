import Link from "next/link";

const navItems = {
  "/work": {
    name: "work",
  },
  "/blog": {
    name: "writing",
  },
};

export function Navbar() {
  return (
    <nav className="window nav-bar mb-12" id="nav">
      <Link href="/" className="nav-home">
        <span className="nav-square" aria-hidden="true" />
        david wells
      </Link>
      <div className="flex flex-row">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link key={path} href={path} className="nav-link">
              <span className="nav-square" aria-hidden="true" />
              {name}
            </Link>
          );
        })}
        <a
          href="https://www.linkedin.com/in/thedavidwells/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link nav-link-accent"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
