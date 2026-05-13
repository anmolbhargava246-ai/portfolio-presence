import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const Services = () => {
  return (
    <Layout>
      <section className="container-page">
        <h1 className="h1">How I work with teams</h1>

        <p className="subtitle">
          Behavioural research embedded inside product decisions. Three modes of partnership,
          depending on where you are in the build.
        </p>

        <div className="project-section">
          <div className="section-label">Trust &amp; safety research for AI products</div>
          <p className="capability-desc">
            How users calibrate trust, detect manipulation risks, and build appropriate reliance on
            AI-powered features. Useful when launching agentic flows, AI-mediated recommendations,
            or features where user confidence determines adoption.
          </p>
        </div>

        <div className="project-section">
          <div className="section-label">Foundational behavioural research</div>
          <p className="capability-desc">
            The cognitive drivers, biases, and mental models that shape how your users evaluate,
            choose, and commit. Useful at the start of a roadmap cycle, before features are scoped,
            or when growth has flattened and the reason isn't visible in analytics.
          </p>
        </div>

        <div className="project-section">
          <div className="section-label">Usability testing &amp; UX optimisation sprints</div>
          <p className="capability-desc">
            Rapid evaluative research to identify friction, validate flows, and deliver prioritised
            recommendations for the product team. Useful at pre-launch or post-launch, when you
            need to separate cosmetic friction from workflow risk.
          </p>
        </div>

        <div className="project-section">
          <div className="section-label">What you get</div>
          <ul className="checklist">
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Insights structured as problems and How-Might-We prompts, directly usable in design and roadmap conversations</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Verbatims, Loom clips, and quote-led synthesis so user voice shows up in stakeholder rooms</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Continuous stakeholder dialogue, not just a readout at the end</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Prioritisation framed by behavioural impact, not comment volume</span>
            </li>
          </ul>
        </div>

        <div className="cta-row" style={{ marginTop: "2.5rem" }}>
          <Link to="/projects" className="btn-editorial">
            See selected work
            <i className="ti ti-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/contact" className="btn-editorial">
            Start a conversation
            <i className="ti ti-mail" aria-hidden="true"></i>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
