import { Link } from "react-router-dom";
import { ArrowLeft, Droplets, Eye, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";
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
          <div className="mb-10">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-lg font-medium rounded-lg border border-accent/20">
              Sensory Research · Brand Equity · Habit Formation
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Dairy Category", "Default Preference", "Saudi Arabia"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Identifying What Creates Default Preference in a High-Frequency Staple Category
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Clarified why consumers return to certain laban products without deliberation — and what sensory and emotional cues must be protected for habitual repurchase.
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
              In high-frequency, low-deliberation categories, preference is rarely conscious. The brand team treated this as product optimisation. The real risk was deeper: losing trust in ways that wouldn't surface until purchase shifted.
            </p>

            <p className="text-foreground font-medium">
              The real question: What sensory and emotional cues create default preference — and what would quietly erode it?
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
            Reframed the study from flavour benchmarking toward behavioural drivers of habit and trust. Led synthesis across taste testing, qualitative discussion, and competitor mapping — translating subjective sensory language into actionable product and positioning direction.
          </p>
        </div>
      </section>

      {/* Decision Focus — Visual Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Decision Focus
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Droplets, title: "Product optimisation", desc: "Which sensory attributes to protect, adjust, or amplify" },
              { icon: ShieldCheck, title: "Authenticity cues", desc: "What signals 'real laban' to habitual buyers" },
              { icon: RotateCcw, title: "Competitive defence", desc: "Credibly win in habitual purchase, not just trial" },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5 text-center">
                <item.icon className="h-5 w-5 text-accent mx-auto mb-3" />
                <h3 className="text-foreground font-medium text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6 italic">
            The trade-off: optimise for taste test performance, or optimise for sustained default preference. These are not the same goal.
          </p>
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
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Lens</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Default preference and habit</li>
                  <li>Authenticity as sensory judgement</li>
                  <li>Trust signals beyond flavour</li>
                  <li>Repurchase vs trial drivers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Methods</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Mini group discussions</li>
                  <li>Blind taste testing</li>
                  <li>Competitor benchmarking</li>
                  <li>Sensory-to-behaviour mapping</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Sample</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Heavy users (3x+ weekly)</li>
                  <li>Loyalists + competitor users</li>
                  <li>Riyadh + Jeddah</li>
                </ul>
              </div>
            </div>
          </div>
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
              { step: "1", title: "Contextual discussion", desc: "Category rituals, emotional associations, authenticity expectations" },
              { step: "2", title: "Blind taste testing", desc: "Multiple recipe variants to isolate sensory drivers of preference" },
              { step: "3", title: "Competitor benchmarking", desc: "Category defaults and differentiation opportunities" },
              { step: "4", title: "Behavioural mapping", desc: "Sensory reactions mapped to trust and repurchase intent" },
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

      {/* Consumer Quote */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <blockquote className="border-l-4 border-accent pl-6 py-4">
            <p className="text-xl md:text-2xl font-display text-foreground italic leading-relaxed">
              "The best laban stays with you. It's not just about the first sip — it's how it feels after."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              — Participant, Riyadh focus group
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Key Insights — Visual Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">
            Key Insights
          </h2>

          {/* Visual: Sensory Trust Model */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Sparkles, finding: "Authenticity is a sensory judgement, not a marketing claim.", detail: "Assessed through texture, weight, and aftertaste — not packaging.", shift: "Positioning shifted to sensory authenticity cues." },
              { icon: Droplets, finding: "Texture operates as a trust signal.", detail: "Thickness and smoothness predicted preference. Watery texture triggered immediate doubt.", shift: "Product optimisation prioritised consistency over intensity." },
              { icon: RotateCcw, finding: "Aftertaste drives repurchase, not trial.", detail: "Strongest recipes left a lingering, balanced finish. This is where habit forms.", shift: "Recipe development focused on aftertaste as the primary loyalty lever." },
              { icon: Eye, finding: "Visual cues shape expectation before tasting.", detail: "Whiteness signalled freshness. Yellowish hues triggered mixed reactions.", shift: "Visual consistency added to quality control priorities." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <item.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.detail}</p>
                <p className="text-accent text-xs font-medium">→ {item.shift}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-foreground font-medium text-sm mb-2">Habitual preference resists conscious comparison.</h3>
            <p className="text-muted-foreground text-xs mb-3">Heavy users rarely evaluated alternatives. Default set by accumulated experience, not deliberate choice.</p>
            <p className="text-accent text-xs font-medium">→ Competitive strategy separated trial-focused tactics from habit-protection priorities.</p>
          </div>
        </div>
      </section>

      {/* Output and Impact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Output and Impact
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Sensory attributes to protect (texture, aftertaste) vs adjust (sourness)",
              "Authenticity repositioned from heritage to sensory credibility",
              "Competitive strategy split: trial acquisition vs habitual defence",
              "Quality control priorities to reduce trust-breaking inconsistency",
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

          <p className="text-muted-foreground leading-relaxed mb-4">
            The real value of sensory research in staple categories is behavioural: understanding what creates trust, habit, and automatic repurchase.
          </p>
          <p className="text-foreground font-medium text-sm">
            Next time, I'd integrate pack-level cue testing earlier and pair findings with purchase frequency data to quantify commercial weight.
          </p>
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
