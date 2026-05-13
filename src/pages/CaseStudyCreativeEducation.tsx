import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const CaseStudyCreativeEducation = () => {
  return (
    <Layout>
      <article className="container-page">
        <Link to="/projects" className="back-link">
          <i className="ti ti-arrow-left" aria-hidden="true"></i>
          Selected work
        </Link>

        <div className="project-meta">Project 05 · Higher education · Strategy research</div>

        <h1 className="h1">Designing a creative school for two audiences at once</h1>

        <p className="subtitle">
          How generative research shaped a curriculum strategy that was globally credible and
          unmistakably Saudi.
        </p>

        <div className="tag-row">
          <span className="tag">Generative research</span>
          <span className="tag">Strategy &amp; positioning</span>
          <span className="tag">Segmentation</span>
        </div>

        <div className="tldr">
          <div className="tldr-label">TL;DR</div>
          <div className="tldr-grid">
            <div>
              <div className="tldr-item-label">Sector</div>
              <div className="tldr-item-value">Higher education, creative industries</div>
            </div>
            <div>
              <div className="tldr-item-label">Scope</div>
              <div className="tldr-item-value">Curriculum strategy across 6 creative domains</div>
            </div>
            <div>
              <div className="tldr-item-label">Method</div>
              <div className="tldr-item-value">
                Global expert interviews, Arabic-moderated qualitative, quantitative validation
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Scale</div>
              <div className="tldr-item-value">6 international markets, 500+ survey responses</div>
            </div>
          </div>
          <div className="tldr-shift">
            <div className="tldr-shift-label">Strategic shift</div>
            <div className="tldr-shift-value">
              Subject-led curriculum design → ecosystem-led talent strategy
            </div>
          </div>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The brief</div>
          <p>
            A pioneering creative education institute in Saudi Arabia had an ambitious brief and a
            real tension at the centre of it.
          </p>
          <p>
            Vision 2030 was opening up music, film, and creative media in ways the country hadn't
            seen before. Local relevance, Arabic cultural grounding, and Saudisation goals were
            non-negotiable. At the same time, every learner and industry expert we spoke to
            benchmarked credibility against international institutions in London, New York, and
            Mumbai.
          </p>
          <p>
            The leadership team needed a curriculum strategy that didn't force a choice between the
            two.
          </p>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The three lenses</div>
          <p style={{ marginBottom: "1.5rem" }}>
            We ran the research across three lenses simultaneously. The structure shifted the
            conversation away from <em>what subjects to teach</em> and toward{" "}
            <em>what kind of ecosystem this institution should become.</em>
          </p>

          <div className="framework-grid">
            <div className="framework-card purple">
              <div className="framework-card-label">Lens 01</div>
              <div className="framework-card-title">Policy &amp; culture</div>
              <div className="framework-card-desc">
                Vision 2030, Saudisation, Arabic grounding, social legitimacy
              </div>
            </div>
            <div className="framework-card teal">
              <div className="framework-card-label">Lens 02</div>
              <div className="framework-card-title">Global credibility</div>
              <div className="framework-card-desc">
                International standards, industry expectations, portfolio quality
              </div>
            </div>
            <div className="framework-card coral">
              <div className="framework-card-label">Lens 03</div>
              <div className="framework-card-title">Learner outcomes</div>
              <div className="framework-card-desc">
                Employability, career progression, skill relevance, industry readiness
              </div>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">Research coverage</div>

          <div className="coverage-card">
            <div className="coverage-card-header">
              <div className="coverage-card-title">Global expert interviews</div>
              <div className="coverage-card-meta">6 markets</div>
            </div>
            <div className="coverage-card-desc">
              Creative professionals with 10+ years across US, UK, UAE, India, Australia, Brazil
            </div>
          </div>

          <div className="coverage-card">
            <div className="coverage-card-header">
              <div className="coverage-card-title">Saudi student &amp; professional interviews</div>
              <div className="coverage-card-meta">Arabic-moderated</div>
            </div>
            <div className="coverage-card-desc">
              Career aspirations, family perceptions, creative identity, local barriers and
              opportunities
            </div>
          </div>

          <div className="coverage-card">
            <div className="coverage-card-header">
              <div className="coverage-card-title">Quantitative validation</div>
              <div className="coverage-card-meta">500+ responses</div>
            </div>
            <div className="coverage-card-desc">
              Theme prioritisation, validation constructs, strategic synthesis at scale
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What we found</div>

          <div className="insight">
            <div className="insight-lead">
              Creative careers still needed social legitimisation
            </div>
            <p className="insight-expand">
              Families and learners saw creative work as exciting but unstable. Positioning had to
              lead with employability and future opportunity, not artistic expression alone.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">
              Early-career and mid-career learners wanted different things
            </div>
            <p className="insight-expand">
              One group wanted exposure and exploration. The other wanted credibility and portfolio
              depth. A single curriculum couldn't serve both well.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Industry relevance outweighed academic completeness</div>
            <p className="insight-expand">
              Applied projects, real-world briefs, and portfolio outcomes mattered more to learners
              than theoretical coverage.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Future creatives needed hybrid capability</div>
            <p className="insight-expand">
              Creative work increasingly intersects with technology, entrepreneurship, leadership,
              and cultural communication.
            </p>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What we delivered</div>
          <ul className="checklist">
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>A curriculum blueprint across six creative domains</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Persona-based learning pathways for distinct learner segments</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Module-level strategic direction</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>A positioning framework that was globally structured, locally delivered</span>
            </li>
          </ul>
        </div>

        <div className="takeaway">
          <div className="takeaway-label">The takeaway</div>
          <p className="takeaway-quote">
            Education design is a systems alignment challenge. The hard part is rarely defining
            content. It is aligning policy, aspiration, culture, and market reality into something
            scalable.
          </p>
        </div>

        <div className="cta-row">
          <Link to="/projects/digital-wallet" className="btn-editorial">
            Next project
            <i className="ti ti-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/contact" className="btn-editorial">
            Get in touch
            <i className="ti ti-mail" aria-hidden="true"></i>
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default CaseStudyCreativeEducation;
