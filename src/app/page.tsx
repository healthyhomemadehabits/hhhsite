import Link from "next/link";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./page.module.css";

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
            <span className="eyebrow">Midwest-made · Real food education</span>
            <h1 style={{ marginTop: "22px" }}>
              Real Food.
              <br />
              Real Life.
              <br />
              <span className="accent">80/20.</span>
            </h1>
            <p className={styles.sub}>
              We help everyday people cut ultra-processed food out of their
              diet — without giving up everything they love. Practical,
              honest, Midwest-made.
            </p>
            <div className={styles.heroCta}>
              <Link href="/free-guide" className="btn btn-primary">
                Get the Free Guide
              </Link>
              <Link href="/grocery-guide" className="btn btn-outline">
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
            <b>18</b> videos and growing
          </span>
          <span className={styles.trustItem}>
            Real food. Real couple. Real results.
          </span>
          <span className={styles.trustItem}>The honest 80/20 method</span>
        </div>
      </section>

      {/* ============ WHAT WE BELIEVE ============ */}
      <section className="section believe">
        <div className="wrap">
          <div className="head-center">
            <span className="eyebrow">What we believe</span>
            <h2>Good food shouldn&apos;t feel complicated</h2>
          </div>
          <div className="kgrid cols-3">
            <div className="kcard a-forest">
              <i className="ph ph-bowl-food kic" />
              <h3>Food should nourish you, not confuse you.</h3>
              <p>
                No jargon, no fear. Just clear, honest guidance on what real
                food actually is.
              </p>
            </div>
            <div className="kcard a-sky">
              <i className="ph ph-scales kic" />
              <h3>You don&apos;t have to be perfect — 80% is enough.</h3>
              <p>
                The 80/20 method makes room for real life, real cravings, and
                the foods you love.
              </p>
            </div>
            <div className="kcard a-blush">
              <i className="ph ph-shopping-cart-simple kic" />
              <h3>
                Healthy eating starts at the grocery store, not the kitchen.
              </h3>
              <p>
                Win before you cook. Read the label, fill the cart, and the
                rest gets easy.
              </p>
            </div>
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
              <span className="eyebrow">Free resource</span>
              <h2>Not sure where to start? We made this for you.</h2>
              <p>
                A simple, no-pressure starter guide to spotting
                ultra-processed food, swapping the worst offenders, and
                building your first real-food habits — at your own pace.
                Free, forever.
              </p>
              <EmailCaptureForm buttonLabel="Send Me the Guide" />
              <p className="fineprint">
                <i className="ph ph-lock-simple" />
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAID PRODUCT ============ */}
      <section className="section line" id="product">
        <div className={`wrap ${styles.productGrid}`}>
          <div>
            <span className="eyebrow">The Grocery Guide</span>
            <h2>Ready to go deeper?</h2>
            <p className={styles.lead}>
              The Healthy Homemade Habits Grocery Guide is everything we wish
              we&apos;d had at the start — so you can shop with confidence and
              stop second-guessing every label.
            </p>
            <div className={styles.featureList}>
              <div className={styles.f}>
                <i className="ph ph-magnifying-glass" />
                <span>
                  <b>Label reading made simple</b> — know exactly what to look
                  for and what to skip.
                </span>
              </div>
              <div className={styles.f}>
                <i className="ph ph-prohibit" />
                <span>
                  <b>UPF cutting, the realistic way</b> — swaps that stick,
                  using the 80/20 method.
                </span>
              </div>
              <div className={styles.f}>
                <i className="ph ph-list-checks" />
                <span>
                  <b>Done-for-you grocery list &amp; meal plan</b> — no
                  guesswork, no blank-page panic.
                </span>
              </div>
              <div className={styles.f}>
                <i className="ph ph-hand-heart" />
                <span>
                  <b>Shop with confidence</b> — walk in calm, walk out with
                  real food.
                </span>
              </div>
            </div>
            <div className={styles.priceRow}>
              <span className={styles.price}>$37</span>
              <span className={styles.was}>One-time · yours forever</span>
            </div>
            <Link href="/grocery-guide" className="btn btn-primary">
              Get the Grocery Guide
            </Link>
            <p className="fineprint">
              <i className="ph ph-infinity" />
              100+ pages. One-time purchase. Yours forever.
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
            <span className="eyebrow">Meet the couple</span>
            <h2>We&apos;re Hana &amp; Timm.</h2>
            <p>
              We got tired of feeling confused, manipulated, and broke at the
              grocery store. So we learned everything we could about real
              food, ultra-processed ingredients, and what it actually takes to
              eat well — without making it our whole personality.
            </p>
            <p>Now we teach it. We&apos;re glad you&apos;re here.</p>
            <p className={styles.sig}>Hana &amp; Timm</p>
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
            <span className="eyebrow">On YouTube</span>
            <h2>Learn with us on YouTube</h2>
            <p className="lead">
              Practical tips, grocery hauls, clean recipes, and real talk
              about ultra-processed food — new videos every week.
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
            <a href="#" className="btn btn-outline">
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
              Your real food life starts with one better choice.
            </h2>
            <p className="lead" style={{ margin: "22px 0 36px" }}>
              Grab the free guide and take the first step.
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
