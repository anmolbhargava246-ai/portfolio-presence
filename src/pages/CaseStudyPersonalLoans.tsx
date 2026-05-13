import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const CaseStudyPersonalLoans = () => {
  return (
    <Layout>
      <article className="container-page">
        <Link to="/projects" className="back-link">
          <i className="ti ti-arrow-left" aria-hidden="true"></i>
          Selected work
        </Link>

        <div className="project-meta">Project 02 · FinTech · Behavioural research</div>

        <h1 className="h1">When ambiguity costs more than interest rates</h1>

        <p className="subtitle">
          Why a technically seamless digital loan product still wasn't getting taken, and what
          changed when the team shifted from speed-first messaging to clarity-first trust-building.
        </p>

        <div className="tag-row">
          <span className="tag">Trust &amp; adoption</span>
          <span className="tag">Activation &amp; onboarding</span>
          <span className="tag">Behavioural friction</span>
        </div>

        <div className="tldr">
          <div className="tldr-label">TL;DR</div>
          <div className="tldr-grid">
            <div>
              <div className="tldr-item-label">Sector</div>
              <div className="tldr-item-value">FinTech, personal loans, India</div>
            </div>
            <div>
              <div className="tldr-item-label">Method</div>
              <div className="tldr-item-value">
                In-depth interviews, usability testing, JTBD, journey mapping, cognitive load
                analysis
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Sample</div>
              <div className="tldr-item-value">
                Loan users, drop-offs, and credit users who avoided loans across Tier 1–3 cities
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Partnered with</div>
              <div className="tldr-item-value">Product, design, marketing, risk</div>
            </div>
          </div>
          <div className="tldr-shift">
            <div className="tldr-shift-label">Strategic shift</div>
            <div className="tldr-shift-value">
              Speed-first messaging → clarity-first trust-building
            </div>
          </div>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The problem</div>
          <p>
            The product was, technically, seamless. The KYC worked. The disbursal worked. The
            approval times were genuinely fast. And yet adoption sat well below where the team had
            expected it to be.
          </p>
          <p>
            The instinct inside the room was that the product needed to be faster. The behavioural
            read suggested something else. Users weren't put off by speed. They were put off by not
            knowing what they were committing to.
          </p>
          <p>
            This wasn't a usability problem. It was an ambiguity problem dressed as one.
          </p>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The reframe</div>
          <p style={{ marginBottom: "1.5rem" }}>
            We reframed the loan journey as three behavioural questions users were asking
            themselves at each step, not three flows.
          </p>

          <div className="framework-grid">
            <div className="framework-card purple">
              <div className="framework-card-label">Layer 01</div>
              <div className="framework-card-title">Eligibility trust</div>
              <div className="framework-card-desc">
                Will I be judged or rejected before I even understand the terms?
              </div>
            </div>
            <div className="framework-card teal">
              <div className="framework-card-label">Layer 02</div>
              <div className="framework-card-title">Cost trust</div>
              <div className="framework-card-desc">
                Do I actually know what I'll pay back, and when?
              </div>
            </div>
            <div className="framework-card coral">
              <div className="framework-card-label">Layer 03</div>
              <div className="framework-card-title">Commitment trust</div>
              <div className="framework-card-desc">
                Can I back out if something changes, without consequence?
              </div>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What we found</div>

          <div className="insight">
            <div className="insight-lead">Users didn't distrust loans, they distrusted ambiguity</div>
            <p className="insight-expand">
              Hidden charges, unclear repayment terms, and vague language triggered more hesitation
              than the interest rate itself.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Speed mattered, but only after trust was established</div>
            <p className="insight-expand">
              Fast approval was attractive, but not at the cost of clarity or perceived risk. Speed
              read as pressure when trust hadn't been earned.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">High cognitive load amplified anxiety</div>
            <p className="insight-expand">
              Complex forms and dense information during KYC made users second-guess their decision
              mid-flow, even when they had originally intended to complete it.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Borrowing was emotional, not transactional</div>
            <p className="insight-expand">
              First-time borrowers relied heavily on family and peer validation before committing.
              The journey wasn't an individual decision; it was a social one.
            </p>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What changed</div>
          <ul className="checklist">
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Repayment language and fee terminology rewritten across key screens</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Total cost surfaced earlier so users could commit knowingly</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Reassurance cues and lender context added during high-anxiety steps</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Stakeholder narrative shifted from speed-first to clarity-first</span>
            </li>
          </ul>
        </div>

        <div className="takeaway">
          <div className="takeaway-label">The takeaway</div>
          <p className="takeaway-quote">
            Trust is not a UX problem. It is a product, brand, and organisational one, and
            behavioural trust issues require cross-functional solutions.
          </p>
        </div>

        <div className="cta-row">
          <Link to="/projects/airline-booking" className="btn-editorial">
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

export default CaseStudyPersonalLoans;
