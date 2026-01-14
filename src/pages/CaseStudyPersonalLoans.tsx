import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudyPersonalLoans = () => {
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
              FinTech
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Personal Loans
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Foundational + Evaluative Research
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Contract Role
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Understanding Why Users Hesitate to Take Personal Loans Digitally
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            A foundational and evaluative study exploring trust, decision making, and UX friction in a large Indian FinTech product.
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
              Despite a technically seamless product, adoption of digital personal loans was low.
            </p>

            <p>
              The team believed speed and convenience were the main drivers. What they lacked was a clear understanding of how users think about borrowing money, where trust breaks down, and how product language and flow amplify hesitation.
            </p>

            <p className="text-foreground font-medium">
              This wasn't just a usability issue.<br />
              It was a behavioural one.
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
              I was the primary researcher on this project, responsible for shaping the research strategy, conducting foundational interviews, running usability evaluations, and translating insights into product and marketing direction.
            </p>

            <p>
              I worked closely with product and marketing teams to ensure insights informed both UX changes and adoption strategy.
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
                  Methods
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>In-depth interviews</li>
                  <li>Usability testing</li>
                  <li>Jobs to be Done analysis</li>
                  <li>Journey mapping</li>
                  <li>Cognitive load analysis</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Participants
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Loan users</li>
                  <li>Applied but dropped off</li>
                  <li>Credit users who avoided loans</li>
                  <li>Tier 1, Tier 2, Tier 3 cities</li>
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
              The study combined behavioural exploration with hands-on usability evaluation.
            </p>

            <p>
              I focused on understanding not just where users dropped off, but what beliefs, fears, and mental models shaped their willingness to borrow digitally.
            </p>

            <p>
              The goal was to uncover both why people hesitate and where the product unintentionally increased that hesitation.
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
                Users didn't distrust loans. They distrusted ambiguity.
              </h3>
              <p className="text-muted-foreground">
                Hidden charges, unclear repayment terms, and vague language triggered hesitation more than interest rates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Speed mattered, but only after trust was established.
              </h3>
              <p className="text-muted-foreground">
                Fast approval was attractive, but not at the cost of clarity or perceived risk.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4 my-12">
              <p className="text-xl md:text-2xl font-display text-foreground italic">
                "High cognitive load amplified anxiety. Complex forms and dense information during KYC made users second-guess their decision mid-flow."
              </p>
            </blockquote>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Borrowing was emotional, not transactional.
              </h3>
              <p className="text-muted-foreground">
                First-time borrowers relied heavily on family and peer validation before committing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Impact
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Research informed over ten UX improvements across the loan journey and shaped a clearer roadmap for future updates.
            </p>

            <p>
              Insights were also used to refine marketing messaging and customer segmentation strategies.
            </p>

            <p>
              Post changes, the client reported improved user retention and a significant increase in digital loan disbursals over the following year.
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
              This project reinforced that trust is not just a UX problem, but a product, brand, and organisational one.
            </p>

            <p>
              With more experience now, I would push for earlier triangulation with behavioural data and stronger longitudinal follow-ups to understand how trust evolves over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want to talk about behavioural research, trust, or decision making in products?
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

export default CaseStudyPersonalLoans;
