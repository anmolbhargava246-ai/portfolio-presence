import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/case-study-wallet-hero.jpg";

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

      {/* Hero Image */}
      <section className="py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl overflow-hidden">
            <img src={heroImage} alt="Abstract fintech trust layers" className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto max-w-3xl">
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
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">
            The Problem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Feature-complete product approaching launch. Unresolved risk: whether users would feel confident enough to activate, transact, and return.
          </p>
          <p className="text-foreground font-medium mt-4">
            "What will prevent activation, completion, and repeat use in the first week?"
          </p>
        </div>
      </section>

      {/* My Role */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">
            My Role
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Shaped the behavioural framing — defining highest-risk journeys, structuring task scenarios around intent, and leading synthesis that converted session data into prioritised launch decisions.
          </p>
        </div>
      </section>

      {/* Framing the Risk — Trust Layer Visual */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            Framing the Risk
          </h2>
          <p className="text-muted-foreground mb-8">
            Three sequential trust layers. Each must succeed for the next to matter.
          </p>

          {/* Trust Flow Diagram */}
          <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-stretch gap-0">
              {[
                { step: "1", label: "Entry Trust", question: "Do I feel safe signing up?", color: "bg-accent/10" },
                { step: "2", label: "Transaction Trust", question: "Do I feel in control sending money?", color: "bg-accent/20" },
                { step: "3", label: "Feedback Trust", question: "Do I know what happened?", color: "bg-accent/30" },
              ].map((layer, i, arr) => (
                <div key={layer.label} className="flex-1 flex flex-col md:flex-row items-center">
                  <div className={`${layer.color} rounded-xl p-5 text-center flex-1 w-full`}>
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-accent font-medium text-sm">{layer.step}</span>
                    </div>
                    <h3 className="text-foreground font-medium text-sm mb-1">{layer.label}</h3>
                    <p className="text-muted-foreground text-xs italic">"{layer.question}"</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="text-accent text-xl font-light py-2 md:px-3 md:py-0">→</div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center italic">
              Shifted the conversation from "does it work?" to "where does certainty collapse?"
            </p>
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
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Priority Flows</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Activation and identity verification</li>
                  <li>Adding funds for the first time</li>
                  <li>Domestic and international transfers</li>
                  <li>Payment utilities and social flows</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Analysis Lenses</h3>
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

      {/* Synthesis — Risk Matrix Visual */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            How Synthesis Worked
          </h2>
          <p className="text-muted-foreground mb-8">
            Mapped every breakdown by adoption risk type, not UI opinion.
          </p>

          {/* Risk Priority Matrix */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
              {[
                { title: "Mental model failures", severity: "Critical", desc: "Users couldn't understand multi-layer auth" },
                { title: "Hierarchy failures", severity: "High", desc: "Key actions visually buried" },
                { title: "Compliance friction", severity: "High", desc: "KYC felt intrusive, not protective" },
                { title: "Feedback gaps", severity: "Critical", desc: "Uncertainty whether money arrived" },
              ].map((item) => (
                <div key={item.title} className="bg-card p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${item.severity === 'Critical' ? 'bg-destructive' : 'bg-accent'}`} />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.severity}</span>
                  </div>
                  <h3 className="text-foreground font-medium text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic text-center">
              Prioritised by adoption risk severity, not comment volume.
            </p>
          </div>
        </div>
      </section>

      {/* What the Work Enabled */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            What the Work Enabled
          </h2>
          <div className="space-y-3">
            {[
              { title: "Trust signalling brought forward", desc: "Safety cues repositioned early in onboarding." },
              { title: "Security steps made legible", desc: "Multi-layer auth reframed from friction to visible protection." },
              { title: "Homepage hierarchy restructured", desc: "Action prominence redesigned to match scanning behaviour." },
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
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">
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