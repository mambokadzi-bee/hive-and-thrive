/*
 * DESIGN: Royal Apiary — Meet Bee page
 * Warm, personal, storytelling layout. Asymmetric image/text.
 * Gold/navy palette. Playfair Display headings.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, BookOpen, Briefcase, Heart, TrendingUp, Users, Star, Crown, Target, Sparkles, GraduationCap, Quote, MessageCircle } from "lucide-react";
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
              Meet Bee
            </span>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
              A Finance Director Who Found Her <span className="text-honey-light italic">True Purpose</span>
            </h1>
            <p className="text-cream/60 text-lg lg:text-xl max-w-2xl leading-relaxed">
              My journey from corporate finance to purpose-driven storytelling; and why I believe every professional woman deserves both success and fulfillment.
            </p>
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
                  For over twenty years, I built a career that looked, from the outside, like exactly what success is supposed to look like. Big companies. Senior titles. Rooms most people never get invited into.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                  What the resume never showed was the quieter story underneath it. The late nights. The yes when I meant no. The way I learned to make rooms comfortable, even when I wasn't. I was excellent at my job. I was also exhausted in ways I didn't fully understand yet.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                  For a long time, I thought that was just what professionalism required. I had confused survival patterns for personality, and usefulness for worth. I thought I was simply nice.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  That quiet reckoning is what eventually led me here. Not away from everything I built, but toward something more honest. Hive &amp; Thrive exists because I believe every woman, wherever she is in her journey, deserves someone willing to share their story truthfully, and point toward what is possible.
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

      {/* Career Milestones Timeline */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        {/* Decorative hexagons */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-honey/8 hex-clip" />
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-honey/5 hex-clip" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
                The Journey
              </span>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
                Career <span className="text-honey-light italic">Milestones</span>
              </h2>
              <p className="text-cream/50 text-lg max-w-2xl mx-auto">
                Two decades of building, leading, and learning, each chapter preparing me for the next.
              </p>
            </div>
          </FadeIn>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-honey/40 via-honey/20 to-transparent lg:-translate-x-px" />

            {[
              {
                year: "Early 2000s",
                title: "Entered Finance Consulting",
                description: "Began my career in finance at a Big 4 Consulting firm, served clients in various industries quickly learning that the corporate world needed more women who led with both competence and conviction.",
                icon: <GraduationCap className="w-5 h-5" />,
                side: "left",
              },
              {
                year: "Mid 2000s",
                title: "Pivoted to Corporate Finance",
                description: "Promoted to senior manager roles managing multi-million dollar budgets and cross-functional teams. Discovered that mentoring younger women was just as fulfilling as the work itself.",
                icon: <TrendingUp className="w-5 h-5" />,
                side: "right",
              },
              {
                year: "2010s",
                title: "Finance Leadership at Scale",
                description: "Took on director-level responsibilities at major public companies, overseeing internal audit, accounting, reporting, risk management and strategy that impacted thousands of employees.",
                icon: <Users className="w-5 h-5" />,
                side: "left",
              },
              {
                year: "Meta Era",
                title: "Finance Director in High Tech",
                description: "Built a global accounting center of excellence, led financial risk management at one of the world's most influential technology companies. Managed high-stakes decisions while staying true to my values.",
                icon: <Crown className="w-5 h-5" />,
                side: "right",
              },
              {
                year: "The Pivot",
                title: "Experience Meets Purpose",
                description: "A pivotal season of deep reflection revealed a deeper purpose; to use my story and experience to uplift professional women navigating the same crossroads of vocation and ambition.",
                icon: <Heart className="w-5 h-5" />,
                side: "left",
              },
              {
                year: "Today",
                title: "Hive & Thrive Is Born",
                description: "Launched Hive & Thrive to share inspirational stories, career wisdom, and encouragement with professional women around the world. The best chapter is just beginning.",
                icon: <Sparkles className="w-5 h-5" />,
                side: "right",
              },
            ].map((milestone, i) => (
              <FadeIn key={milestone.title} delay={i * 100}>
                <div className={`relative flex items-start gap-6 lg:gap-0 mb-12 last:mb-0 ${
                  milestone.side === "right" ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Dot on timeline */}
                  <div className="absolute left-6 lg:left-1/2 w-3 h-3 rounded-full bg-honey border-2 border-navy -translate-x-1.5 lg:-translate-x-1.5 mt-6 z-10" />

                  {/* Content card */}
                  <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                    milestone.side === "right" ? "lg:mr-auto lg:pl-0 lg:pr-12" : "lg:ml-auto lg:pr-0 lg:pl-12"
                  }`}>
                    <div className="group bg-white/5 backdrop-blur-sm border border-honey/10 rounded-2xl p-6 lg:p-8 hover:bg-white/8 hover:border-honey/20 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-honey/15 flex items-center justify-center text-honey">
                          {milestone.icon}
                        </div>
                        <span className="text-honey/80 text-sm font-semibold tracking-wider">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-cream/50 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
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
