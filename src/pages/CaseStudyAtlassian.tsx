import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const CaseStudyAtlassian = () => {
  return (
    <Layout>
      <article className="container-page">
        <Link to="/projects" className="back-link">
          <i className="ti ti-arrow-left" aria-hidden="true"></i>
          Selected work
        </Link>

        <div className="project-meta">Project 01 · Enterprise B2B SaaS · Usability research</div>

        <h1 className="h1">When ambiguous workflows put on-call engineers at risk</h1>

        <p className="subtitle">
          How evaluative research on a new mobile scheduling feature shipped design changes that
          lifted satisfaction by 15% and adoption by 10%.
        </p>

        <div className="tag-row">
          <span className="tag">Enterprise B2B SaaS</span>
          <span className="tag">Feature adoption</span>
          <span className="tag">Cross-functional partnership</span>
        </div>

        <div className="tldr">
          <div className="tldr-label">TL;DR</div>
          <div className="tldr-grid">
            <div>
              <div className="tldr-item-label">Company</div>
              <div className="tldr-item-value">Atlassian (enterprise ITSM, mobile)</div>
            </div>
            <div>
              <div className="tldr-item-label">Product</div>
              <div className="tldr-item-value">
                On-call scheduling for engineering managers and on-call engineers
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Method</div>
              <div className="tldr-item-value">
                Remote moderated usability, journey mapping, cognitive walkthroughs, SEQ analysis
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Sample</div>
              <div className="tldr-item-value">
                20 users globally (10 on-call engineers, 10 engineering managers)
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Partnered with</div>
              <div className="tldr-item-value">Design, product, engineering teams</div>
            </div>
            <div>
              <div className="tldr-item-label">Outcome</div>
              <div className="tldr-item-value">
                15% satisfaction lift, ~10% adoption lift, 4 design changes shipped, 2 roadmap
                features added
              </div>
            </div>
          </div>
          <div className="tldr-shift">
            <div className="tldr-shift-label">Strategic shift</div>
            <div className="tldr-shift-value">
              Feature validation → workflow risk reduction under real on-call conditions
            </div>
          </div>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The problem</div>
          <p>
            An engineering manager pages an on-call engineer at 2am because of a critical incident.
            The engineer needs to know, without confusion, whether they're actually on shift, what
            their override looks like, and what handover they're walking into. In an ITSM tool, the
            cost of an ambiguous interface isn't a bad experience. It's a missed page.
          </p>
          <p>That's the context this study sat inside.</p>
          <p>
            Atlassian's design team had released new on-call scheduling features in the mobile app.
            Functionally, the features worked. The question was whether the workflow held up under
            the real conditions on-call users operate in: distributed teams, varying terminology
            across regions, time-pressure scenarios, and high-stakes decisions made on a small
            screen.
          </p>
          <p>
            We ran the study with 20 participants globally using remote moderated usability testing.
            The analysis combined task success rates, SEQ ratings, cognitive walkthroughs, and pain
            point mapping, so we could separate cosmetic friction from workflow risk.
          </p>
        </div>

        <div className="project-section">
          <div className="section-label">What we found</div>

          <div className="insight">
            <div className="insight-lead">Terminology varied more across regions than expected</div>
            <p className="insight-expand">
              On-call scheduling, on-call shift, and roster meant the same thing to different users
              depending on geography. For a globally distributed engineering audience, this was a
              comprehension risk.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Customisation expectations surfaced strongly</div>
            <p className="insight-expand">
              Users wanted to associate visual cues like colour with specific people or shifts,
              mapping onto cognitive shortcuts they'd already built.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Some workflow steps were redundant in practice</div>
            <p className="insight-expand">
              Comfort changes during shifts didn't add enough value to justify the cognitive load
              they introduced.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Cultural variation showed up in SEQ data</div>
            <p className="insight-expand">
              Users from certain regions rated tasks consistently stricter, a methodological note
              for future global studies.
            </p>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What changed</div>
          <ul className="checklist">
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>4 major design changes shipped, simplifying navigation and interaction patterns</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>2 new features added to the product roadmap based on behavioural interviews</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Cultural and terminology variation built into scoping for future global usability work</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>15% lift in user satisfaction, ~10% lift in feature adoption post-launch</span>
            </li>
          </ul>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">How I worked with stakeholders</div>
          <p>
            I leaned on amplifying user voice through verbatims, Loom clips, and quote-led
            synthesis. Insights were structured as problems and How-Might-We prompts so they were
            directly usable in design and roadmap conversations. Stakeholder dialogue was continuous
            throughout the project, not just at the readout.
          </p>
        </div>

        <div className="takeaway">
          <div className="takeaway-label">The takeaway</div>
          <p className="takeaway-quote">
            In enterprise tools, the cost of ambiguity isn't measured in satisfaction scores. It's
            measured in the moments the workflow has to hold under pressure.
          </p>
        </div>

        <div className="cta-row">
          <Link to="/projects/personal-loans" className="btn-editorial">
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

export default CaseStudyAtlassian;
