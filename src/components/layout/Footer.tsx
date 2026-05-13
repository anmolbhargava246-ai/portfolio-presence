import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer style={{ borderTop: "0.5px solid var(--color-border-tertiary)", marginTop: "4rem" }}>
      <div
        className="container-page"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 13,
          color: "var(--color-text-tertiary)",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span>© {new Date().getFullYear()} Anmol Bhargava</span>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <a
            href="mailto:anmol.bhargava246@gmail.com"
            style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/anmolbhargava4/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
          >
            LinkedIn
          </a>
          <Link
            to="/contact"
            style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
