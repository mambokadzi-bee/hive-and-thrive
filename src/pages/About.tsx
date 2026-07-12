/*
 * DESIGN: Royal Apiary — Meet Bee page
 * Warm, personal, storytelling layout. Asymmetric image/text.
 * Gold/navy palette. Playfair Display headings.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Heart, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import HoneycombDivider from "@/components/HoneycombDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

export default function About() {
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
              My Story
            </span>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-3xl">
              I thought I was simply nice. <span className="text-honey-light italic">I had confused survival for personality.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Image Column */}
            <FadeIn className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-honey/10">
                  <img
                    src={BEE_HEADSHOT}
                    alt="Bee, Finance Director, Author and Speaker"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-6 p-5 bg-white rounded-xl shadow-md">
                  <p className="font-display text-lg font-semibold text-navy mb-1">Bee</p>
                  <p className="text-charcoal/60 text-sm">Author, Speaker & Finance Executive</p>
                  <div className="mt-3 pt-3 border-t border-honey/10">
                    <p className="text-charcoal/50 text-xs italic">
                      "A woman who knows her worth adds value to everything she touches."
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Story Column */}
            <div className="lg:col-span-3 space-y-8">
              <FadeIn>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">
                  My Story
                </h2>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                  For over twenty years, I built a career inside some of the world's most complex and innovative companies. It looked, from the outside, like exactly what success is supposed to look like. Big companies. Senior titles. Rooms most people never get invited into.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                  What the resume never showed was the quieter story underneath it. The late nights. The yes when I meant no. The way I learned to make rooms comfortable, even when I wasn't. I was excellent at my job. I was also exhausted in ways I didn't fully understand yet.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                  For a long time, I thought that was just what professionalism required. I had confused survival patterns for personality, and usefulness for worth. I thought I was simply nice.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                  That quiet reckoning is what eventually led me here. Not away from everything I built, but toward something more honest.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  Hive &amp; Thrive exists because too many women are admired for their excellence while quietly disappearing inside it.
                </p>
              </FadeIn>

              <HoneycombDivider />

              <FadeIn>
                <h3 className="font-display text-2xl font-bold text-navy mb-4">
                  Why "Hive & Thrive"?
                </h3>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                  The hive is one of nature's most remarkable structures. Built with precision, sustained by community, and producing something sweet from hard work. That's exactly what I want to build for professional women.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  And my name? Well, life has a way of writing its own metaphors. When your real name is Blessing, and you go by Bee, the story practically writes itself. Every story I tell, every lesson I share, is nectar gathered from lessons corporate life taught me about resilience, humility, courage, and motion. Each story is meant to nourish, strengthen, and encourage women navigating career ceilings, identity shifts, and purpose awakenings.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  But underneath all of it is a simple belief: that you cannot build a career, a legacy, or a life worth living on a version of yourself that isn't real. Knowing who you are, and staying true to her, is the work beneath all the other work.
                </p>
              </FadeIn>

              <FadeIn>
                <div className="mt-8 p-8 bg-navy rounded-2xl">
                  <blockquote className="font-display text-xl lg:text-2xl text-cream/90 italic leading-relaxed mb-4">
                    "I believe every woman carries a story worth telling, a purpose worth pursuing, and a vision worth fighting for. My job is simply to remind her."
                  </blockquote>
                  <p className="text-honey/70 text-sm">~Bee</p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link href="/collections">
                    <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-6 py-5 text-base">
                      Read My Stories <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/join">
                    <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-6 py-5 text-base">
                      Join the Swarm
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Kind Words */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="w-8 h-8 text-honey/30 mx-auto mb-6" />
              <blockquote className="font-display text-xl lg:text-2xl text-navy/80 italic leading-relaxed mb-6">
                "Bee invited me to a women's networking breakfast during a particularly tough quarter. That single act of kindness reminded me why I was in this industry. She sees the whole person."
              </blockquote>
              <p className="text-charcoal/50 text-sm font-medium">Tanya M. &mdash; Finance Director, Fortune 500</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing Quote & CTA */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-honey-dark mb-6">
                <div className="w-8 h-px bg-honey/40" />
                <Star className="w-4 h-4" />
                <div className="w-8 h-px bg-honey/40" />
              </div>
              <blockquote className="font-display text-xl lg:text-2xl text-navy/80 italic leading-relaxed mb-4">
                "Every corporate room I entered, every budget I balanced, every team I led; it was all preparation. Life was writing a story through my career that I'm only now beginning to share."
              </blockquote>
              <p className="text-honey-dark/70 text-sm font-medium">~ Bee</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/collections">
                <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base">
                  Read My Stories <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/join">
                <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-8 py-5 text-base">
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
