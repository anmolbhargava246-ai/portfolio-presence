import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const CaseStudyDigitalWallet = () => {
  return (
    <Layout>
      <article className="container-page">
        <Link to="/projects" className="back-link">
          <i className="ti ti-arrow-left" aria-hidden="true"></i>
          Selected work
        </Link>

        <div className="project-meta">Project 06 · FinTech · Pre-launch research</div>

        <h1 className="h1">Finding the trust gaps before launch did</h1>

        <p className="subtitle">
          Pre-launch behavioural research that re-prioritised a wallet's launch readiness by
          adoption risk, not interface severity.
        </p>

        <div className="tag-row">
          <span className="tag">Pre-launch risk</span>
          <span className="tag">Activation &amp; onboarding</span>
          <span className="tag">Behavioural usability</span>
        </div>

        <div className="tldr">
          <div className="tldr-label">TL;DR</div>
          <div className="tldr-grid">
            <div>
              <div className="tldr-item-label">Sector</div>
              <div className="tldr-item-value">FinTech, digital wallet, Saudi Arabia</div>
            </div>
            <div>
              <div className="tldr-item-label">Scope</div>
              <div className="tldr-item-value">
                Activation, transfers, payments, post-transaction confirmation
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Method</div>
              <div className="tldr-item-value">
                Moderated usability, journey-based friction mapping, behavioural prioritisation
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Lenses</div>
              <div className="tldr-item-value">
                Entry trust, transaction trust, feedback trust
              </div>
            </div>
          </div>
          <div className="tldr-shift">
            <div className="tldr-shift-label">Strategic shift</div>
            <div className="tldr-shift-value">
              "Does it work?" → "Where does certainty collapse?"
            </div>
          </div>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The problem</div>
          <p>
            The product was feature-complete and approaching launch. One risk remained unresolved:
            whether users would feel confident enough to activate, transact, and return.
          </p>
          <p>
            In fintech, usability isn't about preference. It's about whether someone trusts the
            interface enough to move real money through it. Hesitation at sign-up, first
            transaction, or post-transfer confirmation compounds into abandonment quickly.
          </p>
          <p>
            The product team had strong assumptions about feature value. What was missing was a
            behavioural read on where certainty collapses under financial stakes.
          </p>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The reframe</div>
          <p style={{ marginBottom: "1.5rem" }}>
            Rather than treat the wallet as a single experience to evaluate, we decomposed it into
            three behavioural systems, each a distinct layer of trust users build sequentially.
          </p>

          <div className="framework-grid">
            <div className="framework-card purple">
              <div className="framework-card-label">Layer 01</div>
              <div className="framework-card-title">Entry trust</div>
              <div className="framework-card-desc">Do I feel safe signing up?</div>
            </div>
            <div className="framework-card teal">
              <div className="framework-card-label">Layer 02</div>
              <div className="framework-card-title">Transaction trust</div>
              <div className="framework-card-desc">Do I feel in control sending money?</div>
            </div>
            <div className="framework-card coral">
              <div className="framework-card-label">Layer 03</div>
              <div className="framework-card-title">Feedback trust</div>
              <div className="framework-card-desc">Do I know what happened?</div>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What we found</div>

          <div className="insight">
            <div className="insight-lead">KYC felt intrusive, not protective</div>
            <p className="insight-expand">
              Multi-layer authentication was read as redundant friction, not visible protection.
              Effort was high; reassurance was missing.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Key actions were visually buried</div>
            <p className="insight-expand">
              Under cognitive load, users scanned for action affordances and missed them. Time to
              first transaction stretched without a structural reason.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Feedback gaps eroded transaction trust silently</div>
            <p className="insight-expand">
              Users didn't always know whether money had arrived. The uncertainty showed up later as
              repeat balance checks, not in the moment as a complaint.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Mental model failures concentrated at the start</div>
            <p className="insight-expand">
              Users couldn't form a clean model of multi-layer auth on first encounter. The product
              had explained itself, but not in the order users needed it to.
            </p>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What changed</div>
          <ul className="checklist">
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Trust signalling brought forward into the first activation screens</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Security steps reframed from redundant friction to visible protection</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Homepage hierarchy restructured to match scanning behaviour under cognitive load</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Feedback loops scaffolded across transaction completion and confirmation</span>
            </li>
          </ul>
        </div>

        <div className="takeaway">
          <div className="takeaway-label">The takeaway</div>
          <p className="takeaway-quote">
            In high-trust products, the role of research isn't to validate the interface. It is to
            find where certainty collapses, and to make that actionable before the cost of discovery
            shifts from a research session to lost users at scale.
          </p>
        </div>

        <div className="cta-row">
          <Link to="/projects/brand-perception" className="btn-editorial">
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

export default CaseStudyDigitalWallet;
