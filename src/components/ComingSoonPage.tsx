"use client";

import EmailCaptureForm from "@/components/EmailCaptureForm";
import styles from "./ComingSoonPage.module.css";

interface ComingSoonPageProps {
  productName: string;
  headline: string;
  description: string;
  icon?: string;
  eyebrow?: string;
  buttonLabel?: string;
  group?: string;
}

export default function ComingSoonPage({
  productName,
  headline,
  description,
  icon = "ph-package",
  eyebrow = "Coming Soon",
  buttonLabel = "Join the Waitlist",
  group,
}: ComingSoonPageProps) {
  return (
    <section className={styles.page}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.iconWrap}>
          <i className={`ph ${icon} ${styles.icon}`} />
        </div>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.product}>{productName}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.formWrap}>
          <EmailCaptureForm buttonLabel={buttonLabel} placeholder="Your email address" group={group} />
        </div>
        <p className="fineprint">
          <i className="ph ph-lock-simple" />
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
