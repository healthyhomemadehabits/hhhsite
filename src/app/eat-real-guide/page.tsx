import type { Metadata } from "next";
import Faq from "@/components/Faq";
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./page.module.css";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Eat Real, Live Better",
  description:
    "A practical PDF guide to reading grocery labels, identifying Ultra Processed Foods, and building sustainable 80/20 eating habits — without giving up the foods you love.",
  url: "https://www.healthyhomemadehabits.com/eat-real-guide",
  brand: { "@type": "Organization", name: "Healthy Homemade Habits" },
  author: [
    { "@type": "Person", name: "Hana" },
    { "@type": "Person", name: "Timm" },
  ],
  offers: {
    "@type": "Offer",
    price: "17.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Healthy Homemade Habits" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this a diet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a way, yes, but more than that, 80/20 is a way of life. Unlike traditional diets, the 80/20 method is much more flexible. The focus is on balancing your diet so you're mostly eating real food, and eating smaller amounts of indulgences.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to give up my favorite foods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No! The 80/20 method is built so that for 20% of the week, you can relax and enjoy less-than-healthy foods without guilt. Life is about balance — if you mostly eat fresh, nutrient-rich foods, a little fun treat won't erase all that good work.",
      },
    },
    {
      "@type": "Question",
      name: "I've never dieted before. Is the 80/20 method for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! The 80/20 method is for anyone who wants to ease into eating healthier and sustainably keep eating healthier throughout life. Because the method is flexible, you choose the foods you eat — with the understanding that 80% of the time you're making healthy choices and 20% of the time you're choosing to indulge a bit.",
      },
    },
    {
      "@type": "Question",
      name: "When can I expect to see results from eating less ultra processed food?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Results vary, but this is a marathon, not a sprint. If you start cutting UPFs and balancing your diet 80% fresh and wholesome with 20% indulgences, you'll likely start to see and feel benefits fairly quickly. This is a long-term eating method with benefits that cumulate over time.",
      },
    },
    {
      "@type": "Question",
      name: "How do I receive my Eat Real, Live Better PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After purchasing, you'll have the option to click a download now button; the PDF saves directly to your device. We'll also send it in an email. It's an instant download readable on any device, any time.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Eat Real, Live Better — $17 Guide to Cutting Ultra Processed Foods",
  description:
    "A practical PDF guide to reading grocery labels, identifying Ultra Processed Foods, and building 80/20 eating habits without giving up the foods you love. $17 instant download.",
  keywords: [
    "how to stop eating ultra processed foods",
    "80/20 diet guide",
    "real food eating plan",
    "ingredient label reading guide",
    "UPF guide PDF",
    "healthy eating without dieting",
    "cut processed food from diet",
    "ultra processed food explained",
    "real food swaps",
  ],
  openGraph: {
    title: "Eat Real, Live Better — $17 | Healthy Homemade Habits",
    description:
      "Learn to identify Ultra Processed Foods, read any ingredient label in seconds, and start the 80/20 real-food lifestyle. Instant PDF download, $17.",
    url: "https://www.healthyhomemadehabits.com/eat-real-guide",
  },
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

const painPoints = [
  {
    icon: "ph-warning-circle",
    title: "xxxxx",
    text: "How to balance what you eat, using the 80/20 Method. Eat healthy, wholesome food, but also the foods you love!",
  },
  {
    icon: "ph-question",
    title: "xxxxx",
    text: "What actually IS an Ultra Processed Food, and what are the easiest ways to spot them? Learn how to read an ingredients label like a pro! Understand the financial advantage of from-scratch cooking over convenience cooking.",
  },
  {
    icon: "ph-smiley-nervous",
    title: "xxxxx",
    text: "Our favorite healthy recipes from across the internet, so you can start cooking healthy today!",
  },
];

const faqItems = [
  {
    question: "Is this a diet?",
    answer:
      "In a way, yes, but more than that, 80/20 is a way of life. Unlike traditional diets, that require you to eat certain foods, give up other foods, and count your calories, the 80/20 method is much more flexible. The focus is on balancing your diet in a way that you're mostly eating real food, and eating smaller amounts of food that we call “indulgences”.",
  },
  {
    question: "So, are you saying that I don't have to give up my favorite foods??",
    answer:
      "Right! The 80/20 method is built in a way that, for 20% of the week, you can relax a little and enjoy some… less-than-healthy foods… without guilt, or feeling like you “slipped up”. Life is about balance, and if you mostly eat fresh, nutrient rich foods, a little bit of a fun treat won't erase all that good work.*",
  },
  {
    question: "I've never dieted before, so I'm nervous, but I know I want to eat healthier. Is this for me?",
    answer:
      "Yes! The 80/20 method is for anyone who wants to ease into eating healthier, and sustainably keep eating healthier throughout life. Because the method is flexible, you're able to choose the foods you eat, just with the understanding that 80% of the time, you're making healthy choices, and 20% of the time, you're making the choice to indulge a bit.",
  },
  {
    question: "When can I expect to see results?",
    answer:
      "It really depends. This is a marathon, not a sprint, and if you start putting the work in to cut down on UPFs and balance your diet 80% fresh and wholesome with 20% indulgences, I think you'll start to see and feel benefits pretty quickly. However, this is more of a long-term eating method, with benefits and results that cumulate over time, rather than a quick-fix. Just keep at it, and you'll be surprised how good you feel!",
  },
  {
    question: "How will I receive my PDF?",
    answer:
      "After purchasing, you'll have the option to click a “download now” button; the PDF will save directly to your device! We'll also send it in an email! This is an instant download that can be read on any device, any time.",
  },
];

export default function EatRealGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">Eat Real, Live Better</span>
            <h1>Stop Eating Ultra Processed Food (Without Giving Up Everything You Love)</h1>
            <p className={styles.sub}>
              We all want to eat healthier and live longer, right, but restrictive diets and total lifestyle overhauls leave us sad, hungry, and craving the exact foods we know we shouldn&apos;t eat. We&apos;ve cracked the code on traditional diets, and want to share with you a new kind of diet: a diet of balance and joy.
            </p>
            <p className={styles.sub}>
              
            </p>
            <div className={styles.heroCta}>
              <a href="#buy" className="btn btn-primary lg">
                Get the Guide — $17
              </a>
              <span className={styles.guarantee}>
                <i className="ph ph-watch" />
                Instant download. Start reading today.
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
              <span className={styles.pages}>Get the PDF right now</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAIN ============ */}
      <section className="section line">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">Feeling stuck in a rut?</span>
            <h2>Eat Real, Live Better: How to Begin Eating Real Food Without Giving Up Everything You Love</h2>
          </div>
          <div className={styles.painCols}>
            {painPoints.map((point) => (
              <div key={point.text} className={styles.painCard}>
                <div className={styles.painHead}>
                  <i className={`ph ${point.icon} ${styles.ic}`} />
                  <h3>{point.title}</h3>
                </div>
                <p>{point.text}</p>
              </div>
            ))}
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
            <span className="eyebrow">From us to you</span>
            <h2>We figured it out so you don&apos;t have to start from scratch.</h2>
            <p>
              We&apos;re Hana &amp; Timm, lovers of fresh salads, perfectly seared steaks (cast iron, not grilled!), gooey homemade brownies, and strong black coffee. In 2020, we made the switch away from Ultra Processed Foods, and our lives changed for the better in so many ways! If you&apos;ve been working to eat healthier, but need a bit of guidance, we&apos;re the un-fussy foodie friends you&apos;ve been looking for! 
            </p>
            <p>
              This guide is what we wish we&apos;d had on day one. It&apos;s a collection of all the things we learned the long way!
            </p>
            <p className={styles.sig}>Hana &amp; Timm</p>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section line">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">In case you were wondering</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section line" id="buy">
        <div className="wrap">
          <div className={`frame cta-center ${styles.final}`}>
            <span className="eyebrow">Download your copy</span>
            <h2> Eat Real, Live Better: How to Begin Eating Real Food Without Giving Up Everything You Love</h2>
            <p className="lead" style={{ marginTop: "20px" }}>
              Start building healthy habits today!
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
            <p className="fineprint" style={{ justifyContent: "center", marginTop: 8 }}>
              <i className="ph ph-prohibit" />
              All sales of downloadable PDFs are final. No refunds, returns, or exchanges once the file is accessed.{" "}
              <a href="/refund-policy" style={{ color: "var(--forest)", textDecoration: "underline" }}>Refund Policy</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
