import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudySensoryPreference = () => {
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
          {/* Bold Category Visual */}
          <div className="mb-10">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-lg font-medium rounded-lg border border-accent/20">
              Sensory Research · Brand Equity · Habit Formation
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Dairy Category
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Default Preference
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Saudi Arabia
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Identifying What Creates Default Preference in a High-Frequency Staple Category
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            This research clarified why consumers return to certain laban products without deliberation—and what sensory and emotional cues must be protected to maintain habitual repurchase.
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
              In high-frequency, low-deliberation categories, preference is rarely conscious. Consumers reach for the same product week after week—until something breaks the habit.
            </p>

            <p>
              The brand team treated this as a product optimisation challenge: adjust sourness, improve texture, benchmark against competitors. But the real risk was deeper.
            </p>

            <p>
              Laban is not chosen on taste alone. It carries emotional weight—tradition, comfort, authenticity. The danger wasn't losing a blind test. It was losing trust in ways that wouldn't surface until purchase shifted.
            </p>

            <p className="text-foreground font-medium">
              The real question was:<br />
              What sensory and emotional cues create default preference—and what would quietly erode it?
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
              I shaped the research focus to move beyond flavour benchmarking toward behavioural drivers of habit and trust. This meant reframing the study around decision defaults, not taste preference.
            </p>

            <p>
              I led synthesis across taste testing, qualitative discussion, and competitor mapping—translating subjective sensory language into actionable product and positioning direction.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Focus */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Decision Focus
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This research needed to unlock three interconnected decisions:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Product optimisation:</strong> Which sensory attributes to protect, adjust, or amplify</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Positioning and authenticity:</strong> What signals "real laban" to habitual buyers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Competitive differentiation:</strong> Where the brand could credibly win in habitual purchase, not just trial</span>
              </li>
            </ul>

            <p>
              The trade-off was clear: optimise for taste test performance, or optimise for sustained default preference. These are not the same goal.
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

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Lens
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Default preference and habit formation</li>
                  <li>Authenticity as sensory judgement</li>
                  <li>Trust signals beyond flavour</li>
                  <li>Repurchase drivers vs trial drivers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Methods
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Mini group discussions</li>
                  <li>Blind taste testing (multiple recipes)</li>
                  <li>Competitor benchmarking</li>
                  <li>Sensory-to-behaviour mapping</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Sample
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Heavy category users (3x+ weekly)</li>
                  <li>Brand loyalists + competitor users</li>
                  <li>Riyadh + Jeddah</li>
                  <li>Male + female, across life stages</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
              Focused on habitual buyers where sensory cues drive automatic repurchase, not deliberate comparison.
            </p>
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
              The research combined sensory evaluation with behavioural interpretation—designed to surface what consumers judge instinctively, not just what they can articulate.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex gap-4">
                <span className="text-accent font-medium min-w-[100px]">Phase 1</span>
                <span>Contextual discussion to surface category rituals, emotional associations, and authenticity expectations</span>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium min-w-[100px]">Phase 2</span>
                <span>Blind taste testing across recipe variants to isolate sensory drivers of preference</span>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium min-w-[100px]">Phase 3</span>
                <span>Competitor benchmarking to identify category defaults and differentiation opportunities</span>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium min-w-[100px]">Phase 4</span>
                <span>Synthesis mapping sensory reactions to behavioural trust and repurchase intent</span>
              </div>
            </div>

            <p className="mt-8">
              The priority was connecting what people feel in the mouth to what they decide at shelf—treating sensory experience as a trust signal, not just a product attribute.
            </p>
          </div>
        </div>
      </section>

      {/* Consumer Quote */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <blockquote className="border-l-4 border-accent pl-6 py-4">
            <p className="text-xl md:text-2xl font-display text-foreground italic leading-relaxed">
              "The best laban stays with you. It's not just about the first sip—it's how it feels after."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              — Participant, Riyadh focus group
            </footer>
          </blockquote>
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
                Authenticity is a sensory judgement, not a marketing claim.
              </h3>
              <p className="text-muted-foreground mb-3">
                Consumers assessed "real laban" through texture, weight, and aftertaste—not packaging or heritage messaging. Authenticity had to be felt, not told.
              </p>
              <p className="text-sm text-accent">
                → Positioning shifted from narrative authenticity to sensory authenticity cues.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Texture operates as a trust signal.
              </h3>
              <p className="text-muted-foreground mb-3">
                Thickness and smoothness consistently predicted preference. Watery or inconsistent texture triggered immediate doubt—before conscious evaluation began.
              </p>
              <p className="text-sm text-accent">
                → Product optimisation prioritised texture consistency over flavour intensity.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Aftertaste drives repurchase, not trial.
              </h3>
              <p className="text-muted-foreground mb-3">
                The strongest recipes weren't the most intense on first sip. They left a lingering, balanced finish that made consumers want another. This is where habit forms.
              </p>
              <p className="text-sm text-accent">
                → Recipe development focused on aftertaste profile as the primary loyalty lever.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Visual cues shape expectation before tasting.
              </h3>
              <p className="text-muted-foreground mb-3">
                Pure whiteness signalled freshness and purity. Yellowish hues triggered mixed reactions—natural to some, inconsistent to others. Expectation was set before the first sip.
              </p>
              <p className="text-sm text-accent">
                → Visual consistency added to quality control priorities alongside sensory benchmarks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Habitual preference resists conscious comparison.
              </h3>
              <p className="text-muted-foreground mb-3">
                Heavy users rarely evaluated alternatives actively. Their default was set by accumulated experience, not deliberate choice. Winning trial and winning habit require different strategies.
              </p>
              <p className="text-sm text-accent">
                → Competitive strategy separated trial-focused tactics from habit-protection priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Output and Impact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Output and Impact
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The research shifted the brand's approach from flavour optimisation to habit protection:
            </p>

            <ul className="space-y-3 pl-6 mt-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Clarified which sensory attributes to protect (texture, aftertaste) vs adjust (sourness intensity)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Repositioned authenticity from heritage messaging to sensory credibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Separated competitive strategy for trial acquisition vs habitual defence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Informed quality control priorities to reduce trust-breaking inconsistency</span>
              </li>
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
              Sensory research in staple categories often gets treated as product development input. The real value is behavioural: understanding what creates trust, habit, and automatic repurchase.
            </p>

            <p>
              If running this again, I would integrate pack-level cue testing earlier and pair sensory findings with purchase frequency data to quantify the commercial weight of each attribute.
            </p>

            <p className="text-foreground font-medium">
              Good sensory research makes invisible defaults measurable—and protects the trust that keeps consumers reaching for the same product without thinking.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            If you're building products where trust is sensory and habit-based, let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudySensoryPreference;
