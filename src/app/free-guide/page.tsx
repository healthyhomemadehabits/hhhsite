import type { Metadata } from "next";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Eat Real, Live Better — Free Guide | Healthy Homemade Habits",
  description:
    "A warm, no-pressure starter guide to understanding real food and taking your very first step — the 80/20 way. Made by a Midwest couple who've been exactly where you are.",
};

const benefits = [
  {
    icon: "ph-magnifying-glass",
    accent: "a-forest",
    title: "Understand What UPFs Actually Are",
    description:
      "No fear, no jargon — just a clear, plain-language look at ultra-processed food and why it matters.",
  },
  {
    icon: "ph-scales",
    accent: "a-sky",
    title: "Learn the 80/20 Method",
    description:
      "The realistic framework that makes room for real life — and the foods you genuinely love.",
  },
  {
    icon: "ph-footprints",
    accent: "a-blush",
    title: "Take Your First Step — No Perfection Required",
    description:
      "One small, doable change to start today. Progress over perfection, always.",
  },
];

export default function FreeGuidePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className={styles.hero} id="get">
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">Free digital guide</span>
            <h1>
              Stop Eating Ultra-Processed Food Without Giving Up Everything
              You Love
            </h1>
            <p className={styles.sub}>
              A warm, no-pressure starter guide to understanding real food and
              taking your very first step — the 80/20 way. Made by a Midwest
              couple who&apos;ve been exactly where you are.
            </p>
            <div className={styles.metaRow}>
              <span className={styles.m}>
                <i className="ph ph-clock" />
                10-minute read
              </span>
              <span className={styles.dot} />
              <span className={styles.m}>
                <i className="ph ph-gift" />
                100% free
              </span>
              <span className={styles.dot} />
              <span className={styles.m}>
                <i className="ph ph-heart" />
                No perfection required
              </span>
            </div>
            <EmailCaptureForm buttonLabel="Send Me the Free Guide" />
            <p className="fineprint">
              <i className="ph ph-lock-simple" />
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
          <div className={styles.heroMedia}>
            <PlaceholderImage
              variant="rose"
              icon="ph-book-open"
              label="cover — “Eat Real, Live Better”"
            />
            <p className={styles.heroCap}>A free guide from Hana &amp; Timm</p>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="section line">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">Inside the guide</span>
            <h2>Three simple things you&apos;ll walk away with</h2>
          </div>
          <div className="kgrid cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className={`kcard ${benefit.accent}`}>
                <i className={`ph ${benefit.icon} kic`} />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section line">
        <div className={`wrap ${styles.aboutGrid}`}>
          <div className={styles.aboutMedia}>
            <PlaceholderImage
              icon="ph-camera"
              label="couple photo — Hana & Timm"
            />
          </div>
          <div>
            <span className="eyebrow">From us to you</span>
            <h2>We&apos;re Hana &amp; Timm.</h2>
            <p>
              We&apos;re a Midwest couple who got tired of feeling confused
              and manipulated at the grocery store — so we learned real food
              the honest way and started sharing it.
            </p>
            <p>
              This little guide is the exact thing we wish someone had handed
              us at the start. We&apos;re so glad you&apos;re here.
            </p>
            <p className={styles.sig}>Hana &amp; Timm</p>
          </div>
        </div>
      </section>

      {/* ============ MINI CTA ============ */}
      <section className="section line">
        <div className="wrap">
          <div className={`frame cta-center ${styles.minicta}`}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Grab your free copy of &ldquo;Eat Real, Live Better&rdquo;</h2>
            <p>
              Drop your email and we&apos;ll send it straight to your inbox.
              First step, taken.
            </p>
            <EmailCaptureForm
              buttonLabel="Send Me the Free Guide"
              className={styles.captureCenter}
            />
          </div>
        </div>
      </section>
    </>
  );
}
