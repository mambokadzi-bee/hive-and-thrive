import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Heart, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import HoneycombDivider from "@/components/HoneycombDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { toast } from "sonner";

const BOOK_COVER = "/images/book-cover.jpg";

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

const parts = [
  {
    number: "Part I",
    title: "The Making of a Nice Girl",
    desc: "Where it starts. Learning early that being good, quiet, and agreeable was the price of belonging.",
    color: "from-honey/20 to-honey/5",
  },
  {
    number: "Part II",
    title: "The Cost of Keeping the Peace",
    desc: "Twenty years in corporate finance. The late nights, the yes-when-I-meant-no, the slow disappearing.",
    color: "from-navy/10 to-navy/5",
  },
  {
    number: "Part III",
    title: "The Awakening",
    desc: "The moment things stopped adding up. When being nice stopped feeling like a virtue and started feeling like a cage.",
    color: "from-honey/20 to-honey/5",
  },
  {
    number: "Part IV",
    title: "Hard-Won Freedom",
    desc: "What comes after. Not a clean resolution. Something more honest than that.",
    color: "from-navy/10 to-navy/5",
  },
];

export default function TheBook() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("You're on the list! We'll let you know the moment the book is available.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 pb-0 bg-[oklch(0.97_0.01_60)] overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-0 left-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-16 lg:pt-20">

            {/* Book Cover */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-honey/10 blur-2xl rounded-2xl" />
                <div className="absolute -inset-1 bg-gradient-to-br from-honey/20 to-transparent rounded-2xl" />
                <img
                  src={BOOK_COVER}
                  alt="I Thought I Was Just Nice: A Memoir of Becoming Whole by Blessing (Bee) Nyamolo"
                  className="relative w-[240px] sm:w-[280px] lg:w-[320px] rounded-xl shadow-2xl shadow-honey/20"
                  style={{ rotate: "-2deg" }}
                />
              </div>
            </motion.div>

            {/* Title & CTA */}
            <div className="flex-1 text-center lg:text-left pb-12 lg:pb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/15 text-honey-dark text-sm font-medium tracking-wide border border-honey/20 mb-5">
                  <BookOpen className="w-3.5 h-3.5" />
                  A Memoir of Becoming Whole
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] mb-2"
              >
                I Thought I Was
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] mb-2"
              >
                Just{" "}
                <span className="relative inline-block">
                  <span className="gold-shimmer italic">Nice</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                    <path d="M0,5 Q25,0 50,5 Q75,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" className="text-honey" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-honey-dark font-medium tracking-wide mt-4 mb-6 text-lg"
              >
                by Blessing (Bee) Nyamolo
              </motion.p>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="font-display text-lg lg:text-xl text-charcoal/70 italic leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 border-l-4 border-honey pl-5"
              >
                "For the woman who has been excellent her whole life and exhausted for just as long. This one is for you."
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {!submitted ? (
                  <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-5 py-3.5 rounded-lg bg-white border border-honey/20 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-honey/60 focus:ring-1 focus:ring-honey/30 transition-all text-sm shadow-sm"
                    />
                    <Button type="submit" className="bg-honey hover:bg-honey-dark text-navy font-semibold px-6 py-3.5 shadow-lg shadow-honey/20 transition-all duration-300 whitespace-nowrap">
                      Notify Me <ArrowRight className="ml-1.5 w-4 h-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center gap-3 text-honey-dark font-medium">
                    <div className="w-8 h-8 rounded-full bg-honey/20 flex items-center justify-center">
                      <Heart className="w-4 h-4 fill-honey text-honey" />
                    </div>
                    You're on the list. We'll reach out as soon as it's available.
                  </div>
                )}
                <p className="text-charcoal/40 text-xs mt-3">Be first to know when the book is available. No spam, ever.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* About the Book */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-12">
              <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">About the Book</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">
                What It's About
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="space-y-5 text-charcoal/70 text-lg leading-relaxed">
                <p>
                  For over twenty years, Bee worked in corporate finance at some of the largest companies in the world. She stayed late. She said yes when she meant no. She made rooms comfortable, even when she wasn't.
                </p>
                <p>
                  She thought she was just nice. She was also exhausted.
                </p>
                <p>
                  This memoir traces the moments Bee gave herself away in the name of professionalism and peace, and the slow reckoning that followed. It is honest, specific, and at times uncomfortably familiar.
                </p>
                <p>
                  It is a confession from a woman whose understanding of herself was incomplete — and the quiet, hard-won journey back to who she always was.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="mt-10">
              <div className="p-8 bg-navy rounded-2xl">
                <p className="font-display text-xl lg:text-2xl text-cream/90 italic leading-relaxed mb-4">
                  "Performance is not peace. It is the price you pay to borrow it."
                </p>
                <p className="text-honey/70 text-sm">— From Chapter 2, <em>I Thought I Was Just Nice</em></p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* The Four Parts */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">Inside the Book</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">The Journey</h2>
            <p className="text-charcoal/60 text-lg max-w-xl mx-auto mt-3">Four parts. One story. You'll probably recognise parts of it.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {parts.map((part, i) => (
              <FadeIn key={part.number} delay={i * 100}>
                <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${part.color} border border-honey/10`}>
                  <span className="text-honey-dark text-xs font-bold tracking-[0.2em] uppercase mb-3 block">{part.number}</span>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">{part.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{part.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Honey Drop */}
      <section className="py-16 lg:py-20 bg-navy relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-honey mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase">Hive & Thrive Honey Drop</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <blockquote className="font-display text-2xl lg:text-3xl text-cream/90 italic leading-relaxed mb-4">
              "Discomfort is information, not authority."
            </blockquote>
            <p className="text-honey/60 text-sm">— From Chapter 10, <em>I Thought I Was Just Nice</em></p>
          </FadeIn>
        </div>
      </section>

      {/* Kind Words */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">Kind Words</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">
              Already <span className="text-honey-dark italic">Resonating</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
            {[
              {
                quote: "Bee's stories resonate because they're real. She doesn't sugarcoat the challenges; she shows you how resilience carried her through them. That's what makes her writing so powerful.",
                name: "Angela W.",
                initials: "AW",
                role: "Director of Operations",
              },
              {
                quote: "Working alongside Bee taught me that integrity and ambition aren't opposites; they're fuel for each other. Her mentorship changed the trajectory of my career.",
                name: "Michelle T.",
                initials: "MT",
                role: "Senior Finance Manager",
              },
              {
                quote: "Bee has this incredible ability to see potential in people before they see it in themselves. She pushed me to pursue my MBA and I'll forever be grateful.",
                name: "Priya K.",
                initials: "PK",
                role: "VP of Finance, Tech Startup",
              },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <div className="h-full bg-white border border-honey/10 rounded-2xl p-7 flex flex-col">
                  <p className="text-charcoal/70 leading-relaxed mb-6 flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-honey/10">
                    <div className="w-10 h-10 rounded-full bg-honey/15 flex items-center justify-center shrink-0">
                      <span className="font-display text-sm font-bold text-honey-dark">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-navy text-sm font-semibold">{t.name}</p>
                      <p className="text-charcoal/40 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <div className="inline-flex items-center gap-2 text-honey-dark mb-6">
              <div className="w-8 h-px bg-honey/40" />
              <Star className="w-4 h-4" />
              <div className="w-8 h-px bg-honey/40" />
            </div>
            <p className="text-charcoal/60 text-lg mb-8 max-w-xl mx-auto">
              The book is on its way. Join the Swarm for updates, exclusive Honey Drops, and first access when it drops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/queens-circle">
                <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base shadow-lg shadow-honey/20">
                  Join the Swarm <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="https://hive-thrive.myshopify.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-8 py-5 text-base">
                  Shop the Collection
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
