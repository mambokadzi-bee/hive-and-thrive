/*
 * Privacy Policy page for Hive & Thrive.
 * Covers newsletter signup through Kit and contact messages through Formspree.
 */

import { Shield, Mail, Lock, EyeOff } from "lucide-react";
import { Link } from "wouter";
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

const highlights = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email With Consent",
    body: "If you join the list, Hive & Thrive uses your email address to send Honey Drops, book updates, and related notes.",
  },
  {
    icon: <EyeOff className="w-5 h-5" />,
    title: "No Selling",
    body: "Hive & Thrive does not sell your personal information or share it with advertisers.",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Trusted Tools",
    body: "Newsletter signups are handled through Kit, and contact messages are handled through Formspree.",
  },
];

export default function Privacy() {
  return (
    <div>
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-navy overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-honey mb-5">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-[0.15em] uppercase">Privacy Policy</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
              Your information should be handled with care.
            </h1>
            <p className="text-cream/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              This policy explains what Hive &amp; Thrive collects, why it is collected, and how you can manage your information.
            </p>
            <p className="text-honey/70 text-sm font-medium mt-6">Last updated: September 13, 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="h-full bg-white border border-honey/10 rounded-2xl p-7 shadow-md shadow-honey/5">
                  <div className="w-12 h-12 rounded-xl bg-honey/10 flex items-center justify-center text-honey-dark mb-5">
                    {item.icon}
                  </div>
                  <h2 className="font-display text-xl font-bold text-navy mb-3">{item.title}</h2>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <HoneycombDivider />

      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <FadeIn>
              <PolicySection title="Information We Collect">
                <p>
                  Hive &amp; Thrive collects the information you choose to provide. This may include your email address when you subscribe to Honey Drops or book updates, and your name, email address, subject, and message when you use the contact form.
                </p>
                <p>
                  The site may also receive basic technical information through hosting and form tools, such as browser type, device information, pages visited, and IP address. This information helps the site function, protect against spam, and understand general site performance.
                </p>
              </PolicySection>
            </FadeIn>

            <FadeIn>
              <PolicySection title="How We Use Information">
                <p>
                  Hive &amp; Thrive uses your information to send the messages you requested, respond to inquiries, provide updates about the book, Honey Drops, community offerings, events, and related Hive &amp; Thrive work, and maintain the security and reliability of the site.
                </p>
              </PolicySection>
            </FadeIn>

            <FadeIn>
              <PolicySection title="Email Signups">
                <p>
                  Email signups are processed through Kit, also known as ConvertKit. If you subscribe, you can unsubscribe at any time by using the unsubscribe link in any email. Your email address is used to send the content you requested and related Hive &amp; Thrive updates.
                </p>
              </PolicySection>
            </FadeIn>

            <FadeIn>
              <PolicySection title="Contact Messages">
                <p>
                  Contact form submissions are processed through Formspree. When you send a message, the information you provide is used to read, route, and respond to your inquiry. Please avoid sending sensitive personal information through the contact form.
                </p>
              </PolicySection>
            </FadeIn>

            <FadeIn>
              <PolicySection title="Sharing and Selling">
                <p>
                  Hive &amp; Thrive does not sell your personal information. Information may be shared with service providers that help operate the site, manage email subscriptions, process contact form submissions, or protect the site from misuse. These providers only receive the information needed to perform their services.
                </p>
              </PolicySection>
            </FadeIn>

            <FadeIn>
              <PolicySection title="Cookies and Third-Party Tools">
                <p>
                  The site may use cookies or similar technologies through embedded tools, including Kit, to support email forms and basic functionality. Third-party links, such as social media or shop links, are governed by the privacy practices of those services.
                </p>
              </PolicySection>
            </FadeIn>

            <FadeIn>
              <PolicySection title="Your Choices">
                <p>
                  You can unsubscribe from emails at any time. You can also contact Hive &amp; Thrive to request access, correction, or deletion of personal information you have provided, subject to any legal or operational requirements.
                </p>
              </PolicySection>
            </FadeIn>

            <FadeIn>
              <PolicySection title="Data Security and Retention">
                <p>
                  Hive &amp; Thrive takes reasonable steps to protect personal information, but no website or online service can guarantee perfect security. Information is kept only as long as needed for the purposes described in this policy, unless a longer retention period is required or permitted by law.
                </p>
              </PolicySection>
            </FadeIn>

            <FadeIn>
              <PolicySection title="Children's Privacy">
                <p>
                  Hive &amp; Thrive is not directed to children under 13, and the site does not knowingly collect personal information from children under 13.
                </p>
              </PolicySection>
            </FadeIn>

            <FadeIn>
              <PolicySection title="Contact">
                <p>
                  Questions about this privacy policy can be sent to{" "}
                  <a href="mailto:info@hiveandthrive.life" className="font-semibold text-honey-dark hover:text-navy transition-colors">
                    info@hiveandthrive.life
                  </a>
                  .
                </p>
              </PolicySection>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-navy">
        <div className="container">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="font-display text-2xl lg:text-3xl text-cream/90 italic leading-relaxed mb-8">
              Bring your gifts. Stay whole.
            </p>
            <Link href="/">
              <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base shadow-lg shadow-honey/20">
                Back to the Hive
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-honey/15 pb-10 last:border-b-0 last:pb-0">
      <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-5">{title}</h2>
      <div className="space-y-4 text-charcoal/70 text-base lg:text-lg leading-relaxed">{children}</div>
    </section>
  );
}
