import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/case-study-ai-hero.jpg";

const CaseStudyAIAssistant = () => {
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
            <img src={heroImage} alt="Neural network trust calibration" className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Tech/AI", "Trust & Safety", "Mental Models", "Generative Research"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Understanding How Knowledge Workers Decide When to Trust AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Behavioural study exploring mental models, trust calibration, and reliance patterns in AI-powered productivity tools.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">The Problem</h2>
          <p className="text-lg text-muted-foreground">
            People either over-rely on confident outputs or under-use tools they don't understand.
          </p>
          <p className="text-foreground font-medium mt-4">
            What makes an AI assistant feel trustworthy in the moment?
          </p>
        </div>
      </section>

      {/* Role */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">My Role</h2>
          <p className="text-muted-foreground leading-relaxed">
            Led end-to-end: framing research questions, designing tasks, moderating sessions, and synthesising behavioural patterns around how trust forms and breaks during real knowledge work.
          </p>
        </div>
      </section>

      {/* Stakes Spectrum — Visual */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">Approach</h2>
          <p className="text-muted-foreground mb-8">Tasks designed across a stakes spectrum to surface how trust shifts with consequence:</p>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Low stakes</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">High stakes</span>
            </div>
            <div className="relative h-3 bg-secondary rounded-full mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/50 to-accent rounded-full" />
              <div className="absolute left-[15%] -top-0.5 w-4 h-4 bg-accent/30 border-2 border-accent rounded-full" />
              <div className="absolute left-[50%] -top-0.5 w-4 h-4 bg-accent/60 border-2 border-accent rounded-full" />
              <div className="absolute left-[85%] -top-0.5 w-4 h-4 bg-accent border-2 border-accent rounded-full" />
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

      {/* Mental Models — Visual */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">Mental Models</h2>
          <p className="text-muted-foreground mb-6">Users operated from three distinct mental models — each producing different reliance patterns:</p>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-border">
              {[
                { model: "Autocomplete", reliance: "High, unquestioning", risk: "Over-reliance on fluent outputs", color: "bg-accent/5" },
                { model: "Advisor", reliance: "Moderate, selective", risk: "Appropriate calibration", color: "bg-accent/10" },
                { model: "Authority", reliance: "Deference + anxiety", risk: "Abdication of judgement", color: "bg-accent/20" },
              ].map((m) => (
                <div key={m.model} className={`${m.color} p-5 text-center`}>
                  <h3 className="text-foreground font-medium text-sm mb-2">{m.model}</h3>
                  <p className="text-muted-foreground text-xs mb-2">{m.reliance}</p>
                  <p className="text-accent text-xs italic">{m.risk}</p>
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
              { finding: "Trust was about legibility, not accuracy.", shift: "Users trusted outputs that felt aligned with their intent, even before verifying." },
              { finding: "Confidence created over-reliance.", shift: "Fluent responses accepted without scrutiny in low-effort tasks." },
              { finding: "Trust collapsed in high-stakes contexts.", shift: "Money, conflict, sensitive judgement — users sought external validation." },
              { finding: "Users wanted verification support, not better answers.", shift: "Missing sourcing and uncertainty cues made trust fragile." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-muted-foreground text-xs">{item.shift}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">Reflection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Trust in AI is not a static perception — it is a moment-by-moment decision. Designing trustworthy AI requires helping users understand when to rely, when to question, and when to stay in control.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">If you're building AI products where trust and human judgement matter, let's talk.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">Let's talk →</Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyAIAssistant;