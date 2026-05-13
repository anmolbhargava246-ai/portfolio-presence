import { Layout } from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="container-page">
        <h1 className="h1">About</h1>

        <div className="prose-text">
          <p>
            I'm a UX researcher with a Master's in Applied Psychology, driven by a curiosity to
            decode human behaviour and translate it into product, design, and business decisions.
          </p>

          <p>
            My experience spans enterprise B2B SaaS at Atlassian, FinTech research on contract at
            getCurious, and consumer research across industries at 4SiGHT. I came into UX research
            from psychology, and that lens still shapes how I work. Behaviour is rarely what people
            say it is, and research is at its most useful when it reveals what's actually driving
            the decisions inside the data.
          </p>

          <p>
            I work most effectively when qualitative depth is paired with quantitative validation,
            and when research lives inside product decisions rather than next to them. My current
            focus is B2B SaaS, where behavioural questions around trust, activation, and retention
            sit at the centre of product growth.
          </p>
        </div>

        <div className="section-label" style={{ marginTop: "3rem" }}>
          Experience
        </div>

        <ul className="work-list">
          <li>
            <span className="work-role">UX Researcher, Atlassian</span>{" "}
            <span className="work-desc">— enterprise B2B SaaS, cross-functional product research</span>
          </li>
          <li>
            <span className="work-role">UX Researcher (contract), getCurious</span>{" "}
            <span className="work-desc">— FinTech app usability</span>
          </li>
          <li>
            <span className="work-role">Research Executive, 4SiGHT</span>{" "}
            <span className="work-desc">— consumer research across industries</span>
          </li>
          <li>
            <span className="work-role">Research Intern, Thinking Spree</span>{" "}
            <span className="work-desc">— mixed-methods social enterprise research</span>
          </li>
        </ul>

        <div className="section-label">How I work with teams</div>

        <div className="capability-block">
          <div className="capability-title">With design</div>
          <div className="capability-desc">
            I involve design teams from the start, immersing them in user POV so they don't just see
            user experiences, they internalise them.
          </div>
        </div>

        <div className="capability-block">
          <div className="capability-title">With product</div>
          <div className="capability-desc">
            I focus on impact, translating user voice into business context that product teams can
            act on.
          </div>
        </div>

        <div className="capability-block">
          <div className="capability-title">With marketing</div>
          <div className="capability-desc">
            I tell the story rather than handing over a deck. Personas, delights, and pain points
            framed as a narrative that influences decisions.
          </div>
        </div>

        <div className="section-label" style={{ marginTop: "3rem" }}>
          Education
        </div>

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
      </section>
    </Layout>
  );
};

export default About;
