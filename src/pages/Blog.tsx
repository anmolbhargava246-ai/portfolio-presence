import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const articles = [
  {
    id: 1,
    slug: "the-intern-mindset-problem",
    title: "The Intern Mindset Problem",
    subtitle:
      "Stop treating ChatGPT like an Oracle. It's actually just a mediocre intern.",
    body: `We've all felt it. That moment when ChatGPT's relentless politeness starts to feel hollow. It claps for your bad ideas. It cushions every flaw with praise. It tells you exactly what you want to hear, even when you're wrong.

After years in UX research and cognitive science, I've realized that AI doesn't have an "intelligence" problem. It has a mindset problem. It's like that intern who grinds mindlessly, pulls the data, and reformats the slides, but can't read the room. It confuses effort with understanding and mimicry with insight.

In this reflection, I explore the "The Second Brain Paradigm." Why does AI's version of empathy leave us feeling uneasy? And what is the "glue" that makes human thinking feel whole while AI remains stuck in an uncanny valley of politeness?

It's time to move past the hype and look at the "psychological side-eye" we're all giving our AI tools. Join me in the lab notebook.`,
    ctaText: "Read the full article",
    ctaUrl: "https://substack.com/home/post/p-172195769",
    metaTitle: "The Intern Mindset Problem | Anmol Bhargava",
    metaDescription:
      "A reflection on AI politeness, empathy mimicry, and the psychological limits of large language models.",
  },
  {
    id: 2,
    slug: "ai-emotional-intelligence-test",
    title:
      "AI just aced an Emotional Intelligence test. Why am I not impressed?",
    subtitle: "",
    body: `The headlines are everywhere: "AI is now more emotionally intelligent than humans." In a lab at the Université de Genève, the machines crushed the benchmarks. But as a psychologist, I can't help but feel a strong sense of déjà vu.

We've seen this before. In psychology, we call it the "W.E.I.R.D." problem. This refers to research that looks perfect in a controlled lab but falls apart in the messy, diverse reality of the real world. AI isn't showing empathy; it's showing obedience. It isn't feeling your pain; it's predicting the "polite" pattern you want to hear.

In this piece, I dive into why we shouldn't mistake a machine's performance for its presence. We look at the "People-Pleaser Problem" in LLMs and why the real danger isn't that AI is faking empathy. The real danger is that we might be foolish enough to believe it.

Is empathy just a pattern to be solved, or are we losing the "human" in the HCI equation? Let's look past the test scores.`,
    ctaText: "Read the full article",
    ctaUrl: "https://substack.com/home/post/p-172588778",
    metaTitle: "AI and Emotional Intelligence | Anmol Bhargava",
    metaDescription:
      "A psychological critique of AI emotional intelligence benchmarks and the WEIRD research problem.",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Thinking Space
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4">
              Ideas & Insights
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              Thoughts on design, development, productivity, and the craft of
              building digital products. A space for exploration and learning.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="h-full bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8 space-y-4 flex flex-col h-full">
                  <h2 className="font-display text-xl md:text-2xl font-medium text-foreground">
                    {article.title}
                  </h2>

                  {article.subtitle && (
                    <p className="text-accent font-medium text-sm">
                      {article.subtitle}
                    </p>
                  )}

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-6 flex-grow">
                    {article.body}
                  </p>

                  <div className="pt-4">
                    <a
                      href={article.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${article.ctaText} — ${article.title} (opens in new tab)`}
                      className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                    >
                      {article.ctaText}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
