import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

type CaseStudy = {
  title: string;
  chip: string;
  impact: string;
  href: string;
};

const cases: CaseStudy[] = [
  {
    title: "Solving for trust in mobile on-call scheduling",
    chip: "B2B SaaS · Enterprise",
    impact:
      "Diary studies and JTBD work surfaced a trust gap that usability findings had missed. Design changes shipped — satisfaction up 15%, adoption up 10%.",
    href: "/projects/atlassian",
  },
  {
    title: "Why a seamless loan product wasn't being taken",
    chip: "FinTech · Behavioural",
    impact:
      "Behavioural framing revealed ambiguity, not speed, as the real friction. Clarity-first copy turned a stalled funnel into one that converts.",
    href: "/projects/personal-loans",
  },
  {
    title: "When booking speed isn't the bottleneck",
    chip: "Aviation · Behavioural UX",
    impact:
      "A behavioural reframe shifted strategy from speed-first to confidence-first. Copy, sequencing, and reassurance moved — abandonment dropped at the moments analytics couldn't explain.",
    href: "/projects/airline-booking",
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="home-wrap">
        {/* HERO — freelance positioning */}
        <section className="studio-hero">
          {/* Hand-drawn squiggle ornament, top-left of hero only */}
          <svg
            className="hero-squiggle"
            style={{ top: "1.25rem", left: "1.25rem" }}
            viewBox="0 0 140 36"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 22 C 18 4, 36 32, 52 16 S 86 6, 104 20 S 130 8, 138 24"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>

          <div className="studio-hero-grid with-circle">
            <span
              className="soft-circle"
              style={{
                width: 200,
                height: 200,
                top: "1rem",
                left: "calc(50% - 220px)",
              }}
              aria-hidden="true"
            />
            <div className="project-meta" style={{ marginBottom: "0.5rem" }}>
              UX RESEARCHER · BENGALURU, IN · AVAILABLE FOR PROJECTS
            </div>
            <h1 className="studio-hero-title">
              Behavioural research that helps product owners and teams
              figure out what users{" "}
              <span className="studio-italic">
                won't say
                <svg
                  className="theme-underline"
                  viewBox="0 0 200 16"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10 Q 40 3 80 9 T 160 7 Q 185 11 197 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              , and what to build because of it.
            </h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="theme-cta-wrap">
                <svg
                  className="theme-cta-circle"
                  viewBox="0 0 220 70"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M18 35 Q 18 10 110 8 Q 204 6 206 36 Q 208 62 110 62 Q 12 62 18 33"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <Link to="/services" className="studio-hero-cta">
                  Know more
                </Link>
              </span>
              <Link to="/contact" className="studio-hero-cta">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>

        {/* MY PROJECTS heading */}
        <section>
          <h2 className="my-projects-heading">
            <span>My projects</span>
            <span className="my-projects-heading-arrow" aria-hidden="true">
              ↓
            </span>
          </h2>
        </section>

        {/* 3 FEATURED CASES — compact card grid */}
        <section className="cases-grid">
          {cases.map((c, i) => (
            <Link key={c.href} to={c.href} className="case-card">
              <div className="case-card-num">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="case-card-chip">{c.chip}</div>
              <h3 className="case-card-title">{c.title}</h3>
              <p className="case-card-impact">{c.impact}</p>
              <span className="case-card-link">
                Read full case study
                <i className="ti ti-arrow-right" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </section>

        {/* SEE ALL LINK */}
        <section style={{ textAlign: "center", padding: "1rem 0 4rem" }}>
          <Link to="/projects" className="btn-editorial">
            See all 8 projects
            <i className="ti ti-arrow-right" aria-hidden="true" />
          </Link>
        </section>

        {/* ABOUT */}
        <section className="studio-about">
          <div className="studio-about-left with-circle">
            <span
              className="soft-circle"
              style={{ width: 130, height: 130, top: "-1.5rem", left: "-1.5rem" }}
              aria-hidden="true"
            />
            <h2 className="studio-about-title">About Anmol</h2>
            <div className="studio-about-mark" aria-hidden="true" />
            <p className="studio-about-bio">
              Curiosity about why people do what they do is what pulled me
              into research. A Master's in Applied Psychology turned that
              curiosity into a craft, and the psychology lens still shapes
              how I think about every product I work on.
            </p>
            <p className="studio-about-bio">
              My work has spanned enterprise and consumer research across
              industries. The products vary but the question I'm trying to
              answer rarely does: what's really driving this behaviour, and
              what does the product need to do about it?
            </p>
            <p className="studio-about-bio">
              Right now, I'm drawn to how people interact with AI products,
              and what changes when the product on the other side can think
              back. The behavioural questions feel sharper here than anywhere
              else. How does trust form when the system isn't fully
              predictable? What does loyalty look like when the product keeps
              learning? Those questions are quietly shaping the next era of
              product growth, and I want to be in the room as they get
              answered.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <Link to="/about" className="btn-editorial">
                More about me
                <i className="ti ti-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="studio-about-right">
            <img
              className="studio-about-photo"
              src={`${import.meta.env.BASE_URL}anmol-bhargava.jpg`}
              alt="Anmol Bhargava"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
