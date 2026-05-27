import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

type Mode = {
  num: string;
  title: string;
  what: string;
  whenUseful: string[];
};

const modes: Mode[] = [
  {
    num: "01",
    title: "Project-based research",
    what:
      "A piece of research scoped around a question your team needs answered. I work with you to figure out what kind of study fits, run the research, and ship findings you can act on without translation.",
    whenUseful: [
      "Customer discovery for new products or features",
      "Usability testing or pre-launch validation",
      "Concept testing before committing to build",
      "Behavioural deep-dives when something isn't working and the reason isn't obvious",
    ],
  },
  {
    num: "02",
    title: "Agency partnership",
    what:
      "I work as part of your team for a defined module, bringing senior research capability without the headcount commitment. I can run fieldwork, lead synthesis, or own a workstream end-to-end depending on what you need.",
    whenUseful: [
      "Fieldwork in markets your team doesn't cover",
      "Specialist research in FinTech, B2B SaaS, aviation, or consumer behaviour",
      "Senior synthesis and reporting",
      "Client-facing readouts when your bandwidth is full",
    ],
  },
  {
    num: "03",
    title: "Advisory and retainer",
    what:
      "Ongoing research thinking for teams that don't have a researcher in-house, or want senior partnership on top of their existing team. I work alongside you across the month, running smaller studies as questions surface and helping shape what to look at next.",
    whenUseful: [
      "Ongoing research support without a full-time hire",
      "Periodic studies across a roadmap or product cycle",
      "Senior review and strategy alongside an existing in-house team",
      "Founder-level partnership when research instincts are needed in the room",
    ],
  },
];

const workOn = [
  "When you have a product, feature, or campaign that isn't performing the way it should, and you need to understand the behavioural reasons why",
  "When you're building something new and need discovery research to ground it in how people actually behave",
  "When you have a concept, design, or prototype and need to test it with real users before committing to build",
  "When you're working on AI or emerging tech and need to understand how trust, adoption, and habit are forming around it",
];

const engagementIncludes = [
  "A research brief I send you before kickoff so you know exactly what to expect and what you're paying for",
  "Real research, not surveys dressed up as insight: interviews, observation, usability testing, mixed-methods where it adds value",
  "A readout you can use directly in your team's decisions, not a 60-slide deck nobody opens",
  "Verbatim clips and quotes that bring user voice into your team's conversations after the engagement ends",
  "One round of follow-up after delivery if implementation questions come up",
];

const howItWorks = [
  {
    num: "01",
    title: "Intro call",
    description:
      "We talk about the problem, your team, and whether I'm the right partner. No commitment, just figuring out if there's a fit.",
  },
  {
    num: "02",
    title: "Scope and proposal",
    description:
      "I send a one-page proposal with the method, sample, timeline, deliverables, and cost. You decide.",
  },
  {
    num: "03",
    title: "The work",
    description:
      "I run the research, partnering with you and your team throughout, not just at the readout. Weekly check-ins as standard, more if useful.",
  },
  {
    num: "04",
    title: "Decision support",
    description:
      "I stay available for follow-up questions for two weeks after delivery so the work keeps living inside your decisions.",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="container-page">
        {/* HERO */}
        <div className="project-meta">SERVICES · WAYS TO WORK</div>
        <h1 className="h1">How I work</h1>
        <p className="subtitle">
          I take on freelance research projects for founders, small product and
          brand teams, and research agencies looking for a senior partner on a
          specific piece of work. Engagements are sized to fit where you are,
          not the other way around.
        </p>

        {/* THREE ENGAGEMENT MODES */}
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          {modes.map((m) => (
            <div key={m.num} className="service-row">
              <div className="service-num">{m.num}</div>
              <div>
                <h2 className="service-title">{m.title}</h2>
                <p className="service-method">{m.what}</p>
                <div className="service-when">
                  <span className="service-when-label">When it's useful</span>
                  <ul className="service-when-list">
                    {m.whenUseful.map((u) => (
                      <li key={u}>{u}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WHAT I WORK ON */}
        <div className="project-meta" style={{ marginTop: "4rem" }}>
          WHAT I WORK ON
        </div>
        <h2 className="h2">Problems people bring to me</h2>
        <p className="subtitle">
          The work spans different shapes of problem. Some clients arrive with
          a question. Others arrive with a feeling that something isn't right.
        </p>
        <ul className="checklist">
          {workOn.map((item) => (
            <li key={item}>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* WHAT YOU GET */}
        <div className="project-meta" style={{ marginTop: "4rem" }}>
          WHAT YOU GET
        </div>
        <h2 className="h2">What every engagement includes</h2>
        <ul className="checklist">
          {engagementIncludes.map((item) => (
            <li key={item}>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* HOW IT WORKS */}
        <div className="project-meta" style={{ marginTop: "4rem" }}>
          HOW IT WORKS
        </div>
        <h2 className="h2">Working together</h2>
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          {howItWorks.map((step) => (
            <div key={step.num} className="service-row">
              <div className="service-num">{step.num}</div>
              <div>
                <h3 className="service-title">{step.title}</h3>
                <p className="service-method" style={{ marginBottom: 0 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="project-meta" style={{ marginTop: "4rem" }}>
          START A CONVERSATION
        </div>
        <h2 className="h2">Have a problem worth digging into?</h2>
        <p className="subtitle">
          I take on a small number of engagements at a time. Feel free to reach
          out over email or LinkedIn with what you're working on and we'll take
          it from there.
        </p>

        <div className="cta-row" style={{ marginTop: "1.5rem" }}>
          <Link to="/contact" className="btn-editorial">
            Start a conversation
            <i className="ti ti-mail" aria-hidden="true"></i>
          </Link>
          <Link to="/projects" className="btn-editorial">
            See selected work
            <i className="ti ti-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
