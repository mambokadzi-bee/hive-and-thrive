/*
 * DESIGN: Royal Apiary — The Queen's Circle
 * Premium offerings: coaching, speaking, workshops
 * Luxurious feel, navy/gold palette, aspirational
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Crown, Mic, Sparkles, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import HoneycombDivider from "@/components/HoneycombDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const SPEAKING_IMG = "/images/speaking.jpg";
const PODCAST_IMG = "/images/podcast.jpg";
const DEVOTIONAL_IMG = "/images/devotional.jpg";

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

export default function QueensCircle() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-navy overflow-hidden">
        <div className="absolute top-10 right-10 w-48 h-48 border border-honey/8 hex-clip opacity-30" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-honey/5 hex-clip" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-honey/5 hex-clip opacity-20" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/15 text-honey text-sm font-medium tracking-wide mb-6 border border-honey/20">
                <Crown className="w-4 h-4" />
                Premium Experiences
              </div>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                The Queen's <span className="text-honey-light italic">Circle</span>
              </h1>
              <p className="text-cream/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                Exclusive coaching, speaking engagements, and corporate workshops for organizations and individuals ready to go deeper.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-honey/10">
                  <img
                    src={SPEAKING_IMG}
                    alt="Bee speaking at a corporate event"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-honey/10 hex-clip hidden lg:block" />
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-honey/10 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-honey-dark" />
                </div>
                <span className="text-honey-dark text-sm font-semibold tracking-[0.1em] uppercase">
                  Speaking
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
                Keynote Speaking & Corporate Events
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Bee brings two decades of corporate finance experience and a deep well of wisdom to every stage. Her talks bridge the gap between professional excellence and personal purpose; leaving audiences inspired, equipped, and ready to thrive.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Women in Leadership conferences",
                  "Corporate retreats and team-building events",
                  "Values-driven professional gatherings",
                  "Financial literacy and empowerment workshops",
                  "University and MBA program guest lectures",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-honey/15 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-honey-dark" />
                    </div>
                    <span className="text-charcoal/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => toast.info("Speaking inquiry form coming soon! Please reach out via email in the meantime.")}
                className="bg-honey hover:bg-honey-dark text-navy font-semibold px-6 py-5 text-base"
              >
                Inquire About Speaking
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* Corporate Workshops */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn delay={200} className="lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
                  <Users className="w-5 h-5 text-navy" />
                </div>
                <span className="text-navy text-sm font-semibold tracking-[0.1em] uppercase">
                  Workshops
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
                Corporate Workshops
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Interactive workshops designed for organizations that want to support the whole person, not just the professional. These sessions create space for values-driven leadership, growth, and purpose in the workplace.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Values & Finance",
                    desc: "Integrating personal values and ethical stewardship with modern financial leadership",
                  },
                  {
                    title: "The Whole Woman at Work",
                    desc: "Creating authentic professional identities that honor personal values",
                  },
                  {
                    title: "Leading with Grace",
                    desc: "Purpose-driven leadership principles for the modern corporate environment",
                  },
                ].map((workshop) => (
                  <div key={workshop.title} className="p-4 bg-white rounded-xl border border-honey/10">
                    <h4 className="font-display font-semibold text-navy mb-1">{workshop.title}</h4>
                    <p className="text-charcoal/60 text-sm">{workshop.desc}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => toast.info("Workshop booking coming soon! Please reach out via email in the meantime.")}
                variant="outline"
                className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-6 py-5 text-base"
              >
                Book a Workshop
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </FadeIn>

            <FadeIn className="lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-honey/10">
                  <img
                    src={DEVOTIONAL_IMG}
                    alt="Corporate workshop setting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy/5 hex-clip hidden lg:block" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Coming Soon: Podcast & Journal */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn className="text-center mb-14">
            <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">
              On the Horizon
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              Coming to the Queen's Circle
            </h2>
            <p className="text-cream/60 text-lg max-w-2xl mx-auto">
              The hive is growing. Here's what's buzzing next.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={100}>
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-cream/10 hover:border-honey/20 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={PODCAST_IMG}
                    alt="Hive Talks Podcast"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-honey mb-3">
                    <Mic className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-[0.1em] uppercase">Coming Soon</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Hive Talks Podcast</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    Candid conversations with remarkable women who've built thriving careers while staying true to their values and vision.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-cream/10 hover:border-honey/20 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={DEVOTIONAL_IMG}
                    alt="Devotional Journal"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-honey mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-[0.1em] uppercase">Coming Soon</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Devotional Journal</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    A beautifully designed guided journal for professional women with daily reflections crafted for the pace and demands of your life.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mt-12">
            <p className="text-cream/50 text-sm mb-4">
              Want to be the first to know when these launch?
            </p>
            <Link href="/join">
              <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base">
                Join the Swarm for Updates
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Contact / Inquiry */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-honey/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-honey-dark" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
              Let's Work Together
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-8">
              Whether you're looking for a keynote speaker, a workshop facilitator, or a coaching partner, I’d love to hear from you. Every great partnership starts with a conversation.
            </p>
            <Button
              onClick={() => toast.info("Contact form coming soon! Please reach out via social media in the meantime.")}
              className="bg-navy hover:bg-navy-light text-cream font-semibold px-8 py-5 text-base"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
