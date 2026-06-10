import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Check, Crown, Mail, Mic, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import HoneycombDivider from "@/components/HoneycombDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SPEAKING_IMG = "/images/speaking.jpg";
const PODCAST_IMG = "/images/podcast.jpg";
const JOURNAL_IMG = "https://cdn.shopify.com/s/files/1/0983/4925/2883/files/3781165502475812487_2048.jpg?v=1775792122";

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

function JoinForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-honey/20">
        <div className="w-16 h-16 rounded-full bg-honey/20 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-honey" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-2">Welcome to the Swarm, {firstName}!</h3>
        <p className="text-cream/70 text-sm">Check your inbox for a warm welcome from Bee. Your first drop of nectar is on its way.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-cream/10">
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full px-5 py-3.5 rounded-lg bg-white/10 border border-cream/20 text-white placeholder:text-cream/40 focus:outline-none focus:border-honey/50 focus:ring-1 focus:ring-honey/30 transition-all text-sm"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3.5 rounded-lg bg-white/10 border border-cream/20 text-white placeholder:text-cream/40 focus:outline-none focus:border-honey/50 focus:ring-1 focus:ring-honey/30 transition-all text-sm"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-honey hover:bg-honey-dark text-navy font-semibold py-4 text-base shadow-lg shadow-honey/20 transition-all duration-300"
        >
          <Mail className="mr-2 w-4 h-4" />
          Join the Hive
        </Button>
        <p className="text-cream/30 text-xs mt-4">No spam. Unsubscribe anytime. Just pure honey for your inbox.</p>
      </div>
    </form>
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
                Speaking & Workshops
              </div>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                The Queen's <span className="text-honey-light italic">Circle</span>
              </h1>
              <p className="text-cream/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                Twenty years in corporate finance. Real lessons. Honest conversations. If you're looking for someone to come and speak truth in a room, let's talk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-honey/10">
                  <img
                    src={SPEAKING_IMG}
                    alt="Bee speaking"
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
                Keynote Speaking
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-3">
                Bee speaks from experience, not theory. Her talks draw on two decades in corporate finance and the women's leadership program she has been part of.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                The through-line is always the same: purpose over applause.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Women in Leadership conferences",
                  "Corporate retreats and ERG events",
                  "The Bee-Attitudes",
                  "I Thought I Was Just Nice",
                  "University and MBA programs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-honey/15 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-honey-dark" />
                    </div>
                    <span className="text-charcoal/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a href="mailto:info@hiveandthrive.life?subject=Speaking%20Inquiry">
                <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-6 py-5 text-base">
                  Inquire About Speaking
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* Workshops */}
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
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                Practical, honest sessions for teams and organizations. Built around real conversations, not slide decks.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "The Bee-Attitudes",
                    desc: "A leadership framework born from the field, not a textbook. The full principles live in the book.",
                  },
                  {
                    title: "The Whole Woman at Work",
                    desc: "What it looks like to show up fully, not just professionally, and why organizations are better for it.",
                  },
                  {
                    title: "Leading with Purpose, Not Applause",
                    desc: "Moving from performance-driven leadership to purpose-driven leadership. The shift that changes everything.",
                  },
                ].map((workshop) => (
                  <div key={workshop.title} className="p-5 bg-white rounded-xl border border-honey/10">
                    <h4 className="font-display font-semibold text-navy mb-1">{workshop.title}</h4>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{workshop.desc}</p>
                  </div>
                ))}
              </div>

              <a href="mailto:info@hiveandthrive.life?subject=Workshop%20Booking">
                <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-6 py-5 text-base">
                  Book a Workshop
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </FadeIn>

            <FadeIn className="lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-honey/10">
                  <img
                    src={SPEAKING_IMG}
                    alt="Workshop session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy/5 hex-clip hidden lg:block" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Coming Soon + Journal */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn className="text-center mb-14">
            <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">
              What's Next
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              More from the Hive
            </h2>
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
                    Honest conversations with women who've built careers on their own terms. No highlight reels. Just the real story.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <a
                href="https://hive-thrive.myshopify.com/products/find-your-hive-hive-thrive-hardcover-journal"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-cream/10 hover:border-honey/20 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={JOURNAL_IMG}
                    alt="Find Your Hive Hardcover Journal"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-honey mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-[0.1em] uppercase">Available Now</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Find Your Hive Journal</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    A hardcover journal for the woman who needs space to think. Available in the shop now.
                  </p>
                </div>
              </a>
            </FadeIn>
          </div>

          <FadeIn className="text-center mt-12">
            <Link href="/join">
              <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base">
                Stay in the Loop
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Kind Words */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">Kind Words</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">
              What They're <span className="text-honey-dark italic">Saying</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Bee doesn't just lead with numbers — she leads with heart. In every meeting, every decision, she brought a rare combination of sharp financial acumen and genuine care for the people around her. She made me believe I could aim higher.",
                name: "Sarah R.",
                initials: "SR",
                role: "Former Direct Report",
              },
              {
                quote: "I've worked with many finance leaders, but Bee stands apart. Her strategic mind is matched only by her generosity in lifting others up. She's the real deal.",
                name: "James C.",
                initials: "JC",
                role: "Director, Risk Management",
              },
              {
                quote: "In a world of corporate politics, Bee was always authentic. She proved you can climb the ladder without compromising who you are. A true role model.",
                name: "David L.",
                initials: "DL",
                role: "V.P. Accounting, Healthcare",
              },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <div className="h-full bg-white border border-honey/10 rounded-2xl p-7 flex flex-col">
                  <p className="text-charcoal/70 leading-relaxed mb-6 flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-honey/10">
                    <div className="w-10 h-10 rounded-full bg-honey/15 flex items-center justify-center shrink-0">
                      <span className="font-display text-sm font-bold text-honey-dark">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-navy text-sm font-semibold">{t.name}</p>
                      <p className="text-charcoal/40 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Swarm */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={PODCAST_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/88 backdrop-blur-sm" />
        </div>
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
                Join the Swarm
              </span>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
                Be Part of Something <span className="text-honey-light italic">Sweet</span>
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed mb-10">
                Join a growing community of professional women who refuse to choose between career success and personal fulfillment. Weekly inspiration delivered with love.
              </p>
              <JoinForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
              Let's Work Together
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-8">
              Whether you need a speaker, a workshop, or just want to start a conversation, reach out. I read every message.
            </p>
            <Link href="/contact">
              <Button className="bg-navy hover:bg-navy-light text-cream font-semibold px-8 py-5 text-base">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
