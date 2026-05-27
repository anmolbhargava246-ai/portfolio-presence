import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="container-page">
        <div className="project-meta">ABOUT · AVAILABLE FOR PROJECTS</div>
        <h1 className="h1">About Anmol</h1>

        <div className="prose-text">
          <p>
            Curiosity about why people do what they do is what pulled me into
            research. A Master's in Applied Psychology turned that curiosity
            into a craft, and the psychology lens still shapes how I think
            about every project.
          </p>
          <p>
            My work spans enterprise B2B SaaS at Atlassian, FinTech research on
            contract at getCurious, and consumer research across industries at
            4SiGHT. The products and users vary, but the question I'm trying to
            answer rarely does: what's really driving this decision, and what
            does the product need to do about it?
          </p>
          <p>
            Behaviour is rarely what people say it is. The most useful research
            often sits a layer below the stated answer. I'm at my best when
            qualitative depth is paired with quantitative validation, and when
            findings live inside product decisions rather than next to them.
          </p>
          <p>
            I take on freelance projects with founders, small product and brand
            teams, and research agencies looking for a senior partner on a
            specific piece of work. Different problems, different shapes of
            study, same underlying approach.
          </p>
        </div>

        <div className="section-label" style={{ marginTop: "3rem" }}>
          Experience
        </div>
        <ul className="work-list">
          <li>
            <span className="work-role">UX Researcher, Atlassian</span>{" "}
            <span className="work-desc">
              — enterprise B2B SaaS, cross-functional product research
            </span>
          </li>
          <li>
            <span className="work-role">
              UX Researcher (contract), getCurious
            </span>{" "}
            <span className="work-desc">— FinTech app usability</span>
          </li>
          <li>
            <span className="work-role">Research Executive, 4SiGHT</span>{" "}
            <span className="work-desc">
              — consumer research across industries
            </span>
          </li>
          <li>
            <span className="work-role">Research Intern, Thinking Spree</span>{" "}
            <span className="work-desc">
              — mixed-methods social enterprise research
            </span>
          </li>
        </ul>

        <div className="section-label">Education</div>
        <ul className="work-list">
          <li>
            <span className="work-role">Master's in Applied Psychology</span>{" "}
            <span className="work-desc">— TISS Mumbai</span>
          </li>
          <li>
            <span className="work-role">Bachelor's in Psychology</span>{" "}
            <span className="work-desc">— Mumbai University</span>
          </li>
        </ul>

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

export default About;
