import type { Metadata } from "next";
import Image from "next/image";
import Faq from "@/components/Faq";
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./page.module.css";

import erlbImg from "../../../public/images/web_mockups/Product Page ERLB.png";
import coupleImg from "../../../public/images/handt_couple_photo.jpeg";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Eat Real, Live Better",
  description:
    "A practical PDF guide to reading grocery labels, identifying Ultra Processed Foods, and building sustainable 80/20 eating habits - without giving up the foods you love.",
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
        text: "No! The 80/20 method is built so that for 20% of the week, you can relax and enjoy less-than-healthy foods without guilt. Life is about balance - if you mostly eat fresh, nutrient-rich foods, a little fun treat won't erase all that good work.",
      },
    },
    {
      "@type": "Question",
      name: "I've never dieted before. Is the 80/20 method for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! The 80/20 method is for anyone who wants to ease into eating healthier and sustainably keep eating healthier throughout life. Because the method is flexible, you choose the foods you eat - with the understanding that 80% of the time you're making healthy choices and 20% of the time you're choosing to indulge a bit.",
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
  title: "Eat Real, Live Better - $17 Guide to Cutting Ultra Processed Foods",
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
    title: "Eat Real, Live Better - $17 | Healthy Homemade Habits",
    description:
      "Learn to identify Ultra Processed Foods, read any ingredient label in seconds, and start the 80/20 real-food lifestyle. Instant PDF download, $17.",
    url: "https://www.healthyhomemadehabits.com/eat-real-guide",
  },
};

const features = [
  {
    icon: "ph-scales",
    accent: "a-forest",
    title: "The 80/20 Method, Explained Simply",
    description:
      "A realistic way to balance eating real foods, without giving up everything you love!",
  },
  {
    icon: "ph-list-magnifying-glass",
    accent: "a-blush",
    title: "Ingredients Labels, Decoded",
    description:
      "Knowing which foods to avoid becomes easy when you learn how to read labels. We teach you how to easily detect an Ultra Processed Food.",
  },
  {
    icon: "ph-clipboard-text",
    accent: "a-sky",
    title: "Two Big UPF Ingredient Charts",
    description:
      "Every ingredient Whole Foods bans, plus the surprising ones they still allow, with what each is used for and where it hides. Print them, save them, shop with them.",
  },
  {
    icon: "ph-piggy-bank",
    accent: "a-sage",
    title: "The Money Math",
    description:
      "Side-by-side cost breakdowns show how cooking real food at home costs less than buying prepackaged, plus tips on pantry staples and frozen vegetables that stretch your grocery budget even further.",
  },
  {
    icon: "ph-cooking-pot",
    accent: "a-forest",
    title: "Why Real Food Tastes Better",
    description:
      "The science of Sensory Specific Satiety explains why a bag of chips gets boring halfway through, and why whole foods keep your taste buds interested bite after bite.",
  },
  {
    icon: "ph-list-checks",
    accent: "a-blush",
    title: "What to Actually Eat",
    description:
      "A printable list of foods to focus on, foods to buy sparingly, and treats to save for your 20%, organized by category so meal planning gets easier every week.",
  },
];

const painPoints = [
  {
    icon: "ph-strategy",
    title: "Easier than a diet plan",
    text: "How to balance what you eat, using the 80/20 Method. Eat healthy, wholesome food, but also the foods you love!",
  },
  {
    icon: "ph-list-magnifying-glass",
    title: "Demystify ingredient labels",
    text: "What actually IS an Ultra Processed Food, and what are the easiest ways to spot them? Learn how to read an ingredients label like a pro! Understand the financial advantage of from-scratch cooking over convenience cooking.",
  },
  {
    icon: "ph-fork-knife",
    title: "Start cooking healthy today",
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
              We all want to eat healthier and live longer, right, but restrictive diets and total lifestyle overhauls leave us sad, hungry, and craving the exact foods we know we shouldn&apos;t eat. We&apos;ve cracked the code on traditional diets, and want to share with you a new kind of diet: one that's easy to start and easier to maintain.
            </p>
            <p className={styles.sub}>
              In this guide, we show you how you can enjoy the foods you love, while still maintaining a healthy, non-Ultra Processed diet. Sound too good to be true? Try it for yourself and see how easy it is!
            </p>
            <div className={styles.heroCta}>
              <a
                href="https://checkout.mailerlite.com/checkout/32175"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary lg"
              >
                Buy Eat Real, Live Better - $17
                <i className="ph ph-arrow-square-out" />
              </a>
              <span className={styles.guarantee}>
                <i className="ph ph-watch" />
                Instant download. Start reading today. &nbsp;·&nbsp; Opens in a new tab.
              </span>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.productCover}>
              <Image
                src={erlbImg}
                alt="Eat Real, Live Better product mockup"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className={styles.heroCap}>
              <span className={styles.price}>$17</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAIN ============ */}
      <section className="section line">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">A better diet</span>
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
            <h2>Everything you need to start eating real this week</h2>
            <p className="lead">
              We show you how easy healthy eating can be!
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
          <h2>Imagine picking up any package and knowing exactly what&apos;s in it at a glance</h2>
          <p>
            <span className={styles.leadLine}>
              Make the right choice, every time!
            </span>{" "}
            You scan a label in seconds, recognize the red flags, and make a confident choice because you actually understand what real food is. Eat Real, Live Better helps you lose weight, save money, and feel healthier every day, one meal at a time!
          </p>
        </div>
      </section>

      {/* ============ BIO ============ */}
      <section className="section line">
        <div className={`wrap ${styles.bioGrid}`}>
          <div className={styles.bioMedia}>
            <div className={styles.coupleCover}>
              <Image
                src={coupleImg}
                alt="Hana and Timm"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <span className="eyebrow">From us to you</span>
            <h2>We figured it out so you don&apos;t have to start from scratch.</h2>
            <p>
              We&apos;re Hana &amp; Timm, lovers of fresh salads, perfectly seared steaks (cast iron, not grilled!), gooey homemade brownies, and strong black coffee. In 2020, we made the switch away from Ultra Processed Foods, and our lives changed for the better in so many ways! If you&apos;ve been working to eat healthier, but need a bit of guidance, we&apos;re the un-fussy foodie friends you&apos;ve been looking for! 
            </p>
            <p>
              This guide is what we wish we&apos;d had years ago! It&apos;s a collection of all the things we've learned along the way!
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
              <a
                href="https://checkout.mailerlite.com/checkout/32175"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary lg"
              >
                Get Eat Real, Live Better
                <i className="ph ph-arrow-square-out" />
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
              <div>
                <p className="fineprint">
                  <i className="ph ph-files" />
                  Instant digital download &nbsp;·&nbsp; Opens in a new tab.
                </p>
                <p className="fineprint" style={{ marginTop: 8 }}>
                  <i className="ph ph-prohibit" />
                  <span style={{ textAlign: "left" }}>
                    All sales of downloadable PDFs are final.<br />
                    No refunds, returns, or exchanges once the file is accessed.<br />
                    <a href="/refund-policy" style={{ color: "var(--forest)", textDecoration: "underline" }}>Refund Policy</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
