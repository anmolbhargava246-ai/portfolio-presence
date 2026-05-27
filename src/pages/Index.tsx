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
          <div className="studio-hero-grid">
            <div className="project-meta" style={{ marginBottom: "0.5rem" }}>
              UX RESEARCHER · BENGALURU, IN · AVAILABLE FOR PROJECTS
            </div>
            <h1 className="studio-hero-title">
              Behavioural research that helps founders, teams, and agencies
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
                <Link to="/projects" className="studio-hero-cta">
                  See selected work
                </Link>
              </span>
              <Link to="/contact" className="studio-hero-cta">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>

        {/* SELECTED WORK heading */}
        <section>
          <h2 className="studio-section-heading">
            <span>Selected work</span>
            <span className="studio-section-heading-arrow" aria-hidden="true">
              ↓
            </span>
          </h2>
        </section>

        {/* 3 FEATURED CASES */}
        {cases.map((c) => (
          <section key={c.href} className="studio-case">
            <h3 className="studio-case-name">
              <Link
                to={c.href}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {c.title}
              </Link>
            </h3>
            <div className="studio-case-chip">{c.chip}</div>
            <div className="studio-case-body">
              <p className="studio-case-impact">{c.impact}</p>
              <div style={{ marginTop: "1.75rem" }}>
                <Link to={c.href} className="btn-editorial">
                  Read full case study
                  <i className="ti ti-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* SEE ALL LINK */}
        <section style={{ textAlign: "center", padding: "1rem 0 4rem" }}>
          <Link to="/projects" className="btn-editorial">
            See all 8 projects
            <i className="ti ti-arrow-right" aria-hidden="true" />
          </Link>
        </section>

        {/* ABOUT */}
        <section className="studio-about">
          <div className="studio-about-left">
            <h2 className="studio-about-title">About Anmol</h2>
            <div className="studio-about-mark" aria-hidden="true" />
            <p className="studio-about-bio">
              Four years of research across product and consumer work,
              including time at Atlassian and across research agencies. I
              partner with founders, small product and brand teams, and
              research agencies on freelance projects.
            </p>
            <p className="studio-about-bio">
              The shape of the work changes from one engagement to the next.
              The underlying question doesn't: what is actually driving the
              behaviour, and what does the product need to do about it?
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
