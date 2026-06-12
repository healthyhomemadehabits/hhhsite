import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={`wrap ${styles.footTop}`}>
        <div>
          <div className={styles.footBrand}>
            <i className="ph ph-plant" />
            Healthy Homemade Habits
          </div>
          <p className={styles.footTag}>
            Real food, real life, 80/20. A Midwest couple teaching honest,
            un-fussy real-food habits.
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
