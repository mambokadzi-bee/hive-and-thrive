/*
 * DESIGN: Royal Apiary — Join the Swarm
 * Newsletter signup and community page
 * Warm, inviting, with honey/navy palette
 */

import { motion } from "framer-motion";
import { Check, Heart, Mail, MessageCircle, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import HoneycombDivider from "@/components/HoneycombDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";
import { useState } from "react";

const NEWSLETTER_BG = "/images/newsletter-bg.jpg";

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

export default function JoinSwarm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Welcome to the Swarm! Check your inbox for a warm welcome.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={NEWSLETTER_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm" />
        </div>

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
                Join the Swarm
              </span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Be Part of Something <span className="text-honey-light italic">Sweet</span>
              </h1>
              <p className="text-cream/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                Join a growing community of professional women who refuse to choose between career success and personal fulfillment. Weekly inspiration delivered with love.
              </p>
            </motion.div>

            {/* Signup Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
                    <p className="text-cream/30 text-xs mt-4">
                      No spam. Unsubscribe anytime. Just pure honey for your inbox.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-honey/20">
                  <div className="w-16 h-16 rounded-full bg-honey/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-honey" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Welcome to the Swarm, {firstName}!
                  </h3>
                  <p className="text-cream/70 text-sm">
                    Check your inbox for a warm welcome from Bee. Your first drop of nectar is on its way.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">
              What's Inside
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-navy mb-4">
              Your Weekly Drop of Nectar
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
              Every week, you'll receive a carefully crafted email designed to inspire, encourage, and equip you for the week ahead.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Purposeful Encouragement",
                desc: "A weekly reflection that connects meaning to your professional life; because your purpose doesn't clock out at 5 PM.",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Career Wisdom",
                desc: "Practical insights from 20+ years in corporate finance. The kind of advice you'd get from a mentor over coffee.",
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Exclusive Stories",
                desc: "First access to new stories and content from the Hive & Thrive collections before they're published anywhere else.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Connection",
                desc: "Be part of a growing community of like-minded professional women who lift each other up.",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Personal Touch",
                desc: "Every email is written by Bee personally. No AI-generated filler, no corporate speak. Just real talk from a real woman.",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Early Access",
                desc: "Be the first to know about new books, the Hive Talks podcast launch, and new content as it drops.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="p-6 bg-white rounded-2xl shadow-md shadow-honey/5 hover:shadow-lg hover:shadow-honey/10 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-honey/10 flex items-center justify-center text-honey-dark mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof — hidden until testimonials are ready */}
      {false && <HoneycombDivider />}
      {false && (
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="container">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-8">
              What the Swarm Is Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote: "Bee's weekly emails are the highlight of my Monday mornings. She has a way of speaking directly to what I'm going through.",
                  name: "Sarah M.",
                  role: "VP of Operations",
                },
                {
                  quote: "Finally, someone who understands that being a woman of purpose and a corporate leader aren't contradictions. They're superpowers.",
                  name: "Michelle T.",
                  role: "Senior Director, Finance",
                },
                {
                  quote: "I forwarded last week's email to my entire team. The story about grace under pressure was exactly what we needed.",
                  name: "Jennifer L.",
                  role: "CFO, Tech Startup",
                },
                {
                  quote: "I've subscribed to dozens of newsletters. This is the only one I actually read every single week. Bee keeps it real.",
                  name: "Angela R.",
                  role: "Director of Strategy",
                },
              ].map((testimonial, i) => (
                <FadeIn key={testimonial.name} delay={i * 100}>
                  <div className="p-6 bg-white rounded-xl border border-honey/10 text-left">
                    <p className="text-charcoal/70 text-sm italic leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-display font-semibold text-navy text-sm">{testimonial.name}</p>
                      <p className="text-charcoal/40 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      )}
    </div>
  );
}
