"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faqList}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.question}
            className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
          >
            <button
              className={styles.faqQ}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className={styles.chev}>
                <i className="ph ph-caret-down" />
              </span>
            </button>
            <div className={styles.faqA}>
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
      <p><small>*Timm and I aren't nutritionists, dieticians, or medical professionals in any way, shape or form. Everything we're talking about is based on our own experiences and research. Please consult your doctor before making any changes to your diet to see if it's right for you.</small></p>
    </div>
  );
}
