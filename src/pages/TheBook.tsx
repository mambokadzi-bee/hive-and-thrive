import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, CalendarDays, CheckCircle, FileText, HelpCircle, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import HoneycombDivider from "@/components/HoneycombDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { KitForm } from "@/components/KitForm";

const BOOK_COVER = "/images/book-cover.jpg";

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

const familiarSignals = [
  "You have built a life you're proud of and still wondered why achievement can feel so exhausting.",
  'Being dependable, agreeable, capable, or "nice" has become part of how people know you.',
  "You say yes easily and sometimes understand the cost only afterward.",
  "You have spent years being useful to everyone around you and are beginning to ask what you want.",
  "You are discovering that being capable of something doesn't necessarily mean you have to choose it.",
  "You want to bring your gifts without losing yourself in the giving.",
];

const sampleExcerpt = [
  'A message comes through text or email. The sender is someone important to me, either personally or professionally. The message simply says: "Can we talk?"',
  "Nothing has happened yet. No conflict. No bad news. No accusation. No actual danger. And still, before my adult mind has even fully processed the words, my body reacts. My chest tightens. My stomach churns. Something inside me braces. It is subtle, but unmistakable. A quick internal shift. My whole body moves into emotional readiness before my mind has even decided whether readiness is necessary.",
  "For years, I barely noticed it. The reaction happened so automatically that I thought it was normal. I thought this was simply what responsibility felt like. Serious people prepared themselves. Mature people stayed alert. High performers anticipated problems. That is how I explained it to myself.",
  "Not long after the season I just described, after my body had started telling the truth in ways I could no longer ignore, I slowed down enough to notice something unsettling. The adult woman was holding the phone. The finance executive was reading the email. But the younger me still living inside my body had already braced. My body was preparing for danger before danger had even arrived.",
  "That realization stayed with me because the reaction itself felt older than the moment. Older than the job. Older than the title in my email signature. And for the first time, I started asking myself a question that began rearranging how I understood my life: Why was my body still living like I was unsafe?",
  "At first, I wanted to believe the problem was only the job. The hours. The expectations. The role that asked more of me than I knew how to give sustainably. And indeed, that season was demanding. The work was complex. The responsibility was heavy. I was carrying more than any one person should have carried for that long without a different kind of support or a different kind of wisdom around what success was allowed to cost.",
  "But the longer I sat with my realization, the more I understood something harder. The fear was older than the job. It was older than the room I was standing in when the message came through. Older than the executive decisions, the project plans, the performance ratings, and the polished language of professional responsibility. It was a careful fear. A polite fear. A useful fear. The kind that learns how to function so well it stops looking like fear at all.",
  "Suddenly, I started to see it everywhere. In how quickly I prepared for problems that hadn't happened. In how hard it was to rest without feeling I had forgotten something. In how easily responsibility to others felt safer than taking care of myself.",
];

const launchDetails = [
  {
    icon: <CalendarDays className="w-5 h-5" />,
    label: "Publication Date",
    value: "November 2026",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    label: "Available Formats",
    value: "Paperback and eBook planned",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Preorder Updates",
    value: "Join the list for retailer links and launch-day news.",
  },
];

const faqs = [
  {
    question: "When does the book launch?",
    answer: "I Thought I Was Just Nice is planned for publication in November 2026.",
  },
  {
    question: "What formats will be available?",
    answer: "Paperback and eBook editions are planned, with final retailer details still to come.",
  },
  {
    question: "Is this book only for women?",
    answer: "It is written from a woman's experience, primarily for women, and for anyone who recognizes themselves in its pages.",
  },
  {
    question: "Will there be a signed edition or launch event?",
    answer: "Those details are still being shaped. Join the launch list to hear first.",
  },
];

export default function TheBook() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 pb-0 bg-[oklch(0.97_0.01_60)] overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-0 left-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-16 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-honey/10 blur-2xl rounded-2xl" />
                <div className="absolute -inset-1 bg-gradient-to-br from-honey/20 to-transparent rounded-2xl" />
                <img
                  src={BOOK_COVER}
                  alt="I Thought I Was Just Nice: A Memoir by Blessing Bee Nyamolo"
                  className="relative w-[240px] sm:w-[280px] lg:w-[320px] rounded-xl shadow-2xl shadow-honey/20"
                  style={{ rotate: "-2deg" }}
                />
              </div>
            </motion.div>

            <div className="flex-1 text-center lg:text-left pb-12 lg:pb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/15 text-honey-dark text-sm font-medium tracking-wide border border-honey/20 mb-5">
                  <BookOpen className="w-3.5 h-3.5" />
                  A Memoir of Becoming Whole
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] mb-5"
              >
                <span className="block">I Thought I Was</span>
                <span className="block">
                  Just{" "}
                  <span className="relative inline-block">
                    <span className="gold-shimmer italic">Nice</span>
                    <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0,5 Q25,0 50,5 Q75,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" className="text-honey" />
                    </svg>
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="font-display text-xl lg:text-2xl text-charcoal/70 italic leading-relaxed mb-5 max-w-xl mx-auto lg:mx-0"
              >
                A memoir for the woman who has been excellent her whole life - and exhausted for just as long.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-honey-dark font-medium tracking-wide mb-8 text-lg"
              >
                by Blessing "Bee" Nyamolo
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button asChild size="lg" className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-6 text-base shadow-lg shadow-honey/20">
                  <a href="#book-signup">
                    Be the First to Know <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-8 py-6 text-base">
                  <a href="#excerpt">
                    Read an Excerpt
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* The Book */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">The Book</span>
              <blockquote className="font-display text-2xl lg:text-4xl font-bold text-navy leading-snug">
                "I thought I was just nice.
                <br />
                Turns out, I had confused survival for personality."
              </blockquote>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="space-y-5 text-charcoal/70 text-lg leading-relaxed max-w-3xl mx-auto">
                <p>
                  For more than twenty years, Bee built a career that looked, from the outside, like everything success was supposed to look like. Degrees. Senior titles. Bigger responsibilities. Rooms she had worked hard to enter.
                </p>
                <p>
                  But underneath the achievement was a quieter pattern she couldn't yet see.
                </p>
                <p>
                  The yes when she meant no. The instinct to make herself useful. The need to get it right. The ability to carry more than she should.
                </p>
                <p>
                  What looked like personality had roots much older than her career.
                </p>
                <p>
                  <em>I Thought I Was Just Nice</em> is the memoir of a high-achieving woman who stops mistaking survival for personality and begins coming home to herself. It is for every woman who has been praised for her excellence while quietly wondering what it was costing her.
                </p>
                <p>
                  This is not a book about becoming someone else.
                </p>
                <p>
                  It is about seeing clearly what was always yours, what survival taught you, and what you get to choose now.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="mt-12">
              <div className="p-8 bg-navy rounded-2xl text-center">
                <p className="font-display text-2xl lg:text-3xl text-cream/90 italic leading-relaxed">
                  "I want the same woman. With different instructions."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* Familiar Signals */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">This Book May Feel Familiar If...</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">
              You have been carrying more than people can see
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {familiarSignals.map((signal, i) => (
              <FadeIn key={signal} delay={i * 75}>
                <div className="h-full bg-white border border-honey/10 rounded-2xl p-6 flex gap-4">
                  <CheckCircle className="w-5 h-5 text-honey-dark shrink-0 mt-1" />
                  <p className="text-charcoal/70 leading-relaxed">{signal}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the Book */}
      <section className="py-20 lg:py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-honey mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase">Inside the Book</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-cream/80 text-lg lg:text-xl leading-relaxed mb-6">
              Through childhood, ambition, career, marriage, motherhood, leadership, exhaustion, and reckoning, Bee traces the patterns she once mistook for personality - and what happened when she finally began to see them differently.
            </p>
            <p className="text-cream/70 text-lg leading-relaxed mb-10">
              A story about niceness. Perfectionism. People-pleasing. Visibility. Rest. Leadership. Choice. And the long journey home to yourself.
            </p>
            <blockquote className="font-display text-2xl lg:text-3xl text-honey italic leading-relaxed">
              "You can be excellent without abandoning yourself."
            </blockquote>
            <p className="text-honey/60 text-sm mt-3">- Bee</p>
          </FadeIn>
        </div>
      </section>

      <HoneycombDivider />

      {/* Excerpt */}
      <section id="excerpt" className="py-20 lg:py-28 bg-warm-white scroll-mt-20">
        <div className="container">
          <FadeIn className="text-center mb-12">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">Read an Excerpt</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">
              My Body Braced Before My Mind Did
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <article className="max-w-3xl mx-auto bg-white border border-honey/10 rounded-2xl p-7 sm:p-10 shadow-lg shadow-honey/5">
              <div className="space-y-5 text-charcoal/70 text-base lg:text-lg leading-relaxed">
                {sampleExcerpt.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <FadeIn className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-honey/10 rounded-3xl rotate-3" />
                <img
                  src="/images/bee-headshot.png"
                  alt="Blessing Bee Nyamolo"
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-xl shadow-honey/10"
                />
              </div>
            </FadeIn>

            <FadeIn delay={100} className="lg:col-span-3">
              <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">About the Author</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">
                Blessing "Bee" Nyamolo
              </h2>
              <div className="space-y-5 text-charcoal/70 text-lg leading-relaxed">
                <p>
                  Blessing "Bee" Nyamolo is an author, speaker, and finance executive with more than twenty years in corporate finance.
                </p>
                <p>
                  Her work explores what happens when excellence and self-abandonment become difficult to tell apart - and what becomes possible when women choose wholeness instead.
                </p>
                <p>
                  Hive & Thrive is her philosophy, her community, and her invitation:
                </p>
                <p className="font-display text-2xl text-navy italic">
                  Bring your gifts. Stay whole.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about/">
                  <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-cream px-8 py-5 text-base">
                    Meet Bee <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* Launch Details */}
      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="container">
          <FadeIn className="text-center mb-12">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">Launch Details</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">
              The book is coming
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {launchDetails.map((detail, i) => (
              <FadeIn key={detail.label} delay={i * 100}>
                <div className="h-full bg-white border border-honey/10 rounded-2xl p-7 text-center">
                  <div className="w-12 h-12 rounded-full bg-honey/15 text-honey-dark flex items-center justify-center mx-auto mb-5">
                    {detail.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-2">{detail.label}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{detail.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="book-signup" className="py-20 lg:py-24 bg-navy relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm" />
        <div className="absolute top-10 left-10 w-32 h-32 border border-honey/10 hex-clip opacity-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-honey/5 hex-clip" />

        <div className="container relative">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <span className="text-honey text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">Be the First to Know</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-cream mb-5">
              Join the launch list
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              Join the list for launch-day news and early access - and receive Honey Drops, the weekly letter from the Hive, in the meantime.
            </p>
            <KitForm className="max-w-md mx-auto" />
            <p className="text-honey/60 text-sm mt-3">
              No spam, ever. Just pure honey for your inbox.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="container">
          <FadeIn className="text-center mb-12">
            <span className="text-honey-dark text-sm font-semibold tracking-[0.15em] uppercase mb-3 block">Frequently Asked Questions</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">
              A few early details
            </h2>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-5">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 75}>
                <div className="bg-white border border-honey/10 rounded-2xl p-6">
                  <div className="flex gap-4">
                    <HelpCircle className="w-5 h-5 text-honey-dark shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-xl font-bold text-navy mb-2">{faq.question}</h3>
                      <p className="text-charcoal/65 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
