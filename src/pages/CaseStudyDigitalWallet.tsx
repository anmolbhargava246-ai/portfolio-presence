import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
          {/* Bold Category Visual */}
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
            A pre-launch usability programme focused on identifying where trust, comprehension, and task momentum break down in real transaction flows.
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
              In fintech, usability is not about preference.<br />
              It is about whether users feel confident enough to proceed.
            </p>

            <p>
              The product was approaching launch with a broad set of features, but one unresolved challenge:
            </p>

            <p className="text-foreground font-medium italic">
              Which parts of the experience create hesitation, misinterpretation, or abandonment when real money is involved?
            </p>

            <p>
              So the work wasn't framed as "test the interface".<br />
              It was framed as:
            </p>

            <p className="text-foreground font-medium">
              What could prevent activation, completion, and repeat use in the first week?
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
              I worked as a UX researcher on a moderated usability initiative designed to stress-test the product under real behavioural conditions.
            </p>

            <p>I contributed across:</p>

            <ul className="space-y-2 pl-4">
              <li>Defining the highest-risk journeys to test</li>
              <li>Structuring task scenarios around user intent, not screens</li>
              <li>Moderation support and behavioural probing</li>
              <li>Synthesising breakdowns into prioritised product actions</li>
            </ul>

            <p className="text-foreground font-medium">
              The core responsibility was turning messy user behaviour into clear launch decisions.
            </p>
          </div>
        </div>
      </section>

      {/* How I Structured the Problem */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            How I Structured the Problem
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Rather than treating the wallet as one experience, I broke it into three behavioural systems:
            </p>

            <div className="space-y-4 mt-6">
              <div>
                <h3 className="text-foreground font-medium">1. Entry trust</h3>
                <p>Do users understand what this product is, and feel safe signing up?</p>
              </div>

              <div>
                <h3 className="text-foreground font-medium">2. Transaction trust</h3>
                <p>Do users feel in control when adding or sending money?</p>
              </div>

              <div>
                <h3 className="text-foreground font-medium">3. Feedback trust</h3>
                <p>Do users receive enough confirmation and visibility after actions?</p>
              </div>
            </div>

            <p className="mt-6">
              This framing helped us avoid surface-level UI critique and focus on adoption mechanics.
            </p>
          </div>
        </div>
      </section>

      {/* Research Snapshot */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h2 className="font-display text-xl md:text-2xl font-medium text-foreground mb-8">
              Research Design
            </h2>

            <p className="text-muted-foreground mb-8">
              To solve for launch readiness, we tested only what could realistically block adoption:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Priority Flows
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Activation and verification</li>
                  <li>Adding funds</li>
                  <li>Domestic and international transfers</li>
                  <li>Payment utilities and social flows</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Analysis Lenses
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Satisfaction</li>
                  <li>Efficiency</li>
                  <li>Memorability</li>
                  <li>Confusion</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground italic">
                The goal was not to collect opinions.<br />
                It was to observe failure points under cognitive load.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Approached Synthesis */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            How I Approached Synthesis
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              The most important work happened after sessions.
            </p>

            <p>
              Instead of reporting "users disliked X", I mapped issues into decision categories:
            </p>
          </div>

          <div className="space-y-6 mt-8">
            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="text-foreground font-medium mb-2">Breakdowns caused by unclear mental models</h3>
              <p className="text-muted-foreground text-sm">
                Example: users not understanding why multiple authentication layers exist.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="text-foreground font-medium mb-2">Breakdowns caused by missing hierarchy</h3>
              <p className="text-muted-foreground text-sm">
                Example: key actions present, but visually non-prominent during scanning.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="text-foreground font-medium mb-2">Breakdowns caused by compliance friction</h3>
              <p className="text-muted-foreground text-sm">
                Example: KYC steps feeling intrusive without user benefit framing.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="text-foreground font-medium mb-2">Breakdowns caused by weak system feedback</h3>
              <p className="text-muted-foreground text-sm">
                Example: uncertainty around notifications, completion, and request visibility.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mt-8">
            This allowed prioritisation based on adoption risk, not volume of comments.
          </p>
        </div>
      </section>

      {/* Highlighted Quote */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <blockquote className="border-l-4 border-accent pl-6 py-4">
            <p className="text-xl md:text-2xl font-display text-foreground italic">
              "In high-trust products, the job of UX research is to find where certainty collapses—and to make that actionable before launch."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Output */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            What the Work Produced
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The output was a launch-facing set of product decisions focused on:
            </p>

            <ul className="space-y-3 pl-4">
              <li>Clarifying category and trust cues early in onboarding</li>
              <li>Making security steps legible rather than redundant</li>
              <li>Reducing cognitive load through action hierarchy on the homepage</li>
              <li>Scaffolding new features with lightweight explanation and feedback loops</li>
              <li>Condensing long transactional flows where perceived effort was high</li>
            </ul>

            <p className="text-foreground font-medium mt-6">
              These were framed as risk removals, not design tweaks.
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
              A wallet does not earn adoption through feature breadth.<br />
              It earns adoption through behavioural confidence.
            </p>

            <p>
              This project reinforced a core principle:
            </p>

            <p className="text-foreground font-medium">
              In high-trust products, the job of UX research is to find where certainty collapses, and to make that actionable before launch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            If you're building financial products where trust is the conversion funnel, I enjoy working at that edge.
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
