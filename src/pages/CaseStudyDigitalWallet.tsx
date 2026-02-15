import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SequentialFlow } from "@/components/case-study/SequentialFlow";
import { RiskGrid } from "@/components/case-study/RiskGrid";

const CaseStudyDigitalWallet = () => {
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
            <span className="inline-block px-6 py-3 bg-accent/10 text-accent text-lg font-medium rounded-lg border border-accent/20">
              Fintech UX · Pre-Launch Risk
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Fintech UX
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Pre-Launch Risk
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Behavioural UX
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Saudi Arabia
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Reducing Adoption Risk in a New Digital Wallet Before Launch
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            A pre-launch research programme that identified where trust, comprehension, and behavioural confidence collapsed in real transaction flows — and translated those breakdowns into prioritised launch decisions.
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
              The product was feature-complete and approaching launch. But one risk remained unresolved: whether users would feel confident enough to activate, transact, and return.
            </p>

            <p>
              In fintech, usability is not about preference. It is about whether someone trusts the interface enough to move real money through it. Hesitation at any point — sign-up, first transaction, post-transfer confirmation — compounds into abandonment.
            </p>

            <p className="text-foreground font-medium">
              The real question was not "is the interface usable?" but "what will prevent activation, completion, and repeat use in the first week?"
            </p>

            <p>
              The product team had strong assumptions about feature value. What was missing was a behavioural read on where certainty collapses under financial stakes.
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
              I shaped the behavioural framing for this initiative — defining which journeys carried the highest adoption risk, structuring task scenarios around user intent rather than screens, and leading the synthesis that converted messy session data into clear product direction.
            </p>

            <p>
              My focus was on judgement and translation: identifying which breakdowns were cosmetic, which were structural, and which would directly threaten launch readiness. I worked closely with product and design to ensure findings landed as prioritised decisions, not open-ended recommendations.
            </p>

            <p className="text-foreground font-medium">
              The core responsibility was turning observed behaviour into launch confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Framing the Risk */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Framing the Risk
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Rather than treating the wallet as a single experience to evaluate, I decomposed it into three behavioural systems — each representing a distinct layer of trust that users must build sequentially:
            </p>

            <SequentialFlow
              title=""
              subtitle=""
              steps={[
                { title: "Entry Trust", description: "Do I feel safe signing up?" },
                { title: "Transaction Trust", description: "Do I feel in control sending money?" },
                { title: "Feedback Trust", description: "Do I know what happened?" },
              ]}
              footnote='Shifted the conversation from "does it work?" to "where does certainty collapse?"'
            />
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h2 className="font-display text-xl md:text-2xl font-medium text-foreground mb-8">
              Research Approach
            </h2>

            <p className="text-muted-foreground mb-8">
              The programme was scoped to test only what could realistically block adoption. We prioritised flows where financial stakes were highest and where hesitation would compound into abandonment:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Priority Flows
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Activation and identity verification</li>
                  <li>Adding funds for the first time</li>
                  <li>Domestic and international transfers</li>
                  <li>Payment utilities and social transaction flows</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Analysis Lenses
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Satisfaction and perceived effort</li>
                  <li>Efficiency under cognitive load</li>
                  <li>Memorability and learnability</li>
                  <li>Confusion and recovery behaviour</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground italic">
                The goal was to observe failure points under real cognitive and emotional load — not to collect preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Synthesis Worked */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            How Synthesis Worked
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              The most consequential work happened after sessions ended.
            </p>

            <p>
              Rather than reporting what users disliked, I mapped every observed breakdown into categories based on what type of risk it posed to adoption:
            </p>
          </div>

          <RiskGrid
            title=""
            subtitle=""
            items={[
              { severity: "critical", title: "Mental model failures", description: "Users couldn't understand multi-layer auth" },
              { severity: "high", title: "Hierarchy failures", description: "Key actions visually buried" },
              { severity: "high", title: "Compliance friction", description: "KYC felt intrusive, not protective" },
              { severity: "critical", title: "Feedback gaps", description: "Uncertainty whether money arrived" },
            ]}
            footnote="Prioritised by adoption risk severity, not comment volume."
          />
        </div>
      </section>

      {/* What the Work Enabled */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            What the Work Enabled
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The output was a set of prioritised risk removals, framed for launch decision-making:
            </p>

            <div className="space-y-6 mt-4">
              <div className="border-l-2 border-accent/30 pl-6">
                <h3 className="text-foreground font-medium mb-1">Trust signalling brought forward</h3>
                <p className="text-sm">Category and safety cues repositioned to appear early in onboarding, reducing activation hesitation.</p>
              </div>

              <div className="border-l-2 border-accent/30 pl-6">
                <h3 className="text-foreground font-medium mb-1">Security steps made legible</h3>
                <p className="text-sm">Multi-layer authentication reframed from redundant friction to visible protection — reducing perceived effort without reducing actual security.</p>
              </div>

              <div className="border-l-2 border-accent/30 pl-6">
                <h3 className="text-foreground font-medium mb-1">Homepage hierarchy restructured</h3>
                <p className="text-sm">Action prominence redesigned to match scanning behaviour under cognitive load, reducing time-to-first-action.</p>
              </div>

              <div className="border-l-2 border-accent/30 pl-6">
                <h3 className="text-foreground font-medium mb-1">Transaction flows condensed</h3>
                <p className="text-sm">Long multi-step flows restructured where perceived effort exceeded actual complexity, improving completion confidence.</p>
              </div>

              <div className="border-l-2 border-accent/30 pl-6">
                <h3 className="text-foreground font-medium mb-1">Feedback loops scaffolded</h3>
                <p className="text-sm">New features given lightweight explanation and confirmation patterns, reducing first-use anxiety.</p>
              </div>
            </div>

            <p className="text-foreground font-medium mt-8">
              These were framed as risk removals for launch readiness — not design tweaks. Each addressed a specific point where behavioural confidence would have collapsed at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Mattered */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Why This Mattered
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              A digital wallet does not earn adoption through feature breadth. It earns adoption through behavioural confidence — the user's belief that their money is safe, their actions are understood, and the product behaves predictably.
            </p>

            <p>
              Without this work, the product would have launched with strong functionality but unresolved trust gaps in the moments that matter most: first sign-up, first transaction, first transfer to another person. These are the moments where hesitation compounds into permanent abandonment.
            </p>

            <p className="text-foreground font-medium">
              In high-trust products, the role of research is not to validate the interface. It is to find where certainty collapses — and to make that actionable before the cost of discovery shifts from a research session to lost users at scale.
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
              If running this again, I would integrate lightweight behavioural tracking from the first testable build — capturing hesitation duration, back-navigation frequency, and task abandonment patterns as quantitative inputs alongside moderated observation. This would have strengthened the evidence base for prioritisation and given product teams a measurable baseline to track post-launch improvement against.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            If you're building financial products where trust is the conversion funnel, I work at that edge.
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

export default CaseStudyDigitalWallet;
