import type { Metadata } from "next";
import Faq from "@/components/Faq";
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Eat Real, Live Better — $17 | Healthy Homemade Habits",
  description:
    "A practical guide to reading grocery labels, navigating every aisle with confidence, and finally understanding what ultra-processed food actually is — and how to avoid it.",
};

const features = [
  {
    icon: "ph-magnifying-glass",
    accent: "a-forest",
    title: "Label Reading in Plain English",
    description:
      "Decode any nutrition label in under 60 seconds. Know what the numbers mean, what to ignore, and what's a red flag.",
  },
  {
    icon: "ph-prohibit",
    accent: "a-blush",
    title: "The UPF Red Flag List",
    description:
      "The exact ingredients that signal ultra-processed — no chemistry degree required. Spot them fast, skip them confidently.",
  },
  {
    icon: "ph-storefront",
    accent: "a-sky",
    title: "Aisle-by-Aisle Navigation",
    description:
      "Where the real food actually lives, which aisles to treat with caution, and how stores use layout to nudge your cart.",
  },
  {
    icon: "ph-swap",
    accent: "a-sage",
    title: "Real Food Swaps",
    description:
      "The easiest swaps for the most common UPFs in your kitchen — practical, affordable, and zero deprivation.",
  },
  {
    icon: "ph-brain",
    accent: "a-forest",
    title: "Why Ultra-Processed Food Hooks You",
    description:
      "Understanding the science behind cravings makes cutting UPFs feel like a choice, not a fight. Knowledge is the edge.",
  },
  {
    icon: "ph-scales",
    accent: "a-blush",
    title: "The 80/20 Mindset",
    description:
      "The real-food lifestyle that doesn't demand perfection. Make better choices most of the time — and enjoy the rest.",
  },
];

const faqItems = [
  {
    question: "How is this different from the Grocery Guide?",
    answer:
      "Eat Real, Live Better focuses on the foundation — understanding UPFs, reading labels, and building awareness. The Grocery Guide ($37) goes further with a full done-for-you system: grocery lists, meal planning, and aisle-by-aisle shopping strategy. Think of this as the starting point and that as the full playbook.",
  },
  {
    question: "I don't know anything about real food — is this for me?",
    answer:
      "Yes, this is exactly for you. It's written for people starting from zero, in plain language with no jargon. If you've never read an ingredient label or wondered what 'ultra-processed' actually means, this is your starting point.",
  },
  {
    question: "Do I have to stop eating foods I love?",
    answer:
      "No. The 80/20 approach means you keep the foods you love — you just make better default choices most of the time. The goal is awareness and confidence, not restriction.",
  },
  {
    question: "How do I get it after I buy?",
    answer:
      "It's a digital download delivered to your inbox right after purchase. One-time payment, yours forever, read it on any device.",
  },
];

export default function EatRealGuidePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">Eat Real, Live Better</span>
            <h1>Finally Know What You&apos;re Actually Eating</h1>
            <p className={styles.sub}>
              A practical guide to reading grocery labels, navigating every
              aisle with confidence, and cutting ultra-processed food —
              without giving up the foods you love.
            </p>
            <div className={styles.heroCta}>
              <a href="#buy" className="btn btn-primary lg">
                Get the Guide — $17
              </a>
              <span className={styles.guarantee}>
                <i className="ph ph-shield-check" />
                One-time purchase · Yours forever
              </span>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <PlaceholderImage
              variant="rose"
              icon="ph-book-open"
              label="cover — Eat Real, Live Better"
            />
            <div className={styles.heroCap}>
              <span className={styles.price}>$17</span>
              <span className={styles.pages}>instant digital download</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAIN ============ */}
      <section className="section line">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">Sound familiar?</span>
            <h2>You want to eat better — but it&apos;s hard to know what&apos;s real</h2>
          </div>
          <div className={styles.painCols}>
            <div className={styles.painCard}>
              <i className={`ph ph-warning-circle ${styles.ic}`} />
              <p>
                You turn over a package and the ingredient list reads like a
                chemistry exam. You put it back — or just give up and grab it
                anyway.
              </p>
            </div>
            <div className={styles.painCard}>
              <i className={`ph ph-question ${styles.ic}`} />
              <p>
                &ldquo;Natural,&rdquo; &ldquo;wholesome,&rdquo; &ldquo;made with real ingredients.&rdquo; You
                can&apos;t tell what&apos;s actually healthy versus what&apos;s just well
                marketed.
              </p>
            </div>
            <div className={styles.painCard}>
              <i className={`ph ph-smiley-nervous ${styles.ic}`} />
              <p>
                You&apos;ve tried to eat cleaner before, but it felt overwhelming.
                Nobody gave you a clear, simple starting point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INSIDE ============ */}
      <section className="section line" id="inside">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">What&apos;s inside</span>
            <h2>Everything you need to eat real — starting this week</h2>
            <p className="lead">
              Six focused sections that turn confusion into clarity, one
              grocery trip at a time.
            </p>
          </div>
          <div className="kgrid cols-3">
            {features.map((feature) => (
              <div key={feature.title} className={`kcard ${feature.accent}`}>
                <i className={`ph ${feature.icon} kic`} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRANSFORMATION ============ */}
      <section className="section line">
        <div className={`wrap ${styles.inner}`}>
          <span className="eyebrow">Life after the guide</span>
          <h2>Imagine picking up any package and knowing exactly what&apos;s in it</h2>
          <p>
            <span className={styles.leadLine}>
              No more guessing. No more guilt. No more being played.
            </span>{" "}
            You scan a label in seconds, recognize the red flags, and make a
            confident choice — not because you memorized a list, but because you
            actually understand what real food is. That knowledge doesn&apos;t go
            away. It changes every grocery trip, every meal, for the rest of
            your life.
          </p>
        </div>
      </section>

      {/* ============ BIO ============ */}
      <section className="section line">
        <div className={`wrap ${styles.bioGrid}`}>
          <div className={styles.bioMedia}>
            <PlaceholderImage
              icon="ph-camera"
              label="couple photo — Hana & Timm"
            />
          </div>
          <div>
            <span className="eyebrow">Who made this</span>
            <h2>We figured it out so you don&apos;t have to start from scratch.</h2>
            <p>
              We&apos;re Hana &amp; Timm — a Midwest couple who spent years learning
              what ultra-processed food actually is, how to spot it, and how to
              build a real-food life without turning it into a full-time job.
            </p>
            <p>
              This guide is what we wish we&apos;d had on day one. The clear, honest
              starting point nobody gave us.
            </p>
            <p className={styles.sig}>Hana &amp; Timm</p>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section line">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">Good questions</span>
            <h2>Before you grab it</h2>
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section line" id="buy">
        <div className="wrap">
          <div className={`frame cta-center ${styles.final}`}>
            <span className="eyebrow">Start here</span>
            <h2>Your real food life starts with knowing what&apos;s real.</h2>
            <p className="lead" style={{ marginTop: "20px" }}>
              Get the guide and walk into any grocery store with confidence.
            </p>
            <div className={styles.priceline}>
              $17 <small>One-time · yours forever</small>
            </div>
            <div style={{ marginTop: "26px" }}>
              <a href="#" className="btn btn-primary lg">
                Get Eat Real, Live Better
              </a>
            </div>
            <p className="fineprint" style={{ justifyContent: "center" }}>
              <i className="ph ph-files" />
              Instant digital download
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
