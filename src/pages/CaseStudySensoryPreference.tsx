import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/case-study-sensory-hero.jpg";

const CaseStudySensoryPreference = () => {
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
            <img src={heroImage} alt="Flowing dairy textures" className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Dairy Category", "Default Preference", "Saudi Arabia"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Identifying What Creates Default Preference in a High-Frequency Staple Category
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Clarified why consumers return to certain laban products without deliberation — and what sensory cues must be protected for habitual repurchase.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">The Problem</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In high-frequency, low-deliberation categories, preference is rarely conscious. The risk: losing trust in ways that wouldn't surface until purchase shifted.
          </p>
          <p className="text-foreground font-medium mt-4">
            What sensory and emotional cues create default preference — and what would quietly erode it?
          </p>
        </div>
      </section>

      {/* Role */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">My Role</h2>
          <p className="text-muted-foreground leading-relaxed">
            Reframed the study from flavour benchmarking toward behavioural drivers of habit and trust. Led synthesis across taste testing, qualitative discussion, and competitor mapping.
          </p>
        </div>
      </section>

      {/* Sensory Trust Model — Visual */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">Sensory Trust Model</h2>

          {/* Visual: Sensory signal flow */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-4 gap-3 mb-6">
              {[
                { signal: "Visual", cue: "Whiteness, consistency", role: "Sets expectation" },
                { signal: "Texture", cue: "Thickness, smoothness", role: "Confirms quality" },
                { signal: "Taste", cue: "Balanced sourness", role: "Validates choice" },
                { signal: "Aftertaste", cue: "Lingering finish", role: "Drives repurchase" },
              ].map((item, i, arr) => (
                <div key={item.signal} className="text-center">
                  <div className={`w-full h-2 rounded-full mb-3`} style={{ background: `hsl(35 90% ${65 - i * 8}%)` }} />
                  <h3 className="text-foreground font-medium text-xs mb-1">{item.signal}</h3>
                  <p className="text-muted-foreground text-xs leading-tight">{item.cue}</p>
                  <p className="text-accent text-xs mt-1 italic">{item.role}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span>First impression</span>
              <span className="flex-1 h-px bg-accent/20" />
              <span>Habit formation</span>
            </div>
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
            <footer className="mt-4 text-sm text-muted-foreground">— Participant, Riyadh focus group</footer>
          </blockquote>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">Key Insights</h2>
          <div className="space-y-4">
            {[
              { finding: "Authenticity is a sensory judgement, not a marketing claim.", shift: "Positioning shifted to sensory authenticity cues." },
              { finding: "Texture operates as a trust signal.", shift: "Product optimisation prioritised consistency over intensity." },
              { finding: "Aftertaste drives repurchase, not trial.", shift: "Recipe development focused on aftertaste as the primary loyalty lever." },
              { finding: "Visual cues shape expectation before tasting.", shift: "Visual consistency added to quality control priorities." },
              { finding: "Habitual preference resists conscious comparison.", shift: "Competitive strategy separated trial-focused tactics from habit-protection." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-accent text-xs font-medium">→ {item.shift}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">Output and Impact</h2>
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
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">Reflection</h2>
          <p className="text-foreground font-medium text-sm">
            Next time, I'd integrate pack-level cue testing earlier and pair findings with purchase frequency data to quantify commercial weight.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">If you're building products where trust is sensory and habit-based, let's talk.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">Get in touch →</Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudySensoryPreference;