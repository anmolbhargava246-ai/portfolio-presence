import { Link } from "react-router-dom";
import { ArrowLeft, Search, CreditCard, Timer, Star, Layers } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudyAirlineBooking = () => {
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
            {["Airlines", "Conversion UX", "Behavioural Insight", "Saudi Arabia"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Reducing Booking Friction and Building Trust in a High-Stakes Digital Journey
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Behavioural usability study focused on the moments where clarity, confidence, and loyalty break down in airline booking.
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
              The platform wasn't lacking features. But unclear pricing, ambiguous policies, and inconsistent progress cues were quietly eroding trust. Hesitation triggers abandonment.
            </p>

            <p className="text-foreground font-medium">
              This was a confidence collapse at the point of purchase.
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
            Led behavioural evaluation across booking, pricing transparency, checkout, and loyalty. Mapped trust failure points and prioritised fixes by conversion impact and implementation effort.
          </p>
        </div>
      </section>

      {/* Priority Journeys — Visual */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Priority Journeys
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Search, title: "Search and selection", desc: "Flight discovery and comparison behaviour" },
              { icon: CreditCard, title: "Pricing clarity", desc: "Total cost visibility and add-on transparency" },
              { icon: Timer, title: "Checkout momentum", desc: "Progress confidence and payment completion" },
              { icon: Layers, title: "Post-booking control", desc: "Modification and management certainty" },
              { icon: Star, title: "Loyalty perception", desc: "Reward visibility at comparison moments" },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <item.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="text-foreground font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
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
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Lens</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Behaviour under time pressure</li>
                  <li>Trust and pricing clarity</li>
                  <li>Drop-off risk moments</li>
                  <li>Loyalty discovery gaps</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Methods</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Moderated usability testing</li>
                  <li>Journey-based friction mapping</li>
                  <li>Persona-level synthesis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights — Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">
            Key Insights
          </h2>

          <div className="space-y-4">
            {[
              { finding: "Users weren't stuck — they were unsure.", detail: "Ambiguity created hesitation, not complexity.", shift: "Clearer progress cues and reassurance at decision points." },
              { finding: "Pricing was a trust problem, not a detail problem.", detail: "Hidden breakdowns triggered hesitation late in the journey.", shift: "Total cost surfaced earlier, hidden fee ambiguity reduced." },
              { finding: "Time pressure turned anticipation into anxiety.", detail: "Countdown elements increased urgency but also stress.", shift: "Countdown framing improved, unnecessary urgency removed." },
              { finding: "Loyalty stayed invisible.", detail: "Rewards not surfaced when users were comparing value.", shift: "Loyalty value made legible at comparison and checkout." },
              { finding: "The journey felt like disconnected tools.", detail: "Booking, manage, and check-in flows lacked continuity.", shift: "Continuity created across booking and post-booking." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.detail}</p>
                <p className="text-accent text-xs font-medium">→ {item.shift}</p>
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

          <p className="text-muted-foreground leading-relaxed mb-4">
            The most valuable research was identifying what users interpret as risk — and focusing on moments that shape trust.
          </p>
          <p className="text-foreground font-medium text-sm">
            Next time, I'd pair behavioural findings with funnel analytics earlier to quantify trust drop-off and track improvement.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            If you care about designing for clarity, confidence, and behaviour, let's talk.
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

export default CaseStudyAirlineBooking;
