import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Tech/AI
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Trust & Safety
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Mental Models
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Generative Research
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Understanding How Knowledge Workers Decide When to Trust AI
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            An independent behavioural study exploring mental models, trust calibration, and reliance patterns in AI-powered productivity tools.
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
              AI assistants are quickly becoming embedded in everyday work.
            </p>

            <p>
              But trust in these systems is often miscalibrated. People either over-rely on confident outputs or under-use tools they don't fully understand.
            </p>

            <p>
              The challenge isn't adoption alone.<br />
              It's understanding the behavioural cues that shape when users delegate, verify, or disengage.
            </p>

            <p className="text-foreground font-medium">
              The real question was:<br />
              What makes an AI assistant feel trustworthy in the moment?
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
              I led this study independently end-to-end, from framing the research questions to designing tasks, moderating sessions, and synthesising behavioural patterns.
            </p>

            <p>
              The focus was not just on usability, but on how trust forms and breaks during real knowledge work.
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
                  <li>Trust calibration and over-reliance</li>
                  <li>User mental models of AI assistants</li>
                  <li>Verification behaviour under pressure</li>
                  <li>Decision-making in high-stakes moments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Methods
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Remote moderated sessions</li>
                  <li>Task-based trust observation</li>
                  <li>Comparative response testing</li>
                  <li>Thematic synthesis of trust cues</li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Sample
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Knowledge workers using AI tools regularly</li>
                  <li>Mixed familiarity levels across roles</li>
                </ul>
              </div>
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

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Rather than studying AI trust as a vague attitude, I focused on specific behavioural moments:
            </p>

            <ul className="space-y-2 pl-4">
              <li>When do users accept AI instantly?</li>
              <li>When do they pause and verify?</li>
              <li>When does confidence become a liability?</li>
            </ul>

            <p>
              Tasks were designed across low, medium, and high-stakes scenarios to surface how trust shifts depending on consequence, ambiguity, and perceived risk.
            </p>

            <p>
              This kept the research centred on decision-making, not feature feedback.
            </p>
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
              <h3 className="text-lg font-medium text-foreground mb-3">
                Trust was rarely about accuracy alone.
              </h3>
              <p className="text-muted-foreground">
                Users trusted AI most when outputs felt legible and aligned with their intent, even before verification.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Confidence often created over-reliance.
              </h3>
              <p className="text-muted-foreground">
                Highly fluent responses were frequently accepted without scrutiny, especially in low-effort productivity tasks.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4 my-12">
              <p className="text-xl md:text-2xl font-display text-foreground italic">
                "Trust collapsed in high-stakes contexts. When decisions involved money, workplace conflict, or sensitive judgement, users became far more sceptical and sought external validation."
              </p>
            </blockquote>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Mental models shaped behaviour more than experience.
              </h3>
              <p className="text-muted-foreground">
                Some users treated AI as autocomplete, others as an advisor, and a few as an authority. These models predicted reliance patterns.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Users wanted support for verification, not just better answers.
              </h3>
              <p className="text-muted-foreground">
                The absence of sourcing, boundaries, or uncertainty cues made trust feel fragile.
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
            <p>
              The study resulted in a clear behavioural framework for calibrated trust in AI assistants, highlighting the cues that drive reliance, hesitation, and responsible use in productivity workflows.
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
              This project reinforced that trust in AI is not a static perception.<br />
              It is a moment-by-moment decision.
            </p>

            <p>
              Designing trustworthy AI systems requires more than accuracy.<br />
              It requires helping users understand when to rely, when to question, and when to stay in control.
            </p>
          </div>
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
