import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const CaseStudyBrandPerception = () => {
  return (
    <Layout>
      <article className="container-page">
        <Link to="/projects" className="back-link">
          <i className="ti ti-arrow-left" aria-hidden="true"></i>
          Selected work
        </Link>

        <div className="project-meta">Project 07 · Consumer brand · Positioning research</div>

        <h1 className="h1">Liked, but never the default</h1>

        <p className="subtitle">
          Why a brand with strong awareness still wasn't being chosen, and how the research shifted
          strategy from perception repair to mental availability.
        </p>

        <div className="tag-row">
          <span className="tag">Default preference</span>
          <span className="tag">Strategy &amp; positioning</span>
          <span className="tag">Mental availability</span>
        </div>

        <div className="tldr">
          <div className="tldr-label">TL;DR</div>
          <div className="tldr-grid">
            <div>
              <div className="tldr-item-label">Sector</div>
              <div className="tldr-item-value">QSR category, UAE</div>
            </div>
            <div>
              <div className="tldr-item-label">Scope</div>
              <div className="tldr-item-value">
                Brand positioning across group, comfort, and celebration contexts
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Method</div>
              <div className="tldr-item-value">
                Focus groups with digital pre-tasks, association mapping, 500+ survey responses
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Sample</div>
              <div className="tldr-item-value">
                Loyalists, competitor-primary users, Dubai and Sharjah, local + expat
              </div>
            </div>
          </div>
          <div className="tldr-shift">
            <div className="tldr-shift-label">Strategic shift</div>
            <div className="tldr-shift-value">Perception repair → mental availability investment</div>
          </div>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The problem</div>
          <p>
            The brand had strong awareness but weak habitual preference. In a category driven by
            emotional defaults, comfort, nostalgia, group safety, awareness alone wasn't converting
            to first-choice status.
          </p>
          <p>
            Leadership assumed the gap was about product perception. The real issue was
            behavioural. Competitors had become the automatic choice for gatherings, celebrations,
            and comfort moments. The client wasn't being rejected. They were being forgotten before
            the decision was made.
          </p>
          <p>
            This wasn't a positioning problem. It was a mental availability problem in high-stakes
            social contexts.
          </p>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The reframe</div>
          <p style={{ marginBottom: "1.5rem" }}>
            We mapped preference as three different decision contexts, each with its own default
            logic, rather than a single brand preference score.
          </p>

          <div className="framework-grid">
            <div className="framework-card purple">
              <div className="framework-card-label">Context 01</div>
              <div className="framework-card-title">Group decisions</div>
              <div className="framework-card-desc">
                Where social safety wins, and "safe" brands require no explanation
              </div>
            </div>
            <div className="framework-card teal">
              <div className="framework-card-label">Context 02</div>
              <div className="framework-card-title">Comfort moments</div>
              <div className="framework-card-desc">
                Where nostalgia and reliability quietly carry the choice
              </div>
            </div>
            <div className="framework-card coral">
              <div className="framework-card-label">Context 03</div>
              <div className="framework-card-title">Celebrations</div>
              <div className="framework-card-desc">
                Where cultural fit and shared meaning shape who gets ordered
              </div>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What we found</div>

          <div className="insight">
            <div className="insight-lead">Category choice is driven by social risk, not taste preference</div>
            <p className="insight-expand">
              In group contexts, people default to brands that require no explanation. The client
              was seen as a personal choice, not a group-safe choice.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Competitors owned nostalgia. The client owned lightness and value</div>
            <p className="insight-expand">
              Association mapping showed clean territory separation. Competing on nostalgia would
              take years; leading on modernity and affordability was immediately credible.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Regional origin increased affinity, but only when made explicit</div>
            <p className="insight-expand">
              Participants who knew the brand's local roots showed higher warmth and trust. Most
              didn't know. The asset was sitting unused.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">The barrier wasn't rejection. It was absence from consideration</div>
            <p className="insight-expand">
              Competitor-primary users mostly had neutral or positive perceptions. They simply
              didn't think of the brand at the decision moment.
            </p>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What changed</div>
          <ul className="checklist">
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Positioning clarified which emotional territories to own vs cede to competitors</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Salience-building prioritised for group decision moments</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Cultural origin surfaced as a brand asset in communications</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Brief reframed from "improve perception" to "become the obvious choice in moments that matter"</span>
            </li>
          </ul>
        </div>

        <div className="takeaway">
          <div className="takeaway-label">The takeaway</div>
          <p className="takeaway-quote">
            Preference is behavioural, shaped by context, social risk, and mental shortcuts, not
            just perception scores. The brand was liked. It just wasn't the default.
          </p>
        </div>

        <div className="cta-row">
          <Link to="/projects/sensory-preference" className="btn-editorial">
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

export default CaseStudyBrandPerception;
