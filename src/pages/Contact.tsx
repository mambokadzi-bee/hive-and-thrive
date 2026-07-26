/*
 * DESIGN: Royal Apiary — Art Deco x Organic Naturalism
 * Contact page: Elegant form for visitors to reach Bee directly
 * Gold/amber, navy, cream palette. Playfair Display headings, Lato body.
 */

import { useState } from "react";
import { Mail, MapPin, Clock, Send, Hexagon, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

// 📌 To enable contact form submissions, sign up at https://formspree.io
// and replace YOUR_FORM_ID below with your form ID.
const FORMSPREE_ID = "YOUR_FORM_ID";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      // Demo mode: show success without sending
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent! Bee will get back to you soon.");
      return;
    }
    setIsPending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Message sent! Bee will get back to you soon.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.22_0.05_260)] via-navy to-[oklch(0.20_0.06_250)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-honey/[0.04] blur-[120px]" />
          <div className="absolute top-20 right-20 w-32 h-32 border border-honey/[0.08] hex-clip opacity-30" />
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-honey/[0.06] hex-clip opacity-20" />
        </div>

        <div className="container relative text-center">
          <FadeIn>
            <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Let's <span className="text-honey-light italic">Connect</span>
            </h1>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you have a question, want to collaborate, or just want to say hello, I'd love to hear from you. Every message matters in this hive.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">

            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-6">
                  Reach Out to the Hive
                </h2>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-10">
                  I'm always excited to connect with women who are ready to bring their gifts and stay whole. Don't be a stranger.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: <Mail className="w-5 h-5" />,
                      title: "Email",
                      detail: "info@hiveandthrive.life",
                      subtitle: "For general inquiries",
                    },
                    {
                      icon: <Clock className="w-5 h-5" />,
                      title: "Response Time",
                      detail: "Within 48 hours",
                      subtitle: "I read every message personally",
                    },
                    {
                      icon: <MapPin className="w-5 h-5" />,
                      title: "Based In",
                      detail: "United States",
                      subtitle: "Available globally for virtual engagements",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-honey/10 flex items-center justify-center text-honey-dark">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-navy">{item.title}</h4>
                        <p className="text-charcoal/80 font-medium">{item.detail}</p>
                        <p className="text-charcoal/50 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative quote */}
                <div className="mt-12 p-6 bg-navy/5 rounded-2xl border border-navy/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Hexagon className="w-4 h-4 text-honey" />
                    <span className="text-honey-dark text-xs font-semibold tracking-[0.1em] uppercase">Bee's Promise</span>
                  </div>
                  <blockquote className="font-display text-lg text-navy/80 italic leading-relaxed">
                    "Every message that lands in my inbox is a seed. I treat each one with the care it deserves."
                  </blockquote>
                </div>
              </FadeIn>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={200}>
                {submitted ? (
                  <div className="bg-white rounded-2xl shadow-lg shadow-honey/5 p-10 lg:p-12 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-honey/10 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-honey-dark" />
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal/70 text-lg leading-relaxed mb-8 max-w-md mx-auto">
                      Thank you for reaching out. I'll get back to you within 48 hours. In the meantime, feel free to explore the hive.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-6 py-5 text-base transition-all duration-300"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg shadow-honey/5 p-8 lg:p-10">
                    <h3 className="font-display text-xl font-bold text-navy mb-6">
                      Send a Message
                    </h3>

                    <div className="space-y-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal/70 mb-1.5">
                          Your Name <span className="text-honey-dark">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Sarah Johnson"
                          className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-cream/30 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal/70 mb-1.5">
                          Email Address <span className="text-honey-dark">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="sarah@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-cream/30 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all text-sm"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-charcoal/70 mb-1.5">
                          Subject <span className="text-honey-dark">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-cream/30 text-charcoal focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all text-sm"
                        >
                          <option value="">Select a topic...</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Collaboration">Collaboration</option>
                          <option value="Book/Story Feedback">Book/Story Feedback</option>
                          <option value="Media/Press">Media/Press</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal/70 mb-1.5">
                          Your Message <span className="text-honey-dark">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Tell me what's on your heart..."
                          className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-cream/30 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all text-sm resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-6 text-base shadow-lg shadow-honey/20 transition-all duration-300 hover:shadow-xl hover:shadow-honey/30 disabled:opacity-50"
                      >
                        {isPending ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                              <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" className="opacity-75" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </span>
                        )}
                      </Button>

                      <p className="text-charcoal/40 text-xs text-center">
                        Your information is kept private and never shared.
                      </p>
                    </div>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
