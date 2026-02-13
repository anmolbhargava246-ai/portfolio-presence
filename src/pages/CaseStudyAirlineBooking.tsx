import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/case-study-airline-hero.jpg";

const CaseStudyAirlineBooking = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </div>

      {/* Hero Image */}
      <section className="py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl overflow-hidden">
            <img src={heroImage} alt="Flight paths and decision points" className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Airlines", "Conversion UX", "Behavioural Insight", "Saudi Arabia"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Reducing Booking Friction and Building Trust in a High-Stakes Digital Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Behavioural usability study focused on where clarity, confidence, and loyalty break down in airline booking.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">The Problem</h2>
          <p className="text-lg text-muted-foreground">
            Unclear pricing, ambiguous policies, and inconsistent progress cues were quietly eroding trust. Hesitation triggers abandonment.
          </p>
          <p className="text-foreground font-medium mt-4">A confidence collapse at the point of purchase.</p>
        </div>
      </section>

      {/* Role */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">My Role</h2>
          <p className="text-muted-foreground leading-relaxed">
            Led behavioural evaluation across booking, pricing transparency, checkout, and loyalty. Mapped trust failure points and prioritised fixes by conversion impact.
          </p>
        </div>
      </section>

      {/* Journey Friction Map — Visual */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">Journey Friction Map</h2>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="space-y-4">
              {[
                { stage: "Search", friction: "Low", desc: "Flight discovery and comparison", bar: "20%" },
                { stage: "Pricing", friction: "High", desc: "Total cost visibility and add-on transparency", bar: "85%" },
                { stage: "Checkout", friction: "High", desc: "Progress confidence and payment completion", bar: "75%" },
                { stage: "Post-booking", friction: "Medium", desc: "Modification and management certainty", bar: "50%" },
                { stage: "Loyalty", friction: "Medium", desc: "Reward visibility at comparison moments", bar: "45%" },
              ].map((item) => (
                <div key={item.stage} className="flex items-center gap-4">
                  <div className="w-24 flex-shrink-0">
                    <p className="text-foreground text-sm font-medium">{item.stage}</p>
                    <p className="text-muted-foreground text-xs">{item.friction}</p>
                  </div>
                  <div className="flex-1">
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: item.bar,
                          background: `hsl(${item.friction === 'High' ? '0 84% 60%' : item.friction === 'Medium' ? '35 90% 55%' : '120 40% 55%'} / 0.7)`
                        }}
                      />
                    </div>
                    <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">Key Insights</h2>
          <div className="space-y-4">
            {[
              { finding: "Users weren't stuck — they were unsure.", shift: "Clearer progress cues and reassurance at decision points." },
              { finding: "Pricing was a trust problem, not a detail problem.", shift: "Total cost surfaced earlier, hidden fee ambiguity reduced." },
              { finding: "Time pressure turned anticipation into anxiety.", shift: "Countdown framing improved, unnecessary urgency removed." },
              { finding: "Loyalty stayed invisible.", shift: "Loyalty value made legible at comparison and checkout." },
              { finding: "The journey felt like disconnected tools.", shift: "Continuity created across booking and post-booking." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-accent text-xs font-medium">→ {item.shift}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">Reflection</h2>
          <p className="text-foreground font-medium text-sm">
            Next time, I'd pair behavioural findings with funnel analytics earlier to quantify trust drop-off and track improvement.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">If you care about designing for clarity, confidence, and behaviour, let's talk.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">Let's talk →</Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyAirlineBooking;