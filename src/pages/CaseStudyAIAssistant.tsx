import { Link } from "react-router-dom";
import { ArrowLeft, Gauge, Brain, ShieldAlert, HelpCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudyAIAssistant = () => {
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
            {["Tech/AI", "Trust & Safety", "Mental Models", "Generative Research"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Understanding How Knowledge Workers Decide When to Trust AI
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Independent behavioural study exploring mental models, trust calibration, and reliance patterns in AI-powered productivity tools.
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
              Trust in AI is often miscalibrated. People either over-rely on confident outputs or under-use tools they don't understand.
            </p>

            <p className="text-foreground font-medium">
              The real question: What makes an AI assistant feel trustworthy in the moment?
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
            Led end-to-end: framing research questions, designing tasks, moderating sessions, and synthesising behavioural patterns. Focused on how trust forms and breaks during real knowledge work, not just on usability.
          </p>
        </div>
      </section>

      {/* Approach — Visual: Stakes Spectrum */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            Approach
          </h2>
          <p className="text-muted-foreground mb-8">
            Tasks designed across a stakes spectrum to surface how trust shifts with consequence:
          </p>

          {/* Visual: Stakes Spectrum */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Low stakes</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">High stakes</span>
            </div>
            <div className="relative h-2 bg-secondary rounded-full mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/50 to-accent rounded-full" />
              <div className="absolute left-[15%] -top-1 w-4 h-4 bg-accent/30 border-2 border-accent rounded-full" />
              <div className="absolute left-[50%] -top-1 w-4 h-4 bg-accent/60 border-2 border-accent rounded-full" />
              <div className="absolute left-[85%] -top-1 w-4 h-4 bg-accent border-2 border-accent rounded-full" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-foreground text-sm font-medium">Quick edits</p>
                <p className="text-muted-foreground text-xs">Accepted without scrutiny</p>
              </div>
              <div>
                <p className="text-foreground text-sm font-medium">Analysis tasks</p>
                <p className="text-muted-foreground text-xs">Selective verification</p>
              </div>
              <div>
                <p className="text-foreground text-sm font-medium">Sensitive decisions</p>
                <p className="text-muted-foreground text-xs">External validation sought</p>
              </div>
            </div>
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
                  <li>Trust calibration and over-reliance</li>
                  <li>Mental models of AI assistants</li>
                  <li>Verification behaviour under pressure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Methods</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Remote moderated sessions</li>
                  <li>Task-based trust observation</li>
                  <li>Comparative response testing</li>
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

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { icon: Gauge, finding: "Trust was about legibility, not accuracy.", detail: "Users trusted outputs that felt aligned with their intent, even before verifying." },
              { icon: Brain, finding: "Confidence created over-reliance.", detail: "Fluent responses accepted without scrutiny in low-effort tasks." },
              { icon: ShieldAlert, finding: "Trust collapsed in high-stakes contexts.", detail: "Money, conflict, sensitive judgement — users sought external validation." },
              { icon: HelpCircle, finding: "Users wanted verification support, not better answers.", detail: "Missing sourcing and uncertainty cues made trust fragile." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <item.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-muted-foreground text-xs">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Mental Models Visual */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-foreground font-medium text-sm mb-4">Mental models shaped behaviour more than experience</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { model: "Autocomplete", reliance: "High, unquestioning" },
                { model: "Advisor", reliance: "Moderate, selective" },
                { model: "Authority", reliance: "Deference + anxiety" },
              ].map((m) => (
                <div key={m.model} className="text-center bg-secondary/50 rounded-lg p-3">
                  <p className="text-foreground text-sm font-medium">{m.model}</p>
                  <p className="text-muted-foreground text-xs mt-1">{m.reliance}</p>
                </div>
              ))}
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

          <p className="text-muted-foreground leading-relaxed">
            Produced a behavioural framework for calibrated trust in AI assistants — highlighting cues that drive reliance, hesitation, and responsible use in productivity workflows.
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Reflection
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Trust in AI is not a static perception — it is a moment-by-moment decision. Designing trustworthy AI requires helping users understand when to rely, when to question, and when to stay in control.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            If you're building AI products where trust and human judgement matter, let's talk.
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

export default CaseStudyAIAssistant;
