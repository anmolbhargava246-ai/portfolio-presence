import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const CaseStudyUrbanPlanning = () => {
  return (
    <Layout>
      <article className="container-page">
        <Link to="/projects" className="back-link">
          <i className="ti ti-arrow-left" aria-hidden="true"></i>
          Selected work
        </Link>

        <div className="project-meta">Project 04 · Real estate · Mixed-methods research</div>

        <h1 className="h1">People adopt routines, not landmarks</h1>

        <p className="subtitle">
          How mixed-methods research reframed a high-investment urban development from feature-led
          design to behaviour-led adoption planning.
        </p>

        <div className="tag-row">
          <span className="tag">Adoption at scale</span>
          <span className="tag">Segmentation</span>
          <span className="tag">Concept testing</span>
        </div>

        <div className="tldr">
          <div className="tldr-label">TL;DR</div>
          <div className="tldr-grid">
            <div>
              <div className="tldr-item-label">Sector</div>
              <div className="tldr-item-value">Real estate, mixed-use urban development</div>
            </div>
            <div>
              <div className="tldr-item-label">Scope</div>
              <div className="tldr-item-value">
                Lifestyle, amenity preferences, and adoption behaviour for a community hub in Jeddah
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Method</div>
              <div className="tldr-item-value">
                Digital activity-based groups, focus groups, concept testing, 500+ survey responses
              </div>
            </div>
            <div>
              <div className="tldr-item-label">Cohorts</div>
              <div className="tldr-item-value">
                Young professionals, families, mixed-age residents of Jeddah
              </div>
            </div>
          </div>
          <div className="tldr-shift">
            <div className="tldr-shift-label">Strategic shift</div>
            <div className="tldr-shift-value">
              Feature-led concept design → behaviour-led adoption planning
            </div>
          </div>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The problem</div>
          <p>
            The client was planning a high-investment, mixed-use community hub in Jeddah, combining
            public spaces, F&amp;B, entertainment, offices, and residential areas. The risk wasn't
            construction feasibility. It was building a space that residents would actually adopt,
            return to, and integrate into their daily lives.
          </p>
          <p>
            Get this wrong and you don't get bad reviews. You get a development people pass through
            rather than belong to.
          </p>
          <p>
            This wasn't a design challenge. It was a behavioural adoption challenge at city scale.
          </p>
        </div>

        <div className="project-section prose-text">
          <div className="section-label">The reframe</div>
          <p style={{ marginBottom: "1.5rem" }}>
            We structured the research around three behavioural pressures the hub would have to win
            against, not three demographics or three amenities.
          </p>

          <div className="framework-grid">
            <div className="framework-card purple">
              <div className="framework-card-label">Layer 01</div>
              <div className="framework-card-title">Daily routine</div>
              <div className="framework-card-desc">
                Does this fit into how I already move through my week?
              </div>
            </div>
            <div className="framework-card teal">
              <div className="framework-card-label">Layer 02</div>
              <div className="framework-card-title">Social default</div>
              <div className="framework-card-desc">
                Is this the easy first suggestion when friends or family meet up?
              </div>
            </div>
            <div className="framework-card coral">
              <div className="framework-card-label">Layer 03</div>
              <div className="framework-card-title">Belonging</div>
              <div className="framework-card-desc">
                Is this somewhere I would return to without a specific reason?
              </div>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What we found</div>

          <div className="insight">
            <div className="insight-lead">Accessibility mattered more than novelty</div>
            <p className="insight-expand">
              Residents prioritised ease of access and proximity over flagship attractions.
              Walkability and convenience predicted return behaviour better than spectacle.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Green space and F&amp;B were infrastructure, not add-ons</div>
            <p className="insight-expand">
              Outdoor zones and casual dining anchors were how residents imagined spending time. The
              flagship attractions were how they imagined visiting once.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Different segments wanted fundamentally different experiences</div>
            <p className="insight-expand">
              Families wanted safety and open space. Young professionals wanted social experiences
              and food. One layout couldn't quietly serve both.
            </p>
          </div>

          <div className="insight">
            <div className="insight-lead">Concept legibility shaped intent</div>
            <p className="insight-expand">
              When residents could clearly imagine what the space would be, engagement intent
              jumped. When they couldn't, even strong features didn't land.
            </p>
          </div>
        </div>

        <div className="project-section">
          <div className="section-label">What changed</div>
          <ul className="checklist">
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Master planning prioritised proximity, walkability, and everyday convenience over landmark features</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Hub design increased emphasis on outdoor social zones and casual dining anchors</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Separate pathways and zones recommended for families vs young professionals</span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true"></i>
              <span>Phase Two research commissioned to refine strategy and design further</span>
            </li>
          </ul>
        </div>

        <div className="takeaway">
          <div className="takeaway-label">The takeaway</div>
          <p className="takeaway-quote">
            Large-scale developments are not adopted because of what they include. They are adopted
            because of how easily they fold into the way residents already live.
          </p>
        </div>

        <div className="cta-row">
          <Link to="/projects/creative-education" className="btn-editorial">
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

export default CaseStudyUrbanPlanning;
