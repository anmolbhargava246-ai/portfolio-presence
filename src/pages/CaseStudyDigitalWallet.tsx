import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, ArrowRightLeft, Bell, Brain, Layers, AlertTriangle, MessageSquareWarning } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

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
            {["Fintech UX", "Pre-Launch Risk", "Behavioural UX", "Saudi Arabia"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Reducing Adoption Risk in a New Digital Wallet Before Launch
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Identified where trust, comprehension, and behavioural confidence collapsed in real transaction flows — and translated breakdowns into prioritised launch decisions.
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
              Feature-complete product approaching launch. Unresolved risk: whether users would feel confident enough to activate, transact, and return.
            </p>

            <p className="text-foreground font-medium">
              The real question: "What will prevent activation, completion, and repeat use in the first week?"
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
            Shaped the behavioural framing — defining highest-risk journeys, structuring task scenarios around intent, and leading synthesis that converted session data into prioritised launch decisions. Focused on distinguishing cosmetic issues from structural threats to adoption.
          </p>
        </div>
      </section>

      {/* Framing the Risk — Visual */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            Framing the Risk
          </h2>
          <p className="text-muted-foreground mb-8">
            Decomposed the wallet into three sequential trust layers. Each must succeed for the next to matter.
          </p>

          {/* Visual: Trust Layer Diagram */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2 z-0" />

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {[
                {
                  icon: ShieldCheck,
                  label: "Entry Trust",
                  question: "Do I understand and feel safe signing up?",
                  risk: "Category confusion, verification friction, unclear value",
                  step: "1",
                },
                {
                  icon: ArrowRightLeft,
                  label: "Transaction Trust",
                  question: "Do I feel in control sending money?",
                  risk: "Cognitive load, ambiguous confirmations, unfamiliar flows",
                  step: "2",
                },
                {
                  icon: Bell,
                  label: "Feedback Trust",
                  question: "Do I know what happened after my action?",
                  risk: "Missing confirmations, invisible status, irreversibility anxiety",
                  step: "3",
                },
              ].map((layer) => (
                <div key={layer.label} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-medium text-sm">{layer.step}</span>
                  </div>
                  <layer.icon className="h-6 w-6 text-accent mx-auto mb-3" />
                  <h3 className="text-foreground font-medium mb-2">{layer.label}</h3>
                  <p className="text-sm text-foreground italic mb-3">"{layer.question}"</p>
                  <p className="text-xs text-muted-foreground">{layer.risk}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6 text-center italic">
            This shifted the conversation from "does it work?" to "where does certainty collapse?"
          </p>
        </div>
      </section>

      {/* Research Approach */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h2 className="font-display text-xl md:text-2xl font-medium text-foreground mb-8">
              Research Approach
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Priority Flows
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Activation and identity verification</li>
                  <li>Adding funds for the first time</li>
                  <li>Domestic and international transfers</li>
                  <li>Payment utilities and social flows</li>
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
          </div>
        </div>
      </section>

      {/* How Synthesis Worked — Visual Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            How Synthesis Worked
          </h2>
          <p className="text-muted-foreground mb-8">
            Mapped every breakdown by adoption risk type, not UI opinion.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Brain,
                title: "Mental model failures",
                desc: "Users couldn't understand why multiple auth layers existed — perceived redundancy triggered drop-off.",
              },
              {
                icon: Layers,
                title: "Hierarchy failures",
                desc: "Key actions present but visually buried — users scanning past critical affordances.",
              },
              {
                icon: AlertTriangle,
                title: "Compliance friction",
                desc: "KYC felt intrusive, not protective — interface failed to frame verification as user benefit.",
              },
              {
                icon: MessageSquareWarning,
                title: "Feedback gaps",
                desc: "Uncertainty whether money arrived or actions were reversible — anxiety after every action.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <item.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="text-foreground font-medium text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6 italic">
            Prioritised by adoption risk severity, not comment volume. Product got a decision framework, not a backlog.
          </p>
        </div>
      </section>

      {/* What the Work Enabled — Compact Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            What the Work Enabled
          </h2>

          <div className="space-y-3">
            {[
              { title: "Trust signalling brought forward", desc: "Safety cues repositioned early in onboarding to reduce activation hesitation." },
              { title: "Security steps made legible", desc: "Multi-layer auth reframed from friction to visible protection." },
              { title: "Homepage hierarchy restructured", desc: "Action prominence redesigned to match scanning behaviour under load." },
              { title: "Transaction flows condensed", desc: "Perceived effort reduced where it exceeded actual complexity." },
              { title: "Feedback loops scaffolded", desc: "Confirmation patterns added to reduce first-use anxiety." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-foreground font-medium text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-foreground font-medium mt-8 text-sm">
            Framed as risk removals for launch readiness — not design tweaks.
          </p>
        </div>
      </section>

      {/* Why This Mattered */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Why This Mattered
          </h2>

          <blockquote className="border-l-4 border-accent pl-6 py-4">
            <p className="text-lg md:text-xl font-display text-foreground italic">
              "In high-trust products, the role of research is to find where certainty collapses — and make that actionable before the cost shifts from a research session to lost users at scale."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Reflection
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Next time, I would integrate lightweight behavioural tracking from the first testable build — capturing hesitation duration and task abandonment as quantitative inputs alongside moderated observation.
          </p>
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
