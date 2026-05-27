import { Layout } from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="container-page">
        <div className="project-meta">CONTACT · AVAILABLE FOR PROJECTS</div>
        <h1 className="h1">Have a problem worth digging into?</h1>

        <p className="subtitle">
          I take on a small number of engagements at a time. Feel free to reach
          out over email or LinkedIn with what you're working on, what you've
          tried, and your rough timeline, and we'll take it from there.
        </p>

        <ul className="contact-list">
          <li>
            <i className="ti ti-mail" aria-hidden="true"></i>
            <a href="mailto:anmol.bhargava246@gmail.com">
              anmol.bhargava246@gmail.com
            </a>
          </li>
          <li>
            <i className="ti ti-brand-linkedin" aria-hidden="true"></i>
            <a
              href="https://www.linkedin.com/in/anmolbhargava4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/anmolbhargava4
            </a>
          </li>
          <li>
            <i className="ti ti-map-pin" aria-hidden="true"></i>
            <span>Bangalore, India</span>
          </li>
        </ul>

        <div className="section-label" style={{ marginTop: "3rem" }}>
          Available for
        </div>
        <ul className="work-list">
          <li>Project-based research with founders and small teams</li>
          <li>Agency partnership on fieldwork, synthesis, or full workstreams</li>
          <li>Advisory and retainer support for teams without a researcher</li>
        </ul>
      </section>
    </Layout>
  );
};

export default Contact;
