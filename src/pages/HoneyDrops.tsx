/*
 * DESIGN: Royal Apiary — Honey Drops
 * Signature reflections and emotional truths from Bee.
 * Clean card grid, gold/navy palette, Playfair Display headings.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const drops = [
  "Survival and thriving are not the same thing.",
  "Useful felt safer than seen.",
  "Sometimes the workplace rewards an old wound and calls it leadership.",
  "Shrinking is not always humility. Sometimes shrinking is protection.",
  "Excellence became proof of worth.",
  "Fear disguised itself as professionalism.",
  "You do not have to survive the life you worked so hard to build.",
  "Even bees rest.",
  "The work is not to abandon excellence. The work is to stop using excellence to earn permission to exist.",
  "You are allowed to thrive unapologetically.",
];

export default function HoneyDrops() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-navy overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
              Hive &amp; Thrive
            </span>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
              Honey <span className="text-honey-light italic">Drops</span>
            </h1>
            <p className="text-cream/60 text-lg lg:text-xl max-w-2xl leading-relaxed">
              Signature reflections and emotional truths gathered from two decades of showing up, absorbing, and finally learning to stop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Drops */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {drops.map((drop, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="group h-full bg-white border border-honey/10 rounded-2xl p-7 hover:border-honey/30 hover:shadow-lg hover:shadow-honey/10 transition-all duration-500 flex items-center">
                  <p className="font-display text-lg text-navy/85 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
                    &ldquo;{drop}&rdquo;
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="font-display text-xl lg:text-2xl text-cream/80 italic leading-relaxed mb-4">
                &ldquo;These are not just words. They are the sentences I wish someone had handed me sooner.&rdquo;
              </p>
              <p className="text-honey/70 text-sm mb-12">~ Bee</p>

              <div className="border-t border-honey/20 pt-12">
                <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
                  For the Swarm
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                  The Full Collection Is Yours
                </h2>
                <p className="text-cream/60 text-lg leading-relaxed mb-8">
                  These 10 are just the beginning. Join the Swarm and receive the complete Honey Drops collection — all themes, all drops — delivered to your inbox.
                </p>
                <Link href="/queens-circle/#join">
                  <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base shadow-lg shadow-honey/20">
                    Join the Swarm
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
