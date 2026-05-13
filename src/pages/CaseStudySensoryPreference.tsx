import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const CaseStudySensoryPreference = () => {
  return (
    <Layout>
      <article className="container-page">
        <Link to="/projects" className="back-link">
          <i className="ti ti-arrow-left" aria-hidden="true"></i>
          Selected work
        </Link>

        <div className="project-meta">Project 08 · Consumer staple · Sensory research</div>

        <h1 className="h1">The gap between winning trial and winning habit</h1>

        <p className="subtitle">
          How sensory research reframed product optimisation from chasing taste-test wins to
          protecting habitual repurchase.
        </p>

        <div className="tag-row">
          <span className="tag">Habit formation</span>
          <span className="tag">Retention behaviour</span>
          <span className="tag">Default preference</span>
        </div>

        <div className="tldr">
          <div className="tldr-label">TL;DR</div>
          <div className="tldr-grid">
            <div>
              <div className="tldr-item-label">Sector</div>
              <div className="tldr-item-value">Dairy category, Saudi Arabia</div>
            </div>
            <div>
              <div className="tldr-item-label">Scope</div>
              <div className="tldr-item-value">
                Sensory drivers of habit and trust across recipe variants
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Method</div>
              <div className="tldr-item-value">
                Mini-groups, blind taste testing, competitor benchmarking, sensory-to-behaviour
                mapping
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Sample</div>
              <div className="tldr-item-value">
                Heavy category users (3x+ weekly), Riyadh and Jeddah, brand loyalists + competitor
                users
              </div>
            </div>
          </div>
          <div className="tldr-shift">
            <div className="tldr-shift-label">Strategic shift</div>
            <div className="tldr-shift-value">
              Flavour optimisation → habit protection
            </div>
          </div>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The problem</div>
          <p>
            In high-frequency, low-deliberation categories, preference is rarely conscious.
            Consumers reach for the same product week after week until something breaks the habit.
          </p>
          <p>
            The brand team treated this as a product optimisation challenge: adjust sourness,
            improve texture, benchmark against competitors. But the real risk was deeper. Laban is
            not chosen on taste alone. It carries emotional weight: tradition, comfort,
            authenticity. The danger wasn't losing a blind test. It was losing trust in ways that
            wouldn't surface until purchase shifted.
          </p>
          <p>
            The real question was: what sensory and emotional cues create default preference, and
            what would quietly erode it?
          </p>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The reframe</div>
          <p style={{ marginBottom: "1.5rem" }}>
            We separated the goals that look identical in a brief but pull product decisions in
            opposite directions.
          </p>

          <div className="framework-grid">
            <div className="framework-card purple">
              <div className="framework-card-label">Goal 01</div>
              <div className="framework-card-title">Win trial</div>
              <div className="framework-card-desc">
                A standout first sip. Optimised for the moment of comparison.
              </div>
            </div>
            <div className="framework-card teal">
              <div className="framework-card-label">Goal 02</div>
              <div className="framework-card-title">Win habit</div>
              <div className="framework-card-desc">
                A balanced finish that pulls consumers back without conscious choice.
              </div>
            </div>
            <div className="framework-card coral">
              <div className="framework-card-label">Goal 03</div>
              <div className="framework-card-title">Protect trust</div>
              <div className="framework-card-desc">
                Texture and visual consistency that read as "real" before tasting begins.
              </div>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What we found</div>

          <div className="insight">
            <div className="insight-lead">Authenticity is a sensory judgement, not a marketing claim</div>
            <p className="insight-expand">
              Consumers assessed "real laban" through texture, weight, and aftertaste, not packaging
              or heritage messaging. Authenticity had to be felt, not told.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Texture operates as a trust signal</div>
            <p className="insight-expand">
              Thickness and smoothness predicted preference. Watery or inconsistent texture
              triggered doubt before conscious evaluation began.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Aftertaste drives repurchase, not trial</div>
            <p className="insight-expand">
              The strongest recipes weren't the most intense on first sip. They left a balanced
              finish that made consumers want another. This is where habit forms.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Habitual preference resists conscious comparison</div>
            <p className="insight-expand">
              Heavy users rarely evaluated alternatives actively. Their default was set by
              accumulated experience, not deliberate choice. Winning trial and winning habit require
              different strategies.
            </p>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What changed</div>
          <ul className="checklist">
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Texture and aftertaste protected as habit-defining attributes; sourness treated as an adjustable lever</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Authenticity repositioned from heritage messaging to sensory credibility</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Competitive strategy separated trial-focused tactics from habit-protection priorities</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Quality control priorities updated to reduce trust-breaking inconsistency</span>
            </li>
          </ul>
        </div>

        <div className="takeaway">
          <div className="takeaway-label">The takeaway</div>
          <p className="takeaway-quote">
            Good sensory research makes invisible defaults measurable, and protects the trust that
            keeps consumers reaching for the same product without thinking.
          </p>
        </div>

        <div className="cta-row">
          <Link to="/projects/atlassian" className="btn-editorial">
            Back to start
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

export default CaseStudySensoryPreference;
