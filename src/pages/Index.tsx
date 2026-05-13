import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="container-page hero">
        <div className="hero-name">Anmol Bhargava</div>
        <div className="hero-role">UX Researcher</div>

        <p className="hero-tagline">
          Behavioural research for the moments where users hesitate, abandon, or quietly disengage.
        </p>

        <p className="hero-intro">
          I'm a UX researcher with three years of experience across enterprise B2B SaaS (Atlassian),
          FinTech, and high-stakes consumer contexts. I work on trust, adoption, and habit, which is
          to say, the layers underneath retention and growth. My work has shaped pre-launch roadmaps,
          shipped design changes, and informed multi-million-dollar investment decisions across both
          product teams and strategic engagements.
        </p>

        <div className="section-label">What I bring</div>

        <div className="capability-block">
          <div className="capability-title">Behavioural framing</div>
          <div className="capability-desc">
            I find the reframe behind a misdiagnosed brief. Most product problems show up as
            usability issues but live deeper, in trust, default behaviour, or the gap between trial
            and habit.
          </div>
        </div>

        <div className="capability-block">
          <div className="capability-title">Cross-functional partnership</div>
          <div className="capability-desc">
            I work alongside design, product, engineering, and marketing teams. Insights become
            tangible through verbatims, Loom clips, and How-Might-We prompts, so research lives
            inside decisions rather than next to them.
          </div>
        </div>

        <div className="capability-block">
          <div className="capability-title">Mixed-methods range</div>
          <div className="capability-desc">
            Qualitative depth paired with quantitative validation. Comfortable across moderated
            usability testing, in-depth interviews, JTBD, journey mapping, concept testing, and
            survey work at scale.
          </div>
        </div>

        <div style={{ marginTop: "3rem" }} className="cta-row">
          <Link to="/projects" className="btn-editorial">
            See selected work
            <i className="ti ti-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/contact" className="btn-editorial">
            Get in touch
            <i className="ti ti-mail" aria-hidden="true"></i>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
