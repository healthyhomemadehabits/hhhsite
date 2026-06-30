import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={`wrap ${styles.footTop}`}>
        <div>
          <div className={styles.footBrand}>
            <Image
              src="/small-circle-logo.svg"
              alt=""
              width={40}
              height={40}
              unoptimized
            />
            Healthy Homemade Habits
          </div>
          <p className={styles.footTag}>
            Helping You Start Better Habits, One Grocery Trip At A Time
          </p>
        </div>
        <nav className={styles.footNav}>
          <span className={styles.label}>Explore</span>
          <Link href="/">Home</Link>
          <Link href="/free-guide">Free Guide</Link>
          <Link href="/grocery-guide">Grocery Guide</Link>
          <Link href="/#about">About</Link>
        </nav>
        <div className={styles.footSocial}>
          <a href="#" aria-label="Instagram">
            <i className="ph ph-instagram-logo" />
          </a>
          <a href="#" aria-label="YouTube">
            <i className="ph ph-youtube-logo" />
          </a>
        </div>
      </div>
      <div className={styles.footBottom}>
        © Healthy Homemade Habits — Hana &amp; Timm
      </div>
    </footer>
  );
}
