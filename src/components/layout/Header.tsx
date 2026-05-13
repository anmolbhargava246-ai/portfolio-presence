import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Thinking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <Link to="/" className="nav-name">
          Anmol Bhargava
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
