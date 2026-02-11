import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, TreePine, Users, LayoutGrid } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudyUrbanPlanning = () => {
  return (
    <Layout>
      {/* Back Navigation */}
      <div className="container mx-auto pt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Urban Planning", "Real Estate", "Mixed Methods", "Concept Testing", "Saudi Arabia"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Designing a Community Hub Around How People Actually Live
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Mixed-methods study shaping a large-scale urban development in Jeddah — grounded in real community behaviour, not assumptions.
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
              High-investment, mixed-use community hub in Jeddah. The risk wasn't construction feasibility — it was building a space residents would adopt, return to, and integrate into daily life.
            </p>

            <p className="text-foreground font-medium">
              This was a behavioural adoption challenge at city scale.
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

          <p className="text-muted-foreground leading-relaxed">
            Key researcher — shaped the research plan, led fieldwork and synthesis, translated findings into actionable design recommendations for layout, amenity mix, and segment priorities.
          </p>
        </div>
      </section>

      {/* Approach — Visual Stepper */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Approach
          </h2>

          <div className="space-y-0">
            {[
              { step: "1", title: "Digital activities", desc: "Asynchronous capture of real lifestyle patterns" },
              { step: "2", title: "Focus groups", desc: "Emotional needs and trade-offs in community use" },
              { step: "3", title: "Concept testing", desc: "Proposed hub layouts and amenity reactions" },
              { step: "4", title: "Quantitative validation", desc: "500+ survey responses to prioritise features" },
              { step: "5", title: "Actionable synthesis", desc: "Recommendations for planning and design" },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-medium text-sm">{item.step}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px h-full bg-accent/20 my-1" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
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
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Methods</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Digital activity-based focus groups</li>
                  <li>Moderated discussions</li>
                  <li>Concept testing</li>
                  <li>Quantitative survey (500+)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Participants</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Jeddah residents</li>
                  <li>Young professionals + families</li>
                  <li>Mixed age groups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights — Visual Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">
            Key Insights
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: MapPin, finding: "Accessibility mattered more than novelty.", detail: "Proximity and walkability prioritised over flagship attractions.", shift: "Planning focused on everyday convenience over landmarks." },
              { icon: TreePine, finding: "Green spaces and F&B were central, not add-ons.", detail: "Core to how people imagined spending time in the hub.", shift: "Increased emphasis on outdoor social zones and dining anchors." },
              { icon: Users, finding: "Different segments wanted different experiences.", detail: "Families: safety + open spaces. Young professionals: dining + social.", shift: "Separate pathways and zones recommended by segment." },
              { icon: LayoutGrid, finding: "Concept clarity influenced intent.", detail: "Clear articulation of amenities significantly increased engagement interest.", shift: "Layout visuals refined for immediate comprehension." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <item.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.detail}</p>
                <p className="text-accent text-xs font-medium">→ {item.shift}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Outcome
          </h2>

          <div className="space-y-3">
            {[
              "Shaped multiple iterations of the hub concept and amenity mix",
              "Prioritised high-demand features validated through 500+ responses",
              "Enabled confident investment decisions for Phase One",
              "Client commissioned Phase Two study to refine further",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Reflection
          </h2>

          <p className="text-foreground font-medium text-sm">
            Next time, I'd integrate behavioural footfall modelling and longitudinal community signals earlier to predict long-term engagement and inform phased rollouts.
          </p>
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
