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
            A mixed-methods study to understand lifestyle preferences, daily behaviours, and amenity needs of residents in Jeddah to shape a large scale urban development.
          </p>
        </section>

        {/* The Problem */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
            The Problem
          </h2>
          
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              The client planned to develop a mixed-use community hub in Jeddah, combining public spaces, F&B, entertainment, offices, and residential areas.
            </p>
            
            <p className="text-foreground leading-relaxed">
              The challenge wasn't construction feasibility.
              <br />
              It was understanding how residents actually live, socialise, and spend time, and whether the proposed concept aligned with real lifestyle needs.
            </p>
            
            <p className="text-foreground leading-relaxed">
              Getting this wrong would mean low engagement, poor adoption, and a space people pass through rather than belong to.
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
              I worked as a researcher on this project, contributing across research design, fieldwork, analysis, and synthesis.
            </p>
            
            <p className="text-foreground leading-relaxed">
              I was involved in shaping the research plan, analysing qualitative and quantitative inputs, and translating findings into clear, actionable recommendations for design and development decisions.
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
                  <li>Digital activity based focus groups</li>
                  <li>Moderated focus group discussions</li>
                  <li>Concept testing</li>
                  <li>Quantitative survey</li>
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
          </div>
        </section>

        {/* Approach */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
            Approach
          </h2>
          
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              The research was designed to capture both stated preferences and underlying behaviours.
            </p>
            
            <p className="text-foreground leading-relaxed">
              Asynchronous digital activities helped surface organic, day-to-day lifestyle patterns, while focus groups uncovered emotional needs, expectations, and trade offs residents make when choosing where to spend time.
            </p>
            
            <p className="text-foreground leading-relaxed">
              Concept testing and quantitative validation ensured recommendations were grounded in both depth and scale.
            </p>
            
            <p className="text-foreground leading-relaxed">
              This balance was critical for high-stakes real estate decisions.
            </p>
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
                "Accessibility mattered more than novelty. Residents prioritised ease of access and proximity over flashy features."
              </p>
            </blockquote>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-foreground font-medium mb-2">
                  Green spaces and F&B weren't add-ons.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  They were central to how people imagined spending time in the community hub.
                </p>
              </div>
              
              <div>
                <h3 className="text-foreground font-medium mb-2">
                  Different segments wanted different things.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Families valued safety and open spaces, while young professionals leaned towards dining, entertainment, and social experiences.
                </p>
              </div>
              
              <div>
                <h3 className="text-foreground font-medium mb-2">
                  Concept clarity influenced intent.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clear articulation of amenities and layout significantly increased interest and likelihood of engagement.
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
            <p className="text-foreground leading-relaxed">
              Research insights shaped multiple iterations of the community hub concept, improving layout efficiency, amenity relevance, and overall appeal.
            </p>
            
            <p className="text-foreground leading-relaxed">
              Quantitative validation with 500 plus respondents confirmed demand for key features, enabling more confident investment decisions.
            </p>
            
            <p className="text-foreground leading-relaxed">
              A majority of respondents expressed strong intent to engage with the development once launched, and the client commissioned a Phase Two study to further refine design and strategy.
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
              This project reinforced the value of mixed-methods research in high investment, long term decisions like urban development.
            </p>
            
            <p className="text-foreground leading-relaxed">
              Clear prioritisation of user needs, backed by both behavioural depth and quantitative confidence, was key to building stakeholder trust and driving action.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 py-20 border-t border-border">
          <div className="text-center">
            <p className="text-lg text-foreground mb-6">
              Interested in research that informs large scale, long term decisions?
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
