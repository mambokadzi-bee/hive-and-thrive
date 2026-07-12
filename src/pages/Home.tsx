import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Mic, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import HoneycombDivider from "@/components/HoneycombDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const HERO_BG = "/images/hero-bg.jpg";
const CAREER_IMG = "/images/career.jpg";
const NEWSLETTER_BG = "/images/newsletter-bg.jpg";
const PODCAST_IMG = "/images/podcast.jpg";
const SPEAKING_IMG = "/images/speaking.jpg";
const DEVOTIONAL_IMG = "/images/devotional.jpg";
const ABOUT_BG = "/images/about-bg.jpg";
const BEE_HEADSHOT = "/images/bee-headshot.png";

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

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.22_0.05_260)] via-navy to-[oklch(0.20_0.06_250)]" />
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-[0.12] mix-blend-luminosity" />
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-honey/[0.04] blur-[120px]" />
          <div className="absolute top-20 right-20 w-48 h-48 border border-honey/[0.08] hex-clip opacity-40" />
          <div className="absolute bottom-32 right-40 w-28 h-28 border border-honey/[0.06] hex-clip opacity-30" />
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-honey/[0.03] hex-clip" />
        </div>

        <div className="relative container pt-24 pb-16 lg:pt-0 lg:pb-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/20 text-honey-light text-sm font-medium tracking-wide backdrop-blur-sm border border-honey/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" /></svg>
                  Welcome to the Hive
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6">
                You've been excellent your whole life.{" "}
                <span className="text-honey-light italic">And exhausted for just as long.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg lg:text-xl text-cream/70 leading-relaxed mb-8 max-w-xl">
                A place for high-achieving women who are ready to stop surviving success and start sharing their gifts without losing themselves.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
                <Link href="/the-book">
                  <Button size="lg" className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-6 text-base shadow-lg shadow-honey/20 transition-all duration-300 hover:shadow-xl hover:shadow-honey/30">
                    Read the Book <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/collections">
                  <Button size="lg" variant="outline" className="border-cream/30 text-cream hover:bg-cream/10 px-8 py-6 text-base">
                    Explore the Hive
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="hidden lg:block shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-honey/[0.08] blur-2xl" />
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-honey/30 rounded-tr-3xl" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-honey/30 rounded-bl-3xl" />
                <div className="relative w-[340px] h-[420px] rounded-2xl overflow-hidden border-2 border-honey/20 shadow-2xl shadow-black/30">
                  <img src={BEE_HEADSHOT} alt="Bee, Finance Director, Author and Speaker" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-honey text-sm font-semibold tracking-wide">Author · Speaker · Finance Executive</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-honey/10 border border-honey/20 hex-clip" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <span className="text-cream/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-5 h-8 rounded-full border-2 border-cream/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-honey" />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-honey/10">
                  <img src={ABOUT_BG} alt="Bee's workspace" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-honey/10 hex-clip hidden lg:block" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy/5 hex-clip hidden lg:block" />
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">The Story Behind the Hive</span>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy leading-tight mb-6">I didn't set out to build a movement. I was trying to understand my own story.</h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                For more than twenty years, I built a successful career in finance. From the outside, it looked like I had everything under control.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                But beneath the promotions and performance was a quieter question: Why does success still feel so heavy?
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                The answer became a memoir. The memoir became a philosophy. The philosophy became Hive and Thrive, a place where high-achieving women learn to stop confusing survival with identity and begin sharing their gifts from a place of wholeness.
              </p>
              <p className="font-display text-lg text-navy italic border-l-4 border-honey pl-4 mb-8">
                The memoir became a philosophy. The philosophy became a movement.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-6 py-5 text-base transition-all duration-300">
                  Read My Story <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* COLLECTIONS PREVIEW */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">Hive & Thrive</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy mb-4">The Queen's Playbook</h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
              Curated lessons from the hive. Anchor drops, reflections, and the lived wisdom of two decades of high achievement.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={100}>
              <Link href="/collections">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg shadow-honey/5 hover:shadow-xl hover:shadow-honey/15 transition-all duration-500 cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={CAREER_IMG} alt="The Queen's Playbook collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Crown className="w-4 h-4 text-honey" />
                      <span className="text-honey text-xs font-semibold tracking-[0.15em] uppercase">The Queen's Playbook</span>
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">Lessons from the Hive</h3>
                    <p className="text-cream/70 text-sm leading-relaxed max-w-lg">
                      Six lessons on survival, worth, visibility, rest, leadership, and coming home to yourself.
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-honey text-sm font-medium group-hover:gap-2 transition-all">
                      Explore the Playbook <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-16 lg:py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-honey/10 hex-clip opacity-30" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6 text-honey/40">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
            </svg>
            <blockquote className="font-display text-2xl lg:text-3xl xl:text-4xl text-cream/90 italic leading-relaxed mb-6">
              "Performance is not peace. It is the price you pay to borrow it."
            </blockquote>
            <p className="text-honey/70 text-sm tracking-[0.15em] uppercase">~ Blessing (Bee) Nyamolo, <em>I Thought I Was Just Nice</em></p>
          </FadeIn>
        </div>
      </section>

      <HoneycombDivider />

      {/* THE BOOK */}
      <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-honey-dark uppercase tracking-[0.1em]">The Book</h2>
          </FadeIn>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl mx-auto">

            {/* Book Cover */}
            <FadeIn className="shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-honey/10 blur-2xl rounded-2xl" />
                <img
                  src="/images/book-cover.jpg"
                  alt="I Thought I Was Just Nice by Blessing (Bee) Nyamolo"
                  className="relative w-[220px] sm:w-[260px] rounded-xl shadow-2xl shadow-honey/20"
                  style={{ rotate: "-2deg" }}
                />
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn delay={200} className="flex-1 text-center lg:text-left">
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy leading-tight mb-2">
                I Thought I Was Just <span className="text-honey-dark italic">Nice</span>
              </h2>
              <p className="text-honey-dark/70 font-medium tracking-wide mb-6">by Blessing (Bee) Nyamolo</p>
              <p className="text-charcoal/60 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                A memoir about what happens when a high-achieving woman stops mistaking survival for personality and finally comes home to herself.
              </p>
              <Link href="/the-book">
                <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base shadow-lg shadow-honey/20">
                  Read About the Book <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* SHOP PRODUCTS */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">The Hive & Thrive Collection</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy mb-4">Wear the Words</h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
              Products born from the book. Each one carries a message worth holding onto.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { name: "Even Bees Rest Sherpa Blanket", price: "$49.99", tag: "From Chapter 12", img: "https://cdn.shopify.com/s/files/1/0983/4925/2883/files/18234007988467994398_2048.jpg?v=1775792642", handle: "even-bees-rest-hive-thrive-sherpa-fleece-blanket" },
              { name: "You Are the Honey Ceramic Mug", price: "$9.99", tag: "Core theme", img: "https://cdn.shopify.com/s/files/1/0983/4925/2883/files/11638481605759695721_2048.jpg?v=1775791970", handle: "you-are-the-honey-hive-thrive-ceramic-mug-11oz" },
              { name: "Find Your Hive Hardcover Journal", price: "$13.99", tag: "Community & belonging", img: "https://cdn.shopify.com/s/files/1/0983/4925/2883/files/3781165502475812487_2048.jpg?v=1775792122", handle: "find-your-hive-hive-thrive-hardcover-journal" },
              { name: "Even Bees Rest T-Shirt", price: "$19.99", tag: "Wearable reminder", img: "https://cdn.shopify.com/s/files/1/0983/4925/2883/files/7928432989040128670_2048.jpg?v=1776022880", handle: "even-bees-rest-hive-thrive-t-shirt-1" },
            ].map((product, i) => (
              <FadeIn key={product.name} delay={i * 100}>
                <a
                  href={`https://hive-thrive.myshopify.com/products/${product.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md shadow-honey/5 hover:shadow-xl hover:shadow-honey/10 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="aspect-square overflow-hidden bg-[oklch(0.97_0.01_60)]">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-honey-dark text-xs font-semibold tracking-[0.1em] uppercase mb-1 block">{product.tag}</span>
                    <h3 className="font-display text-base font-bold text-navy mb-2 leading-snug">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal/70 font-semibold">{product.price}</span>
                      <span className="text-honey-dark text-sm font-medium group-hover:underline">Shop →</span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <a href="https://hive-thrive.myshopify.com/collections/best-sellers" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-8 py-5 text-base transition-all duration-300">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={NEWSLETTER_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm" />
        </div>

        <div className="container relative">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">Join the Swarm</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">Get Weekly Nectar Delivered</h2>
            <p className="text-cream/70 text-lg mb-8">
              Join thousands of professional women receiving weekly doses of inspiration, encouragement, and career wisdom straight to your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Thank you for joining the swarm! Check your inbox soon.");
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-lg bg-white/10 border border-cream/20 text-white placeholder:text-cream/40 focus:outline-none focus:border-honey/50 focus:ring-1 focus:ring-honey/30 transition-all text-sm"
              />
              <Button type="submit" className="bg-honey hover:bg-honey-dark text-navy font-semibold px-6 py-3.5 shadow-lg shadow-honey/20 transition-all duration-300">
                Join the Hive
              </Button>
            </form>

            <p className="text-cream/40 text-xs mt-4">No spam, ever. Just pure honey for your inbox.</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
