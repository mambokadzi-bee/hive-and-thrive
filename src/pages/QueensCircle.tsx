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
                Community
              </div>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                The Queen's <span className="text-honey-light italic">Circle</span>
              </h1>
              <p className="text-cream/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                A community for women who are done surviving their success and ready to thrive in it. This is where we land when we are ready to stop performing and start belonging.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Circle */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-12">
              <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">About the Circle</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">
                A circle within the Hive
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="space-y-5 text-charcoal/70 text-lg leading-relaxed">
                <p>
                  The Queen's Circle is the community at the heart of Hive & Thrive. It is where the women who read the book, attend the workshops, and receive the Honey Drops come together. Not to perform. Not to compete. To breathe, reflect, and remember who they are.
                </p>
                <p>
                  This is for the woman who has spent years being excellent in rooms that never quite felt like hers. The one who achieved more than she expected and rested less than she needed. The one who is starting to ask a different question.
                </p>
                <p>
                  You don't have to earn your place here. You've already carried enough.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* What Belonging Looks Like */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">Inside the Circle</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">What belonging looks like</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🍯",
                title: "Honey Drops",
                desc: "A weekly letter from Bee. Honest reflections, hard-won lessons, and gentle reminders to bring your gifts and stay whole.",
              },
              {
                icon: "📖",
                title: "First Access",
                desc: "Be the first to know when the book drops, workshops open, and new content lands. The Circle gets in early.",
              },
              {
                icon: "🐝",
                title: "Community",
                desc: "A growing circle of high-achieving women navigating the same journey. Women becoming whole together.",
              },
              {
                icon: "✨",
                title: "Bee in the Room",
                desc: "Members of the Circle are first to hear when Bee is showing up in new spaces and creating new experiences.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="h-full p-8 rounded-2xl bg-white border border-honey/10">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
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
                Ready to join the <span className="text-honey-light italic">Circle?</span>
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed mb-10">
                Join the Queen's Circle and receive Honey Drops, first access to the book, and a community of women who get it. No performance required.
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
              Whether you want to connect, collaborate, or just start a conversation, reach out. I read every message.
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
