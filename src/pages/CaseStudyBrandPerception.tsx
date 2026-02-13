import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/case-study-brand-hero.jpg";

const CaseStudyBrandPerception = () => {
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
            <img src={heroImage} alt="Brand territory mapping visualisation" className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {["QSR Category", "Mixed Methods", "UAE"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Decoding Brand Preference in a Habit-Driven Category
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Identified why consumers default to competitors—and what positioning levers could shift habitual preference.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">The Problem</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Strong awareness but weak habitual preference. The client wasn't being rejected — they were being forgotten.
          </p>
          <p className="text-foreground font-medium mt-4">
            A mental availability problem in high-stakes social contexts.
          </p>
        </div>
      </section>

      {/* Role */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">My Role</h2>
          <p className="text-muted-foreground leading-relaxed">
            Shaped research focus toward decision contexts rather than generic brand attributes. Led synthesis across qualitative and quantitative inputs, moving the team from "what do people think of us" to "why aren't we the default."
          </p>
        </div>
      </section>

      {/* Approach — Stepper */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">Approach</h2>
          <div className="space-y-0">
            {[
              { step: "1", title: "Competitor association mapping", desc: "Emotional territories competitors already owned" },
              { step: "2", title: "Context-specific preference exploration", desc: "Group gatherings, solo comfort, celebration" },
              { step: "3", title: "Cultural identity testing", desc: "Whether regional origin could serve as differentiation" },
              { step: "4", title: "Quantitative prioritisation", desc: "Validated themes at scale to distinguish signal from noise" },
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

      {/* Key Insights */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">Key Insights</h2>
          <div className="space-y-4">
            {[
              { finding: "Category choice is driven by social risk, not taste.", shift: "Positioning needed group legitimacy, not just individual appeal." },
              { finding: "Competitors owned nostalgia. The client owned lightness and value.", shift: "Strategy shifted to doubling down on existing strengths." },
              { finding: "Regional origin increased affinity — but only when explicit.", shift: "Cultural origin surfaced as an underutilised differentiation lever." },
              { finding: "The barrier wasn't rejection — it was absence from consideration.", shift: "Salience-building prioritised over perception repair." },
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
              "Positioning framework: emotional territories to own vs. avoid",
              "Salience-building priorities for group decision contexts",
              "Cultural origin recommended as brand asset",
              "Strategy shifted from perception repair to mental availability",
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
            Next time, I'd integrate purchase occasion data earlier to quantify which decision moments offer the highest leverage for salience investment.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">Want to discuss brand strategy research or consumer decision-making?</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">Let's talk →</Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyBrandPerception;