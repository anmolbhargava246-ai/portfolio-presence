import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Airlines
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Conversion UX
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Behavioural Insight
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Saudi Arabia
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Reducing Booking Friction and Building Trust in a High-Stakes Digital Journey
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            A behavioural usability study of an airline booking platform, focused on the moments where clarity, confidence, and loyalty break down.
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
              In airline booking, small moments of friction don't just slow users down. They create anxiety, reduce trust, and increase abandonment.
            </p>

            <p>
              The platform wasn't lacking features. The challenge was understanding which parts of the journey were quietly signalling uncertainty, and where users were most likely to drop off or disengage.
            </p>

            <p className="text-foreground font-medium">
              The real question wasn't "what's broken?"<br />
              It was "what matters most under pressure?"
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
              I contributed as a UX researcher on an end-to-end evaluative study, focusing on high-impact behavioural friction across booking, add-ons, checkout, and loyalty engagement.
            </p>

            <p>
              The work prioritised what was worth solving first, based on where user confidence and momentum broke down.
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
                  Lens
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Behaviour under time pressure</li>
                  <li>Trust and pricing clarity</li>
                  <li>Drop-off risk moments</li>
                  <li>Loyalty discovery gaps</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Methods
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Moderated usability testing</li>
                  <li>Journey-based friction mapping</li>
                  <li>Persona-level behavioural synthesis</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Sample
              </h3>
              <p className="text-muted-foreground">10 frequent travellers · Mobile + desktop mix</p>
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

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Rather than running a broad usability sweep, we focused on decision-critical moments where users hesitate, abandon, or lose confidence.
            </p>

            <p>Priority journeys included:</p>

            <ul className="space-y-2 pl-4">
              <li>Search initiation</li>
              <li>Pricing and add-on transparency</li>
              <li>Checkout momentum</li>
              <li>Post-booking control</li>
              <li>Loyalty value perception</li>
            </ul>

            <p>
              This kept the research centred on conversion, retention, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">
            Key Insights
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Booking friction was less interaction-level and more confidence-level.
              </h3>
              <p className="text-muted-foreground">
                Users weren't stuck, they were unsure.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Pricing wasn't a detail problem. It was a trust problem.
              </h3>
              <p className="text-muted-foreground">
                Hidden or inconsistent breakdowns triggered hesitation late in the journey.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4 my-12">
              <p className="text-xl md:text-2xl font-display text-foreground italic">
                "Time pressure changed behaviour. Session timers and unclear progress cues turned anticipation into anxiety."
              </p>
            </blockquote>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Loyalty underperformed not because of rewards, but because it stayed invisible.
              </h3>
              <p className="text-muted-foreground">
                It wasn't surfaced at the moments users could care.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                The experience felt like disconnected tools rather than one coherent journey.
              </h3>
              <p className="text-muted-foreground">
                This weakened brand reliability and overall trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Output */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Output
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The work resulted in a prioritised set of experience improvements focused on:
            </p>

            <ul className="space-y-3 pl-4">
              <li>Reducing anxiety and cognitive load in checkout</li>
              <li>Making pricing and policies legible upfront</li>
              <li>Bringing loyalty value into key decision moments</li>
              <li>Creating continuity across booking, manage, and check-in flows</li>
            </ul>
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
              The most valuable research here wasn't finding every issue.
            </p>

            <p>
              It was identifying what users interpret as risk, and focusing on the moments that shape trust and follow-through.
            </p>
          </div>
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
