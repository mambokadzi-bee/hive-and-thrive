/*
 * DESIGN: Royal Apiary — The Queen's Playbook
 * Single collection showcase with max 5 stories
 * Hexagonal accents, warm tones, editorial feel
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import HoneycombDivider from "@/components/HoneycombDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const COLLECTION_IMG = "/images/career.jpg";

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

const stories = [
  {
    title: "The Glass Ceiling Has Cracks. I Found Them.",
    excerpt: "Navigating corporate politics as a woman in finance. The strategies that worked, the ones that didn't, and the ones nobody talks about.",
    tags: ["Strategy", "Leadership"],
  },
  {
    title: "Numbers Don't Lie, But They Don't Tell the Whole Story",
    excerpt: "What twenty years of reading financial statements taught me about reading people, situations, and opportunities.",
    tags: ["Finance", "Insight"],
  },
  {
    title: "The Meeting That Changed Everything",
    excerpt: "One conversation with a mentor who saw potential I couldn't see in myself. Why every woman needs someone who believes in her before she does.",
    tags: ["Mentorship", "Growth"],
  },
  {
    title: "Grace Under Pressure",
    excerpt: "A quarterly close that tested everything I stood for. How inner strength became more than a concept; it became my lifeline.",
    tags: ["Resilience", "Leadership"],
  },
  {
    title: "Building Your Hive: The Art of Strategic Networking",
    excerpt: "Forget the business card shuffle. Here's how to build genuine professional relationships that last decades.",
    tags: ["Networking", "Career"],
  },
];

export default function Collections() {
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
              Hive & Thrive Collection
            </span>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              The Queen's <span className="text-honey-light italic">Playbook</span>
            </h1>
            <p className="text-cream/60 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Career wisdom distilled from 20+ years in corporate finance. Inspirational short stories drawn from real experiences; the lessons they don't teach in business school.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collection */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <div className="sticky top-28">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-honey/10 max-w-md">
                  <img
                    src={COLLECTION_IMG}
                    alt="The Queen's Playbook collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-honey/10 hex-clip hidden lg:block" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy/5 hex-clip hidden lg:block" />
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-honey/10 flex items-center justify-center">
                    <Crown className="w-5 h-5 text-honey-dark" />
                  </div>
                  <span className="text-honey-dark text-sm font-semibold tracking-[0.1em] uppercase">
                    The Collection
                  </span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
                  Stories That Move You Forward
                </h2>
                <p className="text-charcoal/60 text-lg leading-relaxed mb-8">
                  Each story is a drop of honey; sweet, nourishing, and meant to sustain you through the demands of professional life. Real stories from real workplace scenarios, real challenges, and real breakthroughs.
                </p>
              </FadeIn>

              <div className="space-y-4">
                {stories.map((story, i) => (
                  <FadeIn key={story.title} delay={i * 100}>
                    <div
                      onClick={() => toast.info("Full stories coming soon! Stay tuned.")}
                      className="group p-6 bg-white rounded-xl border border-honey/10 hover:border-honey/30 hover:shadow-lg hover:shadow-honey/5 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-bold text-navy mb-2 group-hover:text-honey-dark transition-colors">
                            {story.title}
                          </h3>
                          <p className="text-charcoal/60 text-sm leading-relaxed mb-3">
                            {story.excerpt}
                          </p>
                          <div className="flex gap-2">
                            {story.tags.map((tag) => (
                              <span key={tag} className="px-2.5 py-0.5 rounded-full bg-honey/8 text-honey-dark text-xs font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-honey/40 group-hover:text-honey-dark transition-all shrink-0 mt-1 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={600} className="mt-8">
                <p className="text-charcoal/40 text-sm italic">
                  More stories are on the way. Join the Swarm to be the first to read them.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* Testimonial / Quote */}
      <section className="py-16 lg:py-20 bg-navy relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-honey fill-honey" />
              ))}
            </div>
            <blockquote className="font-display text-2xl lg:text-3xl text-cream/90 italic leading-relaxed mb-6">
              "Bee's stories feel like sitting across from a wise friend who's been where you're going. Every page is a gift."
            </blockquote>
            <p className="text-honey/60 text-sm">~ A Reader from the Swarm</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
              Want More From the Hive?
            </h2>
            <p className="text-charcoal/60 text-lg mb-8">
              Subscribe to get new stories and career wisdom delivered straight to your inbox.
            </p>
            <Link href="/join">
              <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base shadow-lg shadow-honey/20">
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
