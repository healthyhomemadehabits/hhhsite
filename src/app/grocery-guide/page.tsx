import type { Metadata } from "next";
import Faq from "@/components/Faq";
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The Grocery Guide — $37 | Healthy Homemade Habits",
  description:
    "A 100+ page done-for-you system for reading labels, cutting ultra-processed food, and shopping with real confidence — no diet culture, no guilt, no guesswork.",
};

const features = [
  {
    icon: "ph-magnifying-glass",
    accent: "a-forest",
    title: "Label Reading, Decoded",
    description:
      "Exactly what to look for, what to ignore, and the red-flag words that signal UPFs.",
  },
  {
    icon: "ph-prohibit",
    accent: "a-blush",
    title: "UPF Identification",
    description:
      "Spot ultra-processed ingredients fast — without memorizing a chemistry textbook.",
  },
  {
    icon: "ph-storefront",
    accent: "a-sky",
    title: "Retail Psychology",
    description:
      "How stores are designed to nudge you — and how to walk the aisles on your terms.",
  },
  {
    icon: "ph-list-checks",
    accent: "a-sage",
    title: "Done-for-You Grocery List",
    description:
      "A real-food shopping list you can use this week — no blank-page panic.",
  },
  {
    icon: "ph-fork-knife",
    accent: "a-forest",
    title: "Meal Planning Starter",
    description:
      "A simple framework to turn your cart into easy, repeatable weeknight meals.",
  },
  {
    icon: "ph-scales",
    accent: "a-blush",
    title: "The 80/20 Framework",
    description:
      "The realistic method that keeps real food sustainable — and keeps the foods you love.",
  },
];

const faqItems = [
  {
    question: "Is this a diet?",
    answer:
      'Not even close. There’s no calorie counting, no meal restrictions, and no rules about what you "can’t" have. It’s about understanding real food and shopping with confidence — the 80/20 way.',
  },
  {
    question: "Do I have to give up all my favorite foods?",
    answer:
      "Nope. The whole point of 80/20 is that you keep the foods you love. We just help you make better default choices most of the time, so the rest doesn't have to be a big deal.",
  },
  {
    question: "Is this for beginners?",
    answer:
      "Absolutely. It's written for real people starting from scratch — plain language, no jargon, and a clear first step. If you've never read an ingredient label in your life, you're exactly who this is for.",
  },
  {
    question: "How do I get it after I buy?",
    answer:
      "It's a digital download — delivered to your inbox right after purchase. One-time payment, yours forever, read it on any device.",
  },
];

export default function GroceryGuidePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">The Grocery Guide</span>
            <h1>Grocery Shopping Is Where Healthy Eating Actually Starts</h1>
            <p className={styles.sub}>
              A 100+ page done-for-you system for reading labels, cutting
              ultra-processed food, and shopping with real confidence — no
              diet culture, no guilt, no guesswork.
            </p>
            <div className={styles.heroCta}>
              <a href="#buy" className="btn btn-primary lg">
                Get the Guide — $37
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
              icon="ph-book-bookmark"
              label="cover — Grocery Guide"
            />
            <div className={styles.heroCap}>
              <span className={styles.price}>$37</span>
              <span className={styles.pages}>100+ pages · instant download</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAIN ============ */}
      <section className="section line">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">Sound familiar?</span>
            <h2>The grocery store shouldn&apos;t feel like a trap</h2>
          </div>
          <div className={styles.painCols}>
            <div className={styles.painCard}>
              <i className={`ph ph-warning-circle ${styles.ic}`} />
              <p>
                You want to eat better, but the grocery store feels like a
                minefield of confusing claims.
              </p>
            </div>
            <div className={styles.painCard}>
              <i className={`ph ph-question ${styles.ic}`} />
              <p>
                You can&apos;t always tell what&apos;s actually healthy versus
                what&apos;s just marketed that way.
              </p>
            </div>
            <div className={styles.painCard}>
              <i className={`ph ph-receipt ${styles.ic}`} />
              <p>
                Every week you overspend — and still walk out feeling like you
                made the wrong choices.
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
            <h2>Everything you need to shop with confidence</h2>
            <p className="lead">
              Six practical sections that turn the grocery store from
              overwhelming to easy.
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
          <h2>Imagine walking in calm and walking out sure</h2>
          <p>
            <span className={styles.leadLine}>
              No more standing frozen in the cereal aisle.
            </span>{" "}
            You read a label in seconds, skip the marketing traps, and fill
            your cart with real food you actually feel good about. No guilt,
            no impulse buys, no overspending — just quiet confidence and the
            knowledge that you know exactly what you&apos;re buying and why.
            That&apos;s not a diet. That&apos;s just how you shop now.
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
            <span className="eyebrow">Who&apos;s behind it</span>
            <h2>We learned this the hard way so you don&apos;t have to.</h2>
            <p>
              We&apos;re Hana &amp; Timm — a Midwest couple who got tired of
              feeling confused, manipulated, and broke at the grocery store.
              So we spent years learning real food, ultra-processed
              ingredients, and what it actually takes to eat well without
              making it our whole personality.
            </p>
            <p>
              This guide is all of it, organized and done-for-you. Everything
              we wish we&apos;d had on day one.
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
            <span className="eyebrow">Take back your cart</span>
            <h2>Ready to take back control of your cart?</h2>
            <p className="lead" style={{ marginTop: "20px" }}>
              Stop guessing at the grocery store. Get the whole system today.
            </p>
            <div className={styles.priceline}>
              $37 <small>One-time · yours forever</small>
            </div>
            <div style={{ marginTop: "26px" }}>
              <a href="#" className="btn btn-primary lg">
                Get the Grocery Guide
              </a>
            </div>
            <p className="fineprint" style={{ justifyContent: "center" }}>
              <i className="ph ph-files" />
              100+ pages · instant digital download
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
