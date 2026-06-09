/*
 * DESIGN: Royal Apiary — The Honeycomb (Blog/Resources)
 * Magazine-style layout with staggered cards. Gold accents.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, Heart, Briefcase, BookOpen, Star, ExternalLink } from "lucide-react";
import HoneycombDivider from "@/components/HoneycombDivider";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const INSPIRATION_IMG = "/images/inspiration.jpg";
const CAREER_IMG = "/images/career.jpg";
const WELLNESS_IMG = "/images/devotional.jpg";
const HONEYCOMB_BG = "/images/honeycomb-bg.jpg";

const bookRecommendations = [
  {
    title: "Dare to Lead",
    author: "Brené Brown",
    cover: "/images/book-dare-to-lead.jpg",
    category: "Leadership",
    beeNote: "This book changed how I show up in every meeting. Brené teaches that vulnerability isn't weakness; it's the birthplace of innovation and trust. A must-read for any woman leading teams.",
    link: "https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520",
  },
  {
    title: "Lean In",
    author: "Sheryl Sandberg",
    cover: "/images/book-lean-in.jpg",
    category: "Career",
    beeNote: "Having worked in high tech, this one hits close to home. Sheryl's candid take on the internal barriers women face in the workplace helped me name things I'd been feeling for years.",
    link: "https://www.amazon.com/Lean-Women-Work-Will-Lead/dp/0385349947",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/images/book-atomic-habits.jpg",
    category: "Growth",
    beeNote: "Small, consistent actions create extraordinary results; just like bees building a hive one cell at a time. This book gave me a framework for the daily disciplines that compound over a career.",
    link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
  },
  {
    title: "The Confidence Code",
    author: "Katty Kay & Claire Shipman",
    cover: "/images/book-confidence-code.jpg",
    category: "Confidence",
    beeNote: "The science behind why women underestimate themselves and what to do about it. I wish I'd read this before my first board presentation. It would have saved me years of second-guessing.",
    link: "https://www.amazon.com/Confidence-Code-Science-Self-Assurance-What-Should/dp/006223062X",
  },
  {
    title: "Uninvited",
    author: "Lysa TerKeurst",
    cover: "/images/book-uninvited.jpg",
    category: "Inspiration",
    beeNote: "For every woman who has ever felt overlooked or not enough; this book is a balm. Lysa reminds us that rejection doesn't define us. I return to this one often.",
    link: "https://www.amazon.com/Uninvited-Living-Loved-When-Feel/dp/1400205875",
  },
  {
    title: "Nice Girls Don't Get the Corner Office",
    author: "Lois P. Frankel, PhD",
    cover: "/images/book-nice-girls.jpg",
    category: "Career",
    beeNote: "Lois identifies the unconscious mistakes that hold women back and I recognized myself in at least a dozen of them. Practical, no-nonsense advice that every professional woman needs.",
    link: "https://www.amazon.com/Nice-Girls-Dont-Corner-Office/dp/1455546046",
  },
  {
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    cover: "/images/book-purpose-driven.jpg",
    category: "Purpose",
    beeNote: "The book that reframed my entire career. When you understand that your work is part of a larger purpose, every spreadsheet, every meeting, every challenge takes on new meaning.",
    link: "https://www.amazon.com/Purpose-Driven-Life-What-Earth/dp/031033750X",
  },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const blogPosts = [
  {
    title: "When Intuition Whispers",
    excerpt: "That moment when a quarterly review became a turning point; and how I learned to listen for my inner voice in the most unlikely places.",
    category: "Inspiration",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    image: INSPIRATION_IMG,
    icon: <Heart className="w-3.5 h-3.5" />,
  },
  {
    title: "The Promotion That Almost Broke Me",
    excerpt: "Everyone celebrated when I got the title. Nobody saw the tears. Here's what I wish someone had told me about the cost of climbing.",
    category: "Career",
    date: "Feb 3, 2026",
    readTime: "7 min read",
    image: CAREER_IMG,
    icon: <Briefcase className="w-3.5 h-3.5" />,
  },
  {
    title: "Morning Honey: A 5-Minute Reflection for Busy Women",
    excerpt: "You don't need an hour of quiet time to center yourself. Sometimes five minutes and an open mind are more than enough.",
    category: "Wellness",
    date: "Jan 28, 2026",
    readTime: "3 min read",
    image: WELLNESS_IMG,
    icon: <BookOpen className="w-3.5 h-3.5" />,
  },
  {
    title: "Negotiating Your Worth: Lessons from the Hive",
    excerpt: "Bees don't apologize for making honey. Here's why you shouldn't apologize for knowing your value in compensation negotiations.",
    category: "Career",
    date: "Jan 20, 2026",
    readTime: "6 min read",
    image: CAREER_IMG,
    icon: <Briefcase className="w-3.5 h-3.5" />,
  },
  {
    title: "The Strength I Found During Layoffs",
    excerpt: "When the company restructured and my team was cut in half, I found resilience in the most unexpected places.",
    category: "Inspiration",
    date: "Jan 14, 2026",
    readTime: "4 min read",
    image: INSPIRATION_IMG,
    icon: <Heart className="w-3.5 h-3.5" />,
  },
  {
    title: "Building Your Personal Board of Directors",
    excerpt: "Every queen bee needs her council. How to identify, approach, and nurture the mentors who will shape your career.",
    category: "Career",
    date: "Jan 7, 2026",
    readTime: "8 min read",
    image: CAREER_IMG,
    icon: <Briefcase className="w-3.5 h-3.5" />,
  },
];

export default function Honeycomb() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-navy overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-honey/5 hex-clip" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
              The Honeycomb
            </span>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Free Resources & <span className="text-honey-light italic">Inspiration</span>
            </h1>
            <p className="text-cream/60 text-lg lg:text-xl leading-relaxed">
              Bite-sized wisdom, reflections, and career insights; fresh nectar from the hive, delivered with love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-cream border-b border-honey/10">
        <div className="container">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {["All", "Inspiration", "Career", "Wellness"].map((cat) => (
              <button
                key={cat}
                onClick={() => toast.info("Category filtering coming soon!")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  cat === "All"
                    ? "bg-navy text-cream"
                    : "bg-white text-charcoal/60 hover:bg-honey/10 hover:text-honey-dark border border-honey/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.title} delay={i * 100}>
                <article
                  onClick={() => toast.info("Full blog posts coming soon!")}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-honey/5 hover:shadow-xl hover:shadow-honey/10 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-honey/10 text-honey-dark text-xs font-semibold">
                        {post.icon}
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy mb-2 group-hover:text-honey-dark transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-charcoal/40">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Button
              variant="outline"
              className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-8 py-5 text-base"
              onClick={() => toast.info("More posts coming soon!")}
            >
              Load More Posts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Bee's Bookshelf */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">
              Bee's Bookshelf
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy mb-4">
              Books That Shaped My <span className="text-honey-dark italic">Journey</span>
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
              These are the books I return to again and again; the ones that challenged me, comforted me, and helped me build a career rooted in excellence and purpose.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {bookRecommendations.map((book, i) => (
              <FadeIn key={book.title} delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-honey/5 hover:shadow-xl hover:shadow-honey/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex gap-0">
                    {/* Book Cover */}
                    <div className="shrink-0 w-32 sm:w-36 relative overflow-hidden">
                      <img
                        src={book.cover}
                        alt={`${book.title} by ${book.author}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5" />
                    </div>

                    {/* Book Info */}
                    <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-honey/10 text-honey-dark text-xs font-semibold">
                            {book.category}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-bold text-navy leading-snug mb-0.5 group-hover:text-honey-dark transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-charcoal/50 text-xs mb-3">by {book.author}</p>
                        <div className="relative">
                          <p className="text-charcoal/60 text-sm leading-relaxed line-clamp-4">
                            <span className="text-honey-dark font-semibold">Bee's Take:</span>{" "}
                            {book.beeNote}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <a
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-honey-dark transition-colors"
                        >
                          View on Amazon
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-honey/8 border border-honey/15">
              <BookOpen className="w-4 h-4 text-honey-dark" />
              <p className="text-charcoal/60 text-sm">
                <span className="text-honey-dark font-semibold">Bee's reading list</span> is always growing. Check back for new additions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <HoneycombDivider />

      {/* Subscribe CTA */}
      <section className="py-16 lg:py-20 bg-navy">
        <div className="container">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Never Miss a Drop of Nectar
            </h2>
            <p className="text-cream/60 text-lg mb-8">
              Subscribe to get new posts delivered straight to your inbox every week.
            </p>
            <Link href="/join">
              <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base">
                Join the Swarm
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
