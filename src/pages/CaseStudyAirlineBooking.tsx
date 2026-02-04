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
              Airline booking is a high-pressure, high-revenue moment. Users are often comparing options, managing time constraints, and making irreversible financial decisions under stress.
            </p>

            <p>
              The platform wasn't lacking features. But small moments of friction—unclear pricing, ambiguous policies, inconsistent progress cues—were quietly eroding trust. In this environment, hesitation doesn't just slow users down. It triggers abandonment.
            </p>

            <p className="text-foreground font-medium">
              This wasn't a usability issue.<br />
              It was a confidence collapse at the point of purchase.
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
              I led the behavioural evaluation across booking, pricing transparency, checkout, and loyalty engagement. My focus was identifying where user confidence broke down and why—then translating those findings into a prioritised roadmap for experience improvements.
            </p>

            <p>
              I mapped the moments where trust failures created drop-off risk, and worked with the team to prioritise fixes based on conversion impact and implementation effort.
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
              <p className="text-muted-foreground mt-2 text-sm">
                Focused on conversion-critical journeys where hesitation becomes abandonment.
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
            <p className="text-muted-foreground leading-relaxed">
              Rather than running a broad usability sweep, we focused on decision-critical moments where users hesitate, abandon, or lose confidence.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 1</span>
                <p className="text-muted-foreground">Moderated usability testing across booking and checkout flows</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 2</span>
                <p className="text-muted-foreground">Friction mapping of hesitation and drop-off moments</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 3</span>
                <p className="text-muted-foreground">Behavioural synthesis by traveller mindset and urgency level</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 4</span>
                <p className="text-muted-foreground">Prioritisation of fixes based on trust impact and implementation effort</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Priority Journeys
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Search initiation and flight selection</li>
                <li>Pricing transparency and add-on clarity</li>
                <li>Checkout momentum and payment confidence</li>
                <li>Post-booking control and modification</li>
                <li>Loyalty value perception and engagement</li>
              </ul>
            </div>
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
              <h3 className="text-lg font-medium text-foreground mb-2">
                Users weren't stuck—they were unsure.
              </h3>
              <p className="text-muted-foreground mb-3">
                Booking friction was less interaction-level and more confidence-level. Ambiguity created hesitation, not complexity.
              </p>
              <p className="text-accent text-sm font-medium">
                → Added clearer progress cues and reassurance at key decision points.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Pricing wasn't a detail problem—it was a trust problem.
              </h3>
              <p className="text-muted-foreground mb-3">
                Hidden or inconsistent breakdowns triggered hesitation late in the journey, when commitment was highest.
              </p>
              <p className="text-accent text-sm font-medium">
                → Surfaced total cost earlier and reduced hidden fee ambiguity.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4 my-12">
              <p className="text-xl md:text-2xl font-display text-foreground italic">
                "Time pressure changed behaviour. Session timers and unclear progress cues turned anticipation into anxiety."
              </p>
            </blockquote>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Time pressure turned anticipation into anxiety.
              </h3>
              <p className="text-muted-foreground mb-3">
                Session timers and countdown elements increased urgency but also amplified stress and second-guessing.
              </p>
              <p className="text-accent text-sm font-medium">
                → Improved countdown framing and removed unnecessary urgency signals.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Loyalty stayed invisible.
              </h3>
              <p className="text-muted-foreground mb-3">
                Rewards and benefits weren't surfaced at the moments users were actively comparing value.
              </p>
              <p className="text-accent text-sm font-medium">
                → Made loyalty value legible at key comparison and checkout moments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                The journey felt like disconnected tools.
              </h3>
              <p className="text-muted-foreground mb-3">
                Booking, manage, and check-in flows lacked continuity—weakening brand reliability and overall trust.
              </p>
              <p className="text-accent text-sm font-medium">
                → Created continuity across booking, post-booking, and check-in journeys.
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
            <p className="text-foreground font-medium">
              The work resulted in a prioritised set of experience interventions:
            </p>

            <ul className="space-y-3 list-disc list-inside">
              <li>Introduced reassurance and progress cues to reduce checkout anxiety</li>
              <li>Made pricing, baggage rules, and policies legible upfront</li>
              <li>Integrated loyalty value into key decision and comparison moments</li>
              <li>Improved continuity across booking, post-booking, and check-in journeys</li>
            </ul>

            <p className="mt-6">
              Recommendations were prioritised by trust impact and implementation effort, giving the team a clear roadmap for phased improvements.
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
              The most valuable research here wasn't finding every issue. It was identifying what users interpret as risk—and focusing on the moments that shape trust and follow-through.
            </p>

            <p className="text-foreground font-medium">
              If I did this again, I'd pair behavioural usability findings with funnel analytics earlier to quantify trust drop-off moments and track improvement over time.
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
