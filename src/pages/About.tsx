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
                  For over twenty years, I navigated the demanding world of corporate finance at some of the largest public companies in the world. From the late-night grind, to time zone dances, I learned what it takes to excel in a space that often asks women to choose between ambition and authenticity.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                  As Finance Director at top-tier tech company, I sat at the intersection of innovation and accountability. I managed teams, shaped strategy, and helped steer one of the world's most influential companies. But through it all, there was a quiet voice, one that reminded me my purpose extended far beyond the balance sheet.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  That voice was my inner compass. And it's the reason Hive & Thrive exists today.
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

      {/* You Must Be Bee */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute top-10 right-16 w-32 h-32 border border-honey/8 hex-clip opacity-30" />
        <div className="absolute bottom-16 left-10 w-20 h-20 bg-honey/5 hex-clip" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
                A Moment That Stayed With Me
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-10">
                You Must Be <span className="text-honey-light italic">Bee</span>
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="space-y-6 text-cream/75 text-lg leading-relaxed">
                <p>There's a moment I still think about.</p>
                <p>We had exchanged emails for weeks. They knew my name. They knew my work. They just didn't know my face.</p>
                <p>When he walked toward us down the corridor, he looked right past me and reached for someone else. Confident. Friendly. Hand already extended.</p>
                <p className="font-display text-xl lg:text-2xl text-white italic">&ldquo;You must be Bee.&rdquo;</p>
                <p>I stood there with a practiced smile and registered everything quietly: the assumption, the redirect, the shape of what leadership was expected to look like before I had said a single word.</p>
                <p>My colleague corrected him. The meeting continued. No one mentioned it again.</p>
                <p>That's what subtle looks like. Not always malicious. Not always intentional. But cumulative.</p>
                <p>And I had spent a long time being very good at absorbing the cumulative. Registering the assumption and then leading the meeting anyway, as if the two things had nothing to do with each other.</p>
                <p>That gap is exactly what this book is about. What you carry versus what you show.</p>
                <p>Not rage. Not a grievance. Just an honest look at what it costs a woman to keep absorbing quietly. To keep performing capable while slowly disappearing inside the work.</p>
                <p>And what it feels like to finally stop.</p>
                <p className="text-honey font-semibold">Welcome to Hive &amp; Thrive. I'm Bee. And yes, I'm exactly who you were looking for. 🐝</p>
              </div>
            </FadeIn>
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

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-16 left-16 w-24 h-24 border border-honey/8 hex-clip" />
        <div className="absolute bottom-12 right-12 w-36 h-36 bg-honey/3 hex-clip" />
        <div className="absolute top-1/3 right-10 w-16 h-16 border border-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
                Kind Words
              </span>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
                What Others <span className="text-honey-light italic">Say</span>
              </h2>
              <p className="text-cream/50 text-lg max-w-2xl mx-auto">
                From boardrooms to mentoring sessions, the impact of walking in purpose.
              </p>
            </div>
          </FadeIn>

          {/* Featured testimonial */}
          <FadeIn>
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-honey/10 to-honey/5 border border-honey/20 rounded-3xl p-8 lg:p-12">
                <Quote className="absolute top-6 left-6 lg:top-8 lg:left-8 w-10 h-10 text-honey/20" />
                <div className="relative">
                  <blockquote className="font-display text-xl lg:text-2xl xl:text-3xl text-white/90 italic leading-relaxed mb-6 pl-4 lg:pl-8">
                    "Bee doesn't just lead with numbers she leads with heart. In every meeting, every decision, she brought a rare combination of sharp financial acumen and genuine care for the people around her. She made me believe I could aim higher."
                  </blockquote>
                  <div className="flex items-center gap-4 pl-4 lg:pl-8">
                    <div className="w-12 h-12 rounded-full bg-honey/20 flex items-center justify-center">
                      <span className="font-display text-lg font-bold text-honey">SR</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Sarah R.</p>
                      <p className="text-cream/40 text-sm">Former Direct Report</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Testimonial grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                quote: "Working alongside Bee taught me that integrity and ambition aren't opposites; they're fuel for each other. Her mentorship changed the trajectory of my career.",
                name: "Michelle T.",
                initials: "MT",
                role: "Senior Finance Manager",
                relationship: "Mentee",
              },
              {
                quote: "Bee has this incredible ability to see potential in people before they see it in themselves. She pushed me to pursue my MBA and I'll forever be grateful.",
                name: "Priya K.",
                initials: "PK",
                role: "VP of Finance, Tech Startup",
                relationship: "Mentee",
              },
              {
                quote: "In a world of corporate politics, Bee was always authentic. She proved you can climb the ladder without compromising who you are. A true role model.",
                name: "David L.",
                initials: "DL",
                role: "V.P Accounting, Healthcare Company",
                relationship: "Former Colleague",
              },
              {
                quote: "Bee's stories resonate because they're real. She doesn't sugarcoat the challenges; she shows you how resilience carried her through them. That's what makes her writing so powerful.",
                name: "Angela W.",
                initials: "AW",
                role: "Director of Operations",
                relationship: "Reader & Mentee",
              },
              {
                quote: "I've worked with many finance leaders, but Bee stands apart. Her strategic mind is matched only by her generosity in lifting others up. She's the real deal.",
                name: "James C.",
                initials: "JC",
                role: "Director, Risk Management",
                relationship: "Industry Peer",
              },
              {
                quote: "Bee invited me to a women's networking breakfast during a particularly tough quarter. That single act of kindness reminded me why I was in this industry. She sees the whole person.",
                name: "Tanya M.",
                initials: "TM",
                role: "Finance Director, Fortune 500",
                relationship: "Former Colleague",
              },
            ].map((testimonial, i) => (
              <FadeIn key={testimonial.name} delay={i * 80}>
                <div className="group h-full bg-white/5 backdrop-blur-sm border border-honey/10 rounded-2xl p-6 lg:p-8 hover:bg-white/8 hover:border-honey/20 transition-all duration-500 flex flex-col">
                  <Quote className="w-6 h-6 text-honey/30 mb-4 shrink-0" />
                  <p className="text-cream/70 leading-relaxed mb-6 flex-1">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-honey/10">
                    <div className="w-10 h-10 rounded-full bg-honey/15 flex items-center justify-center shrink-0">
                      <span className="font-display text-sm font-bold text-honey">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-cream/40 text-xs">{testimonial.role}</p>
                      <p className="text-honey/50 text-xs">{testimonial.relationship}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
