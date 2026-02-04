import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudyUrbanPlanning = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Back Navigation */}
        <div className="max-w-3xl mx-auto px-6 pt-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-3xl mx-auto px-6 pt-16 pb-20">
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-xs text-muted-foreground">Urban Planning</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">Real Estate</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">Mixed Methods Research</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">Concept Testing</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">Saudi Arabia</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Designing a Community Hub Around How People Actually Live
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            A mixed-methods study to understand lifestyle preferences, daily behaviours, and amenity needs of residents in Jeddah—shaping a large-scale urban development grounded in real community adoption.
          </p>
        </section>

        {/* The Problem */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
            The Problem
          </h2>
          
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              The client was planning a high-investment, mixed-use community hub in Jeddah—combining public spaces, F&B, entertainment, offices, and residential areas.
            </p>
            
            <p className="text-foreground leading-relaxed">
              The risk wasn't construction feasibility. It was building a space that residents would actually adopt, return to, and integrate into their daily lives.
            </p>
            
            <p className="text-foreground leading-relaxed">
              Getting this wrong meant low footfall, poor commercial viability, and a development people pass through rather than belong to.
            </p>
            
            <p className="text-foreground font-medium">
              This wasn't a design challenge. It was a behavioural adoption challenge at city scale.
            </p>
          </div>
        </section>

        {/* My Role */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
            My Role
          </h2>
          
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              I was a key researcher on this project, helping shape the research plan, leading parts of fieldwork and synthesis, and translating findings into actionable design recommendations.
            </p>
            
            <p className="text-foreground leading-relaxed">
              I supported strategic decisions on layout, amenity mix, and segment priorities—grounded in how residents actually live, socialise, and spend their time.
            </p>
          </div>
        </section>

        {/* Research Snapshot */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
            Research Snapshot
          </h2>
          
          <div className="bg-muted/30 border border-border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  Methods
                </h3>
                <ul className="space-y-2 text-foreground text-sm">
                  <li>Digital activity-based focus groups</li>
                  <li>Moderated focus group discussions</li>
                  <li>Concept testing</li>
                  <li>Quantitative survey (500+ responses)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  Participants
                </h3>
                <ul className="space-y-2 text-foreground text-sm">
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
        </section>

        {/* Approach */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
            Approach
          </h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Phase 1</span>
              <p className="text-foreground text-sm">Asynchronous digital activities to capture real lifestyle patterns</p>
            </div>
            <div className="flex gap-4">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Phase 2</span>
              <p className="text-foreground text-sm">Moderated focus groups to uncover emotional needs and trade-offs</p>
            </div>
            <div className="flex gap-4">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Phase 3</span>
              <p className="text-foreground text-sm">Concept testing of proposed hub layouts and amenities</p>
            </div>
            <div className="flex gap-4">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Phase 4</span>
              <p className="text-foreground text-sm">Quantitative survey validation to prioritise features at scale</p>
            </div>
            <div className="flex gap-4">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Phase 5</span>
              <p className="text-foreground text-sm">Synthesis into actionable recommendations for planning and design</p>
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
            Key Insights
          </h2>
          
          <div className="space-y-8">
            {/* Pull Quote */}
            <blockquote className="border-l-2 border-foreground pl-6 py-4 my-8">
              <p className="text-xl text-foreground font-light italic leading-relaxed">
                "Accessibility mattered more than novelty. Residents prioritised ease of access and proximity over flagship attractions."
              </p>
            </blockquote>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-foreground font-medium mb-2">
                  Accessibility mattered more than novelty.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Residents prioritised ease of access and proximity over flashy flagship attractions.
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  → Planning prioritised proximity, walkability, and everyday convenience over landmark features.
                </p>
              </div>
              
              <div>
                <h3 className="text-foreground font-medium mb-2">
                  Green spaces and F&B were central, not add-ons.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  They were central to how people imagined spending time in the community hub.
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  → Hub design increased emphasis on outdoor social zones and casual dining anchors.
                </p>
              </div>
              
              <div>
                <h3 className="text-foreground font-medium mb-2">
                  Different segments wanted different experiences.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Families valued safety and open spaces, while young professionals leaned towards dining, entertainment, and social experiences.
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  → Separate pathways and zones were recommended for families vs young professionals.
                </p>
              </div>
              
              <div>
                <h3 className="text-foreground font-medium mb-2">
                  Concept clarity influenced intent.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Clear articulation of amenities and layout significantly increased interest and likelihood of engagement.
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  → Messaging and layout visuals were refined to make amenities immediately understandable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome and Impact */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
            Outcome and Impact
          </h2>
          
          <div className="space-y-6">
            <ul className="space-y-3 text-foreground leading-relaxed">
              <li>• Shaped multiple iterations of the hub concept and amenity mix</li>
              <li>• Prioritised high-demand community features validated through 500+ survey responses</li>
              <li>• Enabled more confident investment and planning decisions for Phase One development</li>
              <li>• Client commissioned a Phase Two study to refine strategy and design further</li>
            </ul>
            
            <p className="text-foreground leading-relaxed pt-4">
              Stakeholders used the research to guide institutional positioning, layout efficiency, and overall development appeal.
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
            Reflection
          </h2>
          
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              This project reinforced the value of mixed-methods research in high-investment, long-term decisions like urban development. Clear prioritisation of resident behaviour—backed by both depth and quantitative confidence—was key to building stakeholder trust and driving action.
            </p>
            
            <p className="text-foreground leading-relaxed">
              If I did this again, I'd integrate behavioural footfall modelling and longitudinal community adoption signals earlier to predict long-term engagement and inform phased rollouts.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 py-20 border-t border-border">
          <div className="text-center">
            <p className="text-lg text-foreground mb-6">
              Interested in research that informs large-scale, long-term decisions?
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
            >
              Let's talk
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudyUrbanPlanning;
