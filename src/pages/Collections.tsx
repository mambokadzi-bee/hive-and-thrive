/*
 * DESIGN: Royal Apiary — The Queen's Playbook
 * Single collection showcase with max 5 stories
 * Hexagonal accents, warm tones, editorial feel
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HoneycombDivider from "@/components/HoneycombDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const attitudes = [
  {
    name: "Bee' Intentional",
    tagline: "A hive isn't built by accident.",
    color: "bg-honey/10 border-honey/20",
  },
  {
    name: "Bee' Willing to Ask for Help",
    tagline: "Even queens rely on the hive.",
    color: "bg-navy/5 border-navy/10",
  },
  {
    name: "Bee' Patient",
    tagline: "Honey takes time.",
    color: "bg-honey/10 border-honey/20",
  },
  {
    name: "Bee' Mindful",
    tagline: "Be mindful of where your energy is pollinating.",
    color: "bg-navy/5 border-navy/10",
  },
  {
    name: "Bee' Collaborative",
    tagline: "No queen thrives alone in the hive.",
    color: "bg-honey/10 border-honey/20",
  },
  {
    name: "Bee' Adaptable",
    tagline: "Evolution is survival.",
    color: "bg-navy/5 border-navy/10",
  },
  {
    name: "Bee' Relentless",
    tagline: "Expertise is daily effort, compounded over time.",
    color: "bg-honey/10 border-honey/20",
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
              Hive & Thrive
            </span>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              The Queen's <span className="text-honey-light italic">Playbook</span>
            </h1>
            <p className="text-cream/60 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Twenty years in corporate finance taught me a lot. These are the principles I keep coming back to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bee-Attitudes */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <FadeIn className="max-w-2xl mb-14">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">The Bee-Attitudes</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
              Lessons from the Hive
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              I shared these principles in a women's leadership program and they resonated. I call them my Bee-Attitudes. They're simple. They're not easy.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {attitudes.map((attitude, i) => (
              <FadeIn key={attitude.name} delay={i * 80}>
                <div className={`h-full p-8 rounded-2xl border ${attitude.color} flex flex-col gap-3`}>
                  <h3 className="font-display text-xl font-bold text-navy">{attitude.name}</h3>
                  <p className="text-charcoal/60 text-base leading-relaxed italic">{attitude.tagline}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* Book CTA */}
      <section className="py-16 lg:py-20 bg-navy relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4">The Full Story</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              The stories behind these lessons are in the book.
            </h2>
            <p className="text-cream/60 text-lg mb-8">
              <em>I Thought I Was Just Nice</em> is where it all started. The Bee-Attitudes didn't come from nowhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/the-book">
                <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base shadow-lg shadow-honey/20">
                  Read About the Book
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/join">
                <Button variant="outline" className="border-cream/30 text-cream hover:bg-cream/10 px-8 py-5 text-base">
                  Join the Swarm
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
