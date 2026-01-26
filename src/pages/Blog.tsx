import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const categories = ["All", "Human–AI Systems", "Product Strategy", "Research Thinking", "Enterprise & Platforms", "Work & Careers"];

const posts = [
  {
    id: 1,
    slug: "building-design-systems",
    title: "Building Design Systems That Scale",
    excerpt:
      "A practical guide to creating and maintaining design systems that grow with your organization.",
    category: "Design",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    slug: "typescript-patterns",
    title: "TypeScript Patterns for React Applications",
    excerpt:
      "Exploring advanced TypeScript patterns that make React development more enjoyable and type-safe.",
    category: "Development",
    date: "Dec 8, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 3,
    slug: "remote-work-tips",
    title: "Thriving as a Remote Developer",
    excerpt:
      "Lessons learned from years of working remotely: productivity, communication, and work-life balance.",
    category: "Career",
    date: "Nov 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 4,
    slug: "accessibility-fundamentals",
    title: "Web Accessibility Fundamentals",
    excerpt:
      "Making the web accessible to everyone: practical tips for building inclusive digital experiences.",
    category: "Development",
    date: "Nov 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 5,
    slug: "second-brain-system",
    title: "Building a Second Brain for Developers",
    excerpt:
      "How I organize my notes, bookmarks, and learnings using a personal knowledge management system.",
    category: "Productivity",
    date: "Nov 5, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    featured: false,
  },
];

const Blog = () => {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

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

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-background">
          <div className="container mx-auto">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block"
            >
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 space-y-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Categories & Posts */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <h3 className="font-display text-lg font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
              Subscribe to Updates
            </h2>
            <p className="text-muted-foreground">
              Get notified when I publish new articles. No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
