import { Layout } from "@/components/layout/Layout";

const articles = [
  {
    id: 1,
    title: "The Intern Mindset Problem",
    subtitle: "Stop treating ChatGPT like an oracle. It's actually just a mediocre intern.",
    body: `We've all felt it. That moment when ChatGPT's relentless politeness starts to feel hollow. It claps for your bad ideas. It cushions every flaw with praise. It tells you exactly what you want to hear, even when you're wrong.

After years in UX research and cognitive science, I've come to believe that AI doesn't have an intelligence problem. It has a mindset problem. It's like the intern who grinds mindlessly, pulls the data, and reformats the slides, but can't read the room. It confuses effort with understanding, and mimicry with insight.`,
    ctaUrl: "https://substack.com/home/post/p-172195769",
  },
  {
    id: 2,
    title: "The Emotional Intelligence Illusion",
    subtitle: "AI just aced an emotional intelligence test. Why I'm not impressed.",
    body: `The headlines are everywhere: "AI is now more emotionally intelligent than humans." In a lab at the Université de Genève, the machines crushed the benchmarks. As a psychologist, I get a strong sense of déjà vu.

We've seen this before. In psychology we call it the W.E.I.R.D. problem — research that looks perfect in a controlled lab but falls apart in the messy, diverse reality of the real world. AI isn't showing empathy; it's showing obedience. It isn't feeling your pain; it's predicting the polite pattern you want to hear.`,
    ctaUrl: "https://substack.com/home/post/p-172588778",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="container-page">
        <h1 className="h1">Thinking</h1>
        <p className="subtitle">
          Short essays on behavioural research, trust, and the slippery places where psychology
          meets product.
        </p>

        <div className="project-index">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-index-item"
            >
              <div className="project-index-title">{article.title}</div>
              <div className="capability-desc" style={{ marginBottom: "0.75rem" }}>
                {article.subtitle}
              </div>
              <div className="prose-text" style={{ color: "var(--color-text-secondary)", fontSize: 15 }}>
                {article.body.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  fontSize: 13,
                  color: "var(--color-text-tertiary)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Read full essay
                <i className="ti ti-arrow-up-right" aria-hidden="true"></i>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
