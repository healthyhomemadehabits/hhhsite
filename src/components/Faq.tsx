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
    </div>
  );
}
