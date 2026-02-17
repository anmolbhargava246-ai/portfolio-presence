import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { RiskGrid } from "@/components/case-study/RiskGrid";

const CaseStudyUrbanPlanning = () => {
  return (
    <Layout>
      {/* Back Navigation */}
      <div className="container mx-auto pt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Urban Planning
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Real Estate
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Mixed Methods Research
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Concept Testing
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Saudi Arabia
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Designing a Community Hub Around How People Actually Live
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            A mixed-methods study to understand lifestyle preferences, daily behaviours, and amenity needs of residents in Jeddah—shaping a large-scale urban development grounded in real community adoption.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            The Problem
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              The client was planning a high-investment, mixed-use community hub in Jeddah—combining public spaces, F&B, entertainment, offices, and residential areas.
            </p>

            <p>
              The risk wasn't construction feasibility. It was building a space that residents would actually adopt, return to, and integrate into their daily lives.
            </p>

            <p>
              Getting this wrong meant low footfall, poor commercial viability, and a development people pass through rather than belong to.
            </p>

            <p className="text-foreground font-medium">
              This wasn't a design challenge. It was a behavioural adoption challenge at city scale.
            </p>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            My Role
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I was a key researcher on this project, helping shape the research plan, leading parts of fieldwork and synthesis, and translating findings into actionable design recommendations.
            </p>

            <p>
              I supported strategic decisions on layout, amenity mix, and segment priorities—grounded in how residents actually live, socialise, and spend their time.
            </p>
          </div>
        </div>
      </section>

      {/* Research Snapshot */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h2 className="font-display text-xl md:text-2xl font-medium text-foreground mb-8">
              Research Snapshot
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Methods
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Digital activity-based focus groups</li>
                  <li>Moderated focus group discussions</li>
                  <li>Concept testing</li>
                  <li>Quantitative survey (500+ responses)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Participants
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Residents of Jeddah</li>
                  <li>Young professionals</li>
                  <li>Families</li>
                  <li>Mixed age groups</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Insights informed early-stage investment and master planning decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Approach
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 1</span>
                <p className="text-muted-foreground">Asynchronous digital activities to capture real lifestyle patterns</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 2</span>
                <p className="text-muted-foreground">Moderated focus groups to uncover emotional needs and trade-offs</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 3</span>
                <p className="text-muted-foreground">Concept testing of proposed hub layouts and amenities</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 4</span>
                <p className="text-muted-foreground">Quantitative survey validation to prioritise features at scale</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 5</span>
                <p className="text-muted-foreground">Synthesis into actionable recommendations for planning and design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Risk Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <RiskGrid
            title="Adoption Risk Map"
            subtitle="Where the development risked low engagement, mapped by behavioural barrier."
            items={[
              { severity: "high", title: "Accessibility over novelty", description: "Proximity and ease of access mattered more than flagship attractions" },
              { severity: "critical", title: "Green space as infrastructure", description: "Outdoor zones and F&B were central to adoption, not peripheral" },
              { severity: "high", title: "Segment divergence", description: "Families and young professionals wanted fundamentally different experiences" },
              { severity: "medium", title: "Concept legibility", description: "Unclear amenity articulation reduced engagement intent" },
            ]}
            footnote="Prioritised by impact on long-term community adoption, not feature novelty."
          />
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Key Insights
          </h2>

          <div className="space-y-8">
            {/* Pull Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4 my-8">
              <p className="text-xl md:text-2xl font-display text-foreground italic">
                "Accessibility mattered more than novelty. Residents prioritised ease of access and proximity over flagship attractions."
              </p>
            </blockquote>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Accessibility mattered more than novelty.
                </h3>
                <p className="text-muted-foreground mb-3">
                  Residents prioritised ease of access and proximity over flashy flagship attractions.
                </p>
                <p className="text-accent text-sm font-medium">
                  → Planning prioritised proximity, walkability, and everyday convenience over landmark features.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Green spaces and F&B were central, not add-ons.
                </h3>
                <p className="text-muted-foreground mb-3">
                  They were central to how people imagined spending time in the community hub.
                </p>
                <p className="text-accent text-sm font-medium">
                  → Hub design increased emphasis on outdoor social zones and casual dining anchors.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Different segments wanted different experiences.
                </h3>
                <p className="text-muted-foreground mb-3">
                  Families valued safety and open spaces, while young professionals leaned towards dining, entertainment, and social experiences.
                </p>
                <p className="text-accent text-sm font-medium">
                  → Separate pathways and zones were recommended for families vs young professionals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Concept clarity influenced intent.
                </h3>
                <p className="text-muted-foreground mb-3">
                  Clear articulation of amenities and layout significantly increased interest and likelihood of engagement.
                </p>
                <p className="text-accent text-sm font-medium">
                  → Messaging and layout visuals were refined to make amenities immediately understandable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome and Impact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Outcome and Impact
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <ul className="space-y-3 list-inside">
              <li>• Shaped multiple iterations of the hub concept and amenity mix</li>
              <li>• Prioritised high-demand community features validated through 500+ survey responses</li>
              <li>• Enabled more confident investment and planning decisions for Phase One development</li>
              <li>• Client commissioned a Phase Two study to refine strategy and design further</li>
            </ul>

            <p className="text-foreground font-medium pt-4">
              Stakeholders used the research to guide institutional positioning, layout efficiency, and overall development appeal.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Reflection
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This project reinforced the value of mixed-methods research in high-investment, long-term decisions like urban development. Clear prioritisation of resident behaviour—backed by both depth and quantitative confidence—was key to building stakeholder trust and driving action.
            </p>

            <p>
              If I did this again, I'd integrate behavioural footfall modelling and longitudinal community adoption signals earlier to predict long-term engagement and inform phased rollouts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in research that informs large-scale, long-term decisions?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Let's talk →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyUrbanPlanning;
