/*
 * DESIGN: Royal Apiary — Honey Drops
 * Signature reflections and emotional truths from Bee.
 * Clean card grid, gold/navy palette, Playfair Display headings.
 */

import { motion } from "framer-motion";
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

const categories = [
  {
    label: "Survival & Thriving",
    drops: [
      "Survival and thriving are not the same thing.",
      "Adaptation is not the same as freedom.",
      "You do not have to survive the life you worked so hard to build.",
      "Healing is learning that old survival rules no longer deserve authority over your adult life.",
      "Thriving begins where performance for acceptance ends.",
      "Freedom sometimes begins one unlearned rule at a time.",
    ],
  },
  {
    label: "Excellence & Worth",
    drops: [
      "Excellence became proof of worth.",
      "The work is not to abandon excellence. The work is to stop using excellence to earn permission to exist.",
      "Sometimes the workplace rewards an old wound and calls it leadership.",
      "Exhaustion is not always evidence of purpose.",
      "Over-functioning is not the same thing as thriving.",
      "There is a difference between meaningful work and disappearing into work.",
      "The woman who survives through excellence eventually grows tired of carrying everything.",
    ],
  },
  {
    label: "Visibility & Shrinking",
    drops: [
      "Useful felt safer than seen.",
      "Being needed is not the same as being seen.",
      "Shrinking is not always humility. Sometimes shrinking is protection.",
      "I became indispensable without becoming visible.",
      "You do not have to become loud to become visible.",
      "Visibility is not arrogance.",
      "Excellence without visibility can quietly become invisibility.",
      "I was not only being overlooked. I had also become practiced at overlooking myself.",
    ],
  },
  {
    label: "Fear, Safety & Adaptation",
    drops: [
      "Peacekeeping slowly became personality.",
      "Silence is not always a lack of confidence. Sometimes silence is a history.",
      "I learned to read rooms before I learned to rest.",
      "Praise felt suspicious because unpredictability had trained me to brace for impact.",
      "Adaptation that once protected you can later limit you.",
      "Fear disguised itself as professionalism.",
    ],
  },
  {
    label: "Boundaries & Rest",
    drops: [
      "Even bees rest.",
      "Boundaries are not disobedience.",
      "You can be dependable without being endlessly available.",
      "There is wisdom in stopping before collapse.",
      "You do not have to earn rest through exhaustion.",
      "Peace is not something you have to overwork to deserve.",
      "A thriving life cannot be built on permanent depletion.",
    ],
  },
  {
    label: "Kindness, Softness & Strength",
    drops: [
      "You can be soft without becoming small.",
      "Kindness without self-abandonment.",
      "Softness is not weakness. Directness is not cruelty.",
      "The goal is not to become harder. The goal is to stop disappearing.",
      "Boundaries are kindness with structure.",
      "You can be visible and still be kind.",
    ],
  },
  {
    label: "Leadership & Professional Identity",
    drops: [
      "Work does not always speak in rooms where power and positioning are speaking too.",
      "Leadership is not only carrying responsibility. It is also claiming authority.",
      "Excellence may open doors. Visibility determines who gets invited back.",
      "Sometimes confidence means staying in the sentence. \"Thank you. I'm proud of that work.\"",
      "The woman behind the work deserves to be seen too.",
    ],
  },
  {
    label: "Self-Worth & Reclamation",
    drops: [
      "I no longer need to earn permission to exist.",
      "You are enough without over-proving.",
      "Worthiness is not a performance review.",
      "I worked the hive and earned the honey.",
      "Healing is not becoming someone else. It is becoming less afraid to be yourself.",
      "I no longer apologize for taking up space in rooms I earned.",
      "Thriving requires a different kind of courage. The courage to stop abandoning yourself.",
    ],
  },
  {
    label: "Hive & Thrive Philosophy",
    drops: [
      "Honey takes time.",
      "Even the Queen Bee depends on the hive.",
      "Not every burden belongs inside your hive.",
      "Loyalty without boundaries becomes depletion.",
      "The hive should nourish you too.",
      "There are seasons when it is time to outgrow an old hive.",
      "Build a life that nourishes the woman you are becoming.",
      "You are allowed to thrive unapologetically.",
    ],
  },
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

      {/* Drops by Category */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="space-y-20">
            {categories.map((cat, catIndex) => (
              <div key={cat.label}>
                <FadeIn delay={0}>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-8 pb-4 border-b border-honey/20">
                    {cat.label}
                  </h2>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.drops.map((drop, i) => (
                    <FadeIn key={i} delay={i * 50}>
                      <div className="group h-full bg-white border border-honey/10 rounded-2xl p-6 hover:border-honey/30 hover:shadow-lg hover:shadow-honey/10 transition-all duration-500 flex items-center">
                        <p className="font-display text-base lg:text-lg text-navy/85 italic leading-relaxed group-hover:text-navy transition-colors duration-300">
                          &ldquo;{drop}&rdquo;
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 lg:py-20 bg-navy">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="font-display text-xl lg:text-2xl text-cream/80 italic leading-relaxed mb-4">
                &ldquo;These are not just words. They are the sentences I wish someone had handed me sooner.&rdquo;
              </p>
              <p className="text-honey/70 text-sm">~ Bee</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
