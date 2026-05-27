import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

type Project = {
  num: string;
  meta: string;
  industry: Industry;
  title: string;
  desc: string;
  tags: string[];
  href: string;
};

type Industry =
  | "Enterprise B2B"
  | "FinTech"
  | "Aviation/Travel"
  | "Real Estate"
  | "Education"
  | "Consumer Product";

const filters: ("All" | Industry)[] = [
  "All",
  "Enterprise B2B",
  "FinTech",
  "Aviation/Travel",
  "Real Estate",
  "Education",
  "Consumer Product",
];

const projects: Project[] = [
  {
    num: "01",
    meta: "Enterprise B2B SaaS · Usability research",
    industry: "Enterprise B2B",
    title: "When ambiguous workflows put on-call engineers at risk",
    desc: "How evaluative research on a new mobile scheduling feature shipped design changes that lifted satisfaction by 15% and adoption by 10%.",
    tags: ["Enterprise B2B SaaS", "Feature adoption", "Cross-functional partnership"],
    href: "/projects/atlassian",
  },
  {
    num: "02",
    meta: "FinTech · Behavioural research",
    industry: "FinTech",
    title: "When ambiguity costs more than interest rates",
    desc: "Why a technically seamless digital loan product still wasn't getting taken, and what changed when the team shifted from speed-first messaging to clarity-first trust-building.",
    tags: ["Trust & adoption", "Activation & onboarding", "Behavioural friction"],
    href: "/projects/personal-loans",
  },
  {
    num: "03",
    meta: "Aviation · Behavioural UX",
    industry: "Aviation/Travel",
    title: "Trust, dressed up as a usability problem",
    desc: "How a behavioural reframe shifted an airline from speed-first optimisation to confidence-first experience strategy.",
    tags: ["Trust & adoption", "Conversion friction", "Retention behaviour"],
    href: "/projects/airline-booking",
  },
  {
    num: "04",
    meta: "Real estate · Mixed-methods research",
    industry: "Real Estate",
    title: "People adopt routines, not landmarks",
    desc: "How mixed-methods research reframed a high-investment urban development from feature-led design to behaviour-led adoption planning.",
    tags: ["Adoption at scale", "Segmentation", "Concept testing"],
    href: "/projects/urban-planning",
  },
  {
    num: "05",
    meta: "Higher education · Strategy research",
    industry: "Education",
    title: "Designing a creative school for two audiences at once",
    desc: "How generative research shaped a curriculum strategy that was globally credible and unmistakably Saudi.",
    tags: ["Generative research", "Strategy & positioning", "Segmentation"],
    href: "/projects/creative-education",
  },
  {
    num: "06",
    meta: "FinTech · Pre-launch research",
    industry: "FinTech",
    title: "Finding the trust gaps before launch did",
    desc: "Pre-launch behavioural research that re-prioritised a wallet's launch readiness by adoption risk, not interface severity.",
    tags: ["Pre-launch risk", "Activation & onboarding", "Behavioural usability"],
    href: "/projects/digital-wallet",
  },
  {
    num: "07",
    meta: "Consumer brand · Positioning research",
    industry: "Consumer Product",
    title: "Liked, but never the default",
    desc: "Why a brand with strong awareness still wasn't being chosen, and how the research shifted strategy from perception repair to mental availability.",
    tags: ["Default preference", "Strategy & positioning", "Mental availability"],
    href: "/projects/brand-perception",
  },
  {
    num: "08",
    meta: "Consumer staple · Sensory research",
    industry: "Consumer Product",
    title: "The gap between winning trial and winning habit",
    desc: "How sensory research reframed product optimisation from chasing taste-test wins to protecting habitual repurchase.",
    tags: ["Habit formation", "Retention behaviour", "Default preference"],
    href: "/projects/sensory-preference",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | Industry>("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.industry === activeFilter);

  return (
    <Layout>
      <section className="container-page">
        <h1 className="h1">A sneak peek into some of the work I've done</h1>
        <p className="subtitle">
          Eight projects across enterprise SaaS, FinTech, consumer brands, and
          strategic research engagements.
        </p>

        <div className="filter-row" role="tablist" aria-label="Filter projects by industry">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={activeFilter === f}
              onClick={() => setActiveFilter(f)}
              className={`filter-pill${activeFilter === f ? " is-active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="project-index">
          {visibleProjects.length === 0 ? (
            <p className="capability-desc" style={{ padding: "1.5rem 0" }}>
              No projects under this industry yet.
            </p>
          ) : (
            visibleProjects.map((p) => (
              <Link key={p.num} to={p.href} className="project-index-item">
                <div className="project-index-meta">
                  Project {p.num} · {p.meta}
                </div>
                <div className="project-index-title">{p.title}</div>
                <div className="capability-desc">{p.desc}</div>
                <div className="project-index-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
