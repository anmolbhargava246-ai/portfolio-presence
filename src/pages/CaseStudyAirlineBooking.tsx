import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const CaseStudyAirlineBooking = () => {
  return (
    <Layout>
      <article className="container-page">
        <Link to="/projects" className="back-link">
          <i className="ti ti-arrow-left" aria-hidden="true"></i>
          Selected work
        </Link>

        <div className="project-meta">Project 03 · Aviation · Behavioural UX</div>

        <h1 className="h1">Trust, dressed up as a usability problem</h1>

        <p className="subtitle">
          How a behavioural reframe shifted an airline from speed-first optimisation to
          confidence-first experience strategy.
        </p>

        <div className="tag-row">
          <span className="tag">Trust &amp; adoption</span>
          <span className="tag">Conversion friction</span>
          <span className="tag">Retention behaviour</span>
        </div>

        <div className="tldr">
          <div className="tldr-label">TL;DR</div>
          <div className="tldr-grid">
            <div>
              <div className="tldr-item-label">Sector</div>
              <div className="tldr-item-value">Aviation, high-stakes e-commerce</div>
            </div>
            <div>
              <div className="tldr-item-label">Scope</div>
              <div className="tldr-item-value">
                End-to-end booking, checkout, loyalty, post-booking
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Method</div>
              <div className="tldr-item-value">
                Behavioural usability, friction mapping, loyalty analysis
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Cohorts</div>
              <div className="tldr-item-value">
                4 user types across travel frequency and price sensitivity
              </div>
            </div>
          </div>
          <div className="tldr-shift">
            <div className="tldr-shift-label">Strategic shift</div>
            <div className="tldr-shift-value">
              Speed-first optimisation → confidence-first experience strategy
            </div>
          </div>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The problem</div>
          <p>
            An airline came to us with a familiar problem wearing an unfamiliar mask. Bookings were
            dropping off mid-flow. Loyalty sign-ups were flat. Repeat travellers kept coming back,
            then kept choosing not to commit.
          </p>
          <p>
            The instinct in most rooms is to call this a UX problem. Tighten the funnel. Reduce the
            clicks. Make the buttons bigger.
          </p>
          <p>
            We pushed back. What we were actually looking at was a <em>trust</em> problem dressed as
            a usability one.
          </p>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The reframe</div>
          <p style={{ marginBottom: "1.5rem" }}>
            We reframed the entire booking journey as three sequential behavioural systems instead
            of one linear flow. Each layer had to hold before the next one could be earned.
          </p>

          <div className="framework-grid">
            <div className="framework-card purple">
              <div className="framework-card-label">Layer 01</div>
              <div className="framework-card-title">Decision trust</div>
              <div className="framework-card-desc">Can users confidently commit to a purchase?</div>
            </div>
            <div className="framework-card teal">
              <div className="framework-card-label">Layer 02</div>
              <div className="framework-card-title">Transaction trust</div>
              <div className="framework-card-desc">Can users pay without uncertainty escalating?</div>
            </div>
            <div className="framework-card coral">
              <div className="framework-card-label">Layer 03</div>
              <div className="framework-card-title">Retention trust</div>
              <div className="framework-card-desc">
                Does the ecosystem feel worth committing to long term?
              </div>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What we found</div>

          <div className="insight">
            <div className="insight-lead">Pricing ambiguity did more damage than high prices</div>
            <p className="insight-expand">
              Users read hidden fees as dishonesty, even when fares were genuinely competitive.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Urgency cues amplified anxiety, not conversion</div>
            <p className="insight-expand">
              Countdown timers designed to drive purchase were quietly increasing cognitive stress
              during an already high-stakes decision.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Loyalty wasn't rejected, it was invisible</div>
            <p className="insight-expand">
              Users didn't dismiss the program. They couldn't see its value at the moments it could
              have mattered most.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">
              Hesitation looked like friction, but it was missing reassurance
            </div>
            <p className="insight-expand">
              Users weren't stuck in the flow. They were unsure within it.
            </p>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What changed</div>
          <ul className="checklist">
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Total cost surfaced earlier in the journey, with fee structures made legible upfront</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Artificial urgency stripped out, time-sensitive messaging reframed honestly</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Loyalty value integrated into comparison and checkout moments</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Continuity rebuilt across booking, manage-booking, and check-in</span>
            </li>
          </ul>
        </div>

        <div className="takeaway">
          <div className="takeaway-label">The takeaway</div>
          <p className="takeaway-quote">
            Loyalty is rarely a feature users opt into independently. It is a byproduct of trust,
            earned consistently across the ecosystem.
          </p>
        </div>

        <div className="cta-row">
          <Link to="/projects/urban-planning" className="btn-editorial">
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

export default CaseStudyAirlineBooking;
