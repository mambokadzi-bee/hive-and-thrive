/*
 * DESIGN: The Queen's Playbook
 * Curated lessons from the hive — Honey Drops + reflections
 * Editorial feel, warm tones, aligned to Hive & Thrive brand foundation
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

const lessons = [
  {
    number: "01",
    theme: "On Survival",
    anchor: "You do not have to survive the life you worked so hard to build.",
    reflection:
      "I spent years being excellent at surviving. What I didn't realize was that survival had become my default setting. Not a season I was passing through, but a posture I had locked into. The patterns that served me as a child had followed me into boardrooms, into friendships, into my own home. Healing began when I understood that I was allowed to want more than endurance.",
    drop: "I mistook her instincts for my personality. I mistook her ways of surviving for who I was.",
  },
  {
    number: "02",
    theme: "On Worth",
    anchor: "The work is not to abandon excellence. It is to stop using it to earn permission to exist.",
    reflection:
      "Excellence was the language I trusted most. It was reliable. It gave me results. What I didn't see was that I had turned it into a currency, proof that I deserved to take up space. The problem with earning your worth through output is that the work is never finished. There is always one more thing to deliver before you allow yourself to rest.",
    drop: "Worthiness is not a performance review.",
  },
  {
    number: "03",
    theme: "On Visibility",
    anchor: "I became indispensable without becoming visible.",
    reflection:
      "I was very good at being useful. I could carry a room without being noticed in it. What I eventually had to face was that I had built a professional life around executing brilliantly while staying just small enough to feel safe. Visibility felt like arrogance. What I learned was that it was actually just truth-telling, about what I had built and who had built it.",
    drop: "The world cannot fully respond to the parts of you that remain hidden.",
  },
  {
    number: "04",
    theme: "On Rest",
    anchor: "Even bees rest.",
    reflection:
      "I had mastered productivity but forgotten how to pause. Rest felt like a luxury I hadn't earned yet, or a risk I couldn't afford. But a hive that never stops working eventually collapses. I had to learn that rest is not a reward waiting at the end of enough doing. It is part of the work. It is what makes the work sustainable.",
    drop: "Peace is not something you have to overwork to deserve.",
  },
  {
    number: "05",
    theme: "On Leadership",
    anchor: "Leadership is not only carrying responsibility. It is also claiming authority.",
    reflection:
      "I was comfortable with the weight of leadership long before I was comfortable with its visibility. I could deliver. I could execute. I could carry more than I should have been asked to carry. What took longer to learn was that sitting in a room is not the same as being present in it, and that the woman behind the work deserves to be seen and heard too.",
    drop: "Capacity is not proof of obligation.",
  },
  {
    number: "06",
    theme: "On Coming Home",
    anchor: "Healing is not becoming someone else. It is becoming less afraid to be yourself.",
    reflection:
      "I was not broken. I was buried. I needed to remember what had been spoken over me before the world got its hands on me. The kindness was always real. The gifts were always real. What had shifted was my relationship to them. How much I had learned to hide, apologize for, and earn permission to keep. Coming home meant returning to what was already true.",
    drop: "I don't want to become someone else. I want the same woman. With different instructions.",
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
            className="max-w-3xl"
          >
            <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
              Hive &amp; Thrive
            </span>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              The Queen's <span className="text-honey-light italic">Playbook</span>
            </h1>
            <p className="text-cream/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Curated lessons from the hive. Not theory. Lived truth, gathered from two decades of high achievement, hard lessons, and the slow work of becoming whole.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <p className="font-display text-xl lg:text-2xl text-navy/80 italic leading-relaxed">
              &ldquo;The hive needs my gifts. But it also needs me whole.&rdquo;
            </p>
            <p className="text-honey-dark text-sm font-semibold tracking-[0.12em] uppercase mt-4">~ Bee</p>
            <p className="text-charcoal/60 text-base leading-relaxed mt-8">
              These are the lessons I keep returning to. Each one is an anchor drop, the emotional truth at the center, followed by a reflection and the wisdom that surrounds it. Take what serves you. Leave what doesn't. Come back when you need to.
            </p>
          </FadeIn>
        </div>
      </section>

      <HoneycombDivider />

      {/* Lessons */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {lessons.map((lesson, i) => (
              <FadeIn key={i} delay={80}>
                <article>
                  {/* Lesson header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-display text-4xl font-bold text-honey/20 leading-none">{lesson.number}</span>
                    <span className="text-honey-dark text-xs font-semibold tracking-[0.2em] uppercase">{lesson.theme}</span>
                  </div>

                  {/* Anchor Honey Drop */}
                  <blockquote className="font-display text-2xl lg:text-3xl font-bold text-navy leading-snug italic border-l-4 border-honey pl-6 mb-8">
                    &ldquo;{lesson.anchor}&rdquo;
                  </blockquote>

                  {/* Reflection */}
                  <p className="text-charcoal/70 text-base lg:text-lg leading-relaxed mb-8">
                    {lesson.reflection}
                  </p>

                  {/* Honey Drop */}
                  <div className="bg-cream border-l-4 border-honey pl-6 py-3">
                    <p className="font-display text-base text-navy/75 italic leading-relaxed">
                      &ldquo;{lesson.drop}&rdquo;
                    </p>
                  </div>

                  {/* Divider between lessons */}
                  {i < lessons.length - 1 && (
                    <div className="mt-20 lg:mt-28 border-t border-honey/10" />
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
              The Full Story
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              These lessons came from somewhere.
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed mb-10">
              <em>I Thought I Was Just Nice</em> is where they live in full. The confession. The becoming. The remembering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/the-book">
                <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base shadow-lg shadow-honey/20">
                  Read About the Book
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/join">
                <Button className="bg-cream hover:bg-cream/90 !text-navy font-semibold px-8 py-5 text-base">
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
