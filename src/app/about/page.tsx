import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../../public/images/main_home_lifestyle.jpeg";
import cartImg from "../../../public/images/shopping_cart.jpg";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Hana & Timm",
  description:
    "Hana & Timm are a Midwest couple who cut Ultra Processed Foods in 2020 and built Healthy Homemade Habits to share what they learned. They teach the 80/20 real-food lifestyle through free guides, PDF products, and weekly YouTube videos.",
  keywords: [
    "Hana and Timm",
    "Healthy Homemade Habits founders",
    "real food couple",
    "80/20 lifestyle",
    "ultra processed food free",
    "healthy homemade cooking",
    "Midwest food bloggers",
    "who are Healthy Homemade Habits",
  ],
  openGraph: {
    title: "About Hana & Timm | Healthy Homemade Habits",
    description:
      "We cut Ultra Processed Foods in 2020 and haven't looked back. We teach the 80/20 real-food lifestyle through free guides, PDF products, and weekly YouTube videos.",
    url: "https://www.healthyhomemadehabits.com/about",
  },
};

const socials = [
  { icon: "ph-envelope-simple", label: "Email", href: "mailto:hello@healthyhomemadehabits.com" },
  { icon: "ph-youtube-logo", label: "YouTube", href: "https://www.youtube.com/@healthyhomemadehabits" },
  { icon: "ph-instagram-logo", label: "Instagram", href: "#" },
  { icon: "ph-x-logo", label: "X", href: "#" },
  // { icon: "ph-tiktok-logo", label: "TikTok", href: "#" },
];

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">About Us</span>
            <h1>Hey! We&rsquo;re Hana and Timm!</h1>
            <p className={styles.sub}>
              Together, we make Healthy Homemade Habits. In 2020, we made the
              decision to get serious about our health, and cut Ultra Processed
              Foods out of our diet. We already loved eating good food and cooking
              together, but we didn&apos;t know just how much better our
              experience could be!
            </p>
            <p className={styles.body}>
              Since then, we&apos;ve been making pretty much everything from
              scratch, but we do have our moments when we like to let loose a
              little (and by &ldquo;let loose&rdquo;, we mean eat a couple of
              bowls of fun cereal).
            </p>
            <p className={styles.body}>
              We believe that life is all about balance, and to be a healthy
              person, being conscious of what you consume is the most important
              thing. We&apos;re not all-or-nothing people, so, we won&apos;t ever
              tell you what not to eat, but rather, to be aware of what it is
              you&apos;re eating, and maybe suggest some more wholesome
              alternatives.
            </p>
            <p className={styles.body}>
              If you&apos;ve looked around our site (or watched any of our{" "}
              <a href="https://www.youtube.com/@healthyhomemadehabits" className={styles.inlineLink} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>{" "}
              videos), you&apos;ll know we operate on the 80/20 method of eating:
              80% wholesome, nutritious, fresh foods, and 20% fun or indulgent
              foods. It&apos;s simple and straightforward, it&apos;s easy to
              maintain, and it gives us the flexibility to still enjoy trending
              foods and the occasional nostalgic treats of our youth.
            </p>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.heroImgWrap}>
              <Image
                src={heroImg}
                alt="Hana and Timm in the kitchen"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className={styles.heroCap}>Hana &amp; Timm</p>
          </div>
        </div>
      </section>


      {/* ============ GROCERY ============ */}
      <section className="section line">
        <div className={`wrap ${styles.groceryGrid}`}>
          <div className={styles.groceryMedia}>
            <div className={styles.groceryImgWrap}>
              <Image
                src={cartImg}
                alt="Grocery shopping"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <span className="eyebrow">Where It All Starts</span>
            <h2>We LOVE to grocery shop, now you can too!</h2>
            <p>
              Another thing you should know about us is that we love grocery
              shopping! We really, truly enjoy spending time exploring grocery
              stores, and that interest has blossomed into a personal study of
              grocery shopping habits.
            </p>
            <p>
              From what we&apos;ve observed (and experienced ourselves), the
              grocery store is actually where healthy habits start, not in the
              kitchen. We&apos;ve created what we consider to be{" "}
              <Link href="/the-perfect-list" className={styles.inlineLink}>The Perfect Grocery List</Link>
              , and it&apos;s made us enjoy the store even that much more!
            </p>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="section line">
        <div className="wrap">
          <div className={`frame ${styles.contact}`}>
            <div className={styles.contactHead}>
              <span className="eyebrow">Get In Touch</span>
              <h2>We&rsquo;re so excited that you&rsquo;re here!</h2>
              <p>
                If you want to get in touch with us, or have a question about
                Ultra Processed Foods, the 80/20 diet, or something grocery
                store related, email us and we&apos;ll get back to you as soon
                as we can!
              </p>
            </div>
            <ul className={styles.socialList}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={styles.socialRow}>
                    <i className={`ph ${s.icon}`} />
                    <span className={styles.socialLabel}>{s.label}</span>
                    <i className={`ph ph-arrow-right ${styles.arrow}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
