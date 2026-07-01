import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Healthy Homemade Habits — Real Food. Real Life. 80/20.",
  },
  description:
    "Hana & Timm help everyday people cut Ultra Processed Foods using the 80/20 eating method — without giving up the foods they love. Get a free UPF ingredient guide, grocery shopping system, and weekly real-food tips.",
  keywords: [
    "ultra processed foods",
    "cut processed foods",
    "80/20 diet",
    "real food lifestyle",
    "healthy grocery shopping",
    "UPF free diet",
    "healthy eating guide",
    "whole food habits",
    "avoid ultra processed food",
  ],
  openGraph: {
    title: "Healthy Homemade Habits — Real Food. Real Life. 80/20.",
    description:
      "Cut Ultra Processed Foods without giving up the foods you love. Free UPF ingredient guide, grocery list system, and weekly real-food tips from Hana & Timm.",
    url: "https://www.healthyhomemadehabits.com",
  },
};

const beliefs = [
  {
    icon: "ph-bowl-food",
    accent: "a-forest",
    title: "Food should nourish you, not confuse you!",
    description:
      "Ingredient labels are straightforward, but the actual ingredients? Not always. We made a list of the most common Ultra Processed Ingredients you'll find in everyday foods, explain what they do in simple terms, and uncover what foods you'll find them in.",
  },
  {
    icon: "ph-scales",
    accent: "a-sky",
    title: "Balance is everything!",
    description:
      "We've been on the 80/20 diet for the last 6 years, and we feel great! 80% of the time, we eat fresh and wholesome foods. 20% of the time, we're more relaxed and indulge a little. Balance through a less restrictive diet results in sustainable success.",
  },
  {
    icon: "ph-shopping-cart-simple",
    accent: "a-blush",
    title: "Healthy eating starts at the grocery store!",
    description:
      "You can't run before you learn to walk, and the same goes with eating healthy. Before you cook, you need to organize and plan your grocery shop. With our Perfect Grocery List, we make it easy to plan your meals and efficiently move through the grocery store.",
  },
];

const eatRealFeatures = [
  {
    icon: "ph-scales",
    label: "Balance what you eat",
    description: "Use the 80/20 method to eat healthy, wholesome food, but also eat foods that you love!",
  },
  {
    icon: "ph-magnifying-glass",
    label: "Spot UPFs easily",
    description: "learn what Ultra Processed Foods actually are, and the easiest ways to spot them!",
  },
  {
    icon: "ph-article",
    label: "Read ingredient labels like a pro",
  },
  {
    icon: "ph-money",
    label: "Save money!",
    description: "Learn the real financial advantages of from-scratch cooking over convenience cooking",
  },
  {
    icon: "ph-hand-heart",
    label: "Learn new recipes",
    description: "We've included some of our favorite healthy recipes from across the internet, so you can start cooking healthy today!",
  },
];

type BulletItem = string | { prefix: string; bold: string; text: string };

function renderBullet(b: BulletItem) {
  if (typeof b === 'string') return b;
  return (
    <span>
      {b.prefix}
      <b>{b.bold}</b>
      {b.text}
    </span>
  );
}

const groceryFeatures: {
  icon: string;
  label: string;
  description?: string;
  bullets?: BulletItem[];
}[] = [
  {
    icon: "ph-map-trifold",
    label: "Templates and instructions for The Perfect Grocery List",
    bullets: [
      "+ 4 beautifully simple, blank grocery lists",
      "+ Blank weekly breakfast, lunch, and dinner menus to help you plan your meals ahead of time",
      "+ How to think in price-per ounce so you can easily choose the best value products and save money!",
    ],
  },
  {
    icon: "ph-list-magnifying-glass",
    label: "Behind the scenes",
    bullets: [
      "+ A look at how grocery stores try to get you to buy more of the stuff you don't need.",
      "+ Grocery stores use secret tactics to get you to buy Ultra Processed Foods. Have you fallen for them?!",
    ],
  },
  {
    icon: "ph-jar-label",
    label: 'A deep dive into why some "health" foods are actually Ultra Processed',
  },
  {
    icon: "ph-info",
    label: "Shopping tips and tricks from a pro",
    description: "become a more efficient and conscientious shopper!",
  },
  {
    icon: "ph-chef-hat",
    label: "14 of our favorite recipes",
    description: "get started with healthy cooking and eating this week!",
    bullets: [
      { prefix: "+ ", bold: "BONUS: ", text: "A done for you grocery list, containing all the ingredients you'll need from these recipes, so you can try this system out right away!" },
    ],
  },
  {
    icon: "ph-list-heart",
    label: "A list of our recommended kitchen staples and common food substitutions",
  },
];

const youtubeVideos = [
  {
    duration: "12:04",
    title: "Reading labels at the store (what we actually skip)",
    meta: "Grocery haul · This week",
  },
  {
    duration: "08:37",
    title: "5 ultra-processed swaps we make every single week",
    meta: "Real food swaps",
  },
  {
    duration: "15:22",
    title: "A real 80/20 week of eating (no perfection required)",
    meta: "Meal plan · Honest",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className={styles.hero} id="top">
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">Healthy Homemade Habits</span>
            <h1 style={{ marginTop: "22px" }}>
              Helping You Start Better Habits,
              <br />
              One Grocery Trip At A Time.
              <br />
              {/* <span className="accent">80/20.</span> */}
            </h1>
            <p className={styles.sub}>
              Hey! We&apos;re Hana and Timm, the husband and wife team behind Healthy Homemade Habits! We love helping people like you cut Ultra Processed Foods out of your diet, and we do it without making you give up everything you love! Want to find out how? Check out the links below!
            </p>
            <div className={styles.heroCta}>
              <Link href="/free-guide" className="btn btn-primary">
                Get the Free Guide
              </Link>
              <Link href="/the-perfect-list" className="btn btn-outline">
                Shop the Grocery Guide
              </Link>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <PlaceholderImage
              icon="ph-camera"
              label="lifestyle photo — Hana & Timm in the kitchen"
            />
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className={styles.trust}>
        <div className={`wrap ${styles.trustInner}`}>
          <span className={styles.trustItem}>
            Decoding UPFs
          </span>
          <span className={styles.trustItem}>
            80/20 Lifestyle
          </span>
          <span className={styles.trustItem}>Efficient Grocery Shopping</span>
        </div>
      </section>

      {/* ============ WHAT WE BELIEVE ============ */}
      <section className="section believe">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">What we believe</span>
            <h2>Eating healthfully shouldn&apos;t be gatekept</h2>
          </div>
          <div className="kgrid cols-3">
            {beliefs.map((belief) => (
              <div key={belief.title} className={`kcard ${belief.accent}`}>
                <i className={`ph ${belief.icon} kic`} />
                <h3>{belief.title}</h3>
                <p>{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FREE RESOURCE ============ */}
      <section className="section line" id="freebie">
        <div className="wrap">
          <div className={`frame ${styles.freebieGrid}`}>
            <div className={styles.freebieCover}>
              <PlaceholderImage
                variant="rose"
                icon="ph-book-open"
                label="cover — “Eat Real, Live Better”"
              />
            </div>
            <div>
              <span className="eyebrow">Free resource - The Five Second Shopper</span>
              <h2>Want to cut out Ultra Processed Foods, but don&apos;t know where to start? Let us help you!</h2>
              <p>
                We&apos;ve made an easy to read list of all the common Ultra Processed Ingredients you&apos;ll encounter, so you can easily identify them in your favorite grocery store foods. They&apos;re organized alphabetically, so they&apos;re easy to locate, and color coded so you can quickly scan for “Fine to Eat”, “Eat in Moderation”, and “Best to Avoid”. Plus, we included our go-to formula for deciding whether or not a product is worth it to consume. Best of all, it&apos;s completely free!
              </p>
              <EmailCaptureForm buttonLabel="Send Me the Guide" />
              <p className="fineprint">
                <i className="ph ph-lock-simple" />
                When you download The 5-Second Shopper, you&apos;re agreeing to signing up for our email list. We email once a week, with no obligation to purchase anything. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SM PAID PRODUCT ============ */}
      <section className="section line" id="product">
        <div className={`wrap ${styles.productGrid}`}>
          <div className={styles.productCover}>
            <span className={styles.productTag}>Most loved</span>
            <PlaceholderImage
              variant="rose"
              icon="ph-book-bookmark"
              label="cover — Grocery Guide"
            />
          </div>
          <div>
            <span className="eyebrow">Eat Real, Live Better</span>
            <h2>Tired of traditional dieting, but seeing no results? Our approach is different.</h2>
            <p className={styles.lead}>
              Now that you know what common Ultra Processed ingredients are lurking in your favorite foods, are you ready to take the next step in cutting them out of your diet? If it sounds daunting, we make it easy for you! <span><b>Eat Real, Live Better: How to Begin Eating Real Food Without Giving Up Everything You Love </b></span>goes more in depth on why Ultra Processed Foods exist, why the grocery stores push them, and how to safeguard yourself against them with the 80/20 eating method. If you&apos;ve been wanting to eat healthier but need a little extra guidance, look no further than this PDF!
            </p>
            <div className={styles.featureList}>
              {eatRealFeatures.map((f) => (
                <div key={f.label} className={styles.f}>
                  <i className={`ph ${f.icon}`} />
                  <span>
                    <b>{f.label}</b>
                    {f.description && ` - ${f.description}`}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.priceRow}>
              <span className={styles.price}>$17</span>
              <span className={styles.was}>Take the first step to healthy eating!</span>
            </div>
            <Link href="/the-perfect-list" className="btn btn-primary">
              Get the Grocery Guide
            </Link>
            <p className="fineprint">
              <i className="ph ph-watch" />
              Instant download. Start reading today.
            </p>
          </div>
        </div>
      </section>

      {/* ============ LG PAID PRODUCT ============ */}
      <section className="section line" id="product">
        <div className={`wrap ${styles.productGrid}`}>
          <div>
            <span className="eyebrow">The Perfect Grocery List</span>
            <h2>Tired of spending hours at the grocery store, and still always forgetting one thing?</h2>
            <p className={styles.lead}>
              We all have to grocery shop, so why not make the experience more enjoyable?! Timm and I have developed a guide to make your shopping trips quicker, easier, and actually fun! This guide helps you shop smarter, eat healthier, and create better habits one trip at a time!
            </p>
            <div className={styles.featureList}>
              {groceryFeatures.map((f) => (
                <div key={f.label} className={styles.f}>
                  <i className={`ph ${f.icon}`} />
                  <span>
                    <b>{f.label}</b>
                    {f.description && ` - ${f.description}`}
                    {f.bullets && f.bullets.length > 0 && (
                      <ul>
                        {f.bullets.map((b, i) => (
                          <li key={i}>{renderBullet(b)}</li>
                        ))}
                      </ul>
                    )}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.priceRow}>
              <span className={styles.price}>$47</span>
              <span className={styles.was}>Become a smarter shopper today!</span>
            </div>
            <Link href="/the-perfect-list" className="btn btn-primary">
              Get the Grocery Guide
            </Link>
            <p className="fineprint">
              <i className="ph ph-hourglass-medium" />
              Instant download. Start shopping smarter today!
            </p>
          </div>
          <div className={styles.productCover}>
            <span className={styles.productTag}>Most loved</span>
            <PlaceholderImage
              variant="rose"
              icon="ph-book-bookmark"
              label="cover — Grocery Guide"
            />
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section line" id="about">
        <div className={`wrap ${styles.aboutGrid}`}>
          <div className={styles.aboutMedia}>
            <PlaceholderImage
              icon="ph-camera"
              label="couple photo — Hana & Timm"
            />
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>We&apos;re Hana &amp; Timm.</h2>
            <p>
              We&apos;re a couple of enthusiastic homecooks, big-time coffee drinkers, lovers of cooking competition shows, and armchair retail analysts. In 2020, we made the decision to get serious about our health, cut Ultra Processed Foods out of our diet, and streamline our grocery shopping so we could spend more time doing the things we love, like cooking together! 
            </p>
            <p>We&apos;re so excited to share what we&apos;ve learned with you!</p>
            <p className={styles.sig}>- Hana &amp; Timm</p>
            <a href="#" className="linkarrow">
              Read our full story <i className="ph ph-arrow-right" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ YOUTUBE ============ */}
      <section className="section line">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">More free tips and tricks</span>
            <h2>We&apos;re on YouTube!</h2>
            <p className="lead">
              We post new videos every week about efficient grocery shopping, living the 80/20 life, and actual tasty swaps for Ultra Processed Foods!
            </p>
          </div>
          <div className={styles.ytGrid}>
            {youtubeVideos.map((video) => (
              <article key={video.title} className={styles.ytCard}>
                <div className={styles.ytThumb}>
                  <PlaceholderImage icon="ph-image" label="thumbnail" />
                  <div className={styles.ytPlay}>
                    <span>
                      <i className="ph ph-play-fill" />
                    </span>
                  </div>
                  <span className={styles.ytDur}>{video.duration}</span>
                </div>
                <h3>{video.title}</h3>
                <p className={styles.meta}>{video.meta}</p>
              </article>
            ))}
          </div>
          <div className={styles.centerCta}>
            <a href="https://www.youtube.com/@healthyhomemadehabits" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section line">
        <div className="wrap">
          <div className="frame cta-center">
            <span className="eyebrow">One better choice</span>
            <h2 style={{ marginTop: "18px" }}>
              Better choices lead to healthy habits.<br/> Healthy habits lead to a better life.
            </h2>
            <p className="lead" style={{ margin: "22px 0 36px" }}>
              Download The 5-Second Shopper to start your healthy habits today!
            </p>
            <EmailCaptureForm
              buttonLabel="Send the Free Guide"
              className={styles.captureCenter}
            />
          </div>
        </div>
      </section>
    </>
  );
}
