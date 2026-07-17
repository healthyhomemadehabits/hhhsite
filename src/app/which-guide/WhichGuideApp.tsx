"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./which-guide.module.css";
import lifestyleImg from "../../../public/images/main_home_lifestyle.jpeg";
import {
  QUESTIONS,
  getRecommendation,
  type WhichGuideAnswers,
  type Recommendation,
} from "./quiz-data";

const TOTAL_Q = QUESTIONS.length;
const STORE_KEY = "whichGuide.v1";

type Step = "entry" | "quiz" | "results";

interface SavedState {
  step: Step;
  qIndex: number;
  answers: WhichGuideAnswers;
}

function loadState(): SavedState | null {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveState(s: SavedState) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(s));
  } catch {}
}

// ---------- product data ----------

const PRODUCTS: Record<
  Recommendation,
  {
    eyebrow: string;
    headline: string;
    name: string;
    price: string;
    href: string;
    ctaLabel: string;
    desc: string;
    includes: string[];
    secondaryNote: string;
    secondaryHref: string;
    secondaryLabel: string;
  }
> = {
  erlb: {
    eyebrow: "Start with the foundation",
    headline: "You need to know what you're actually buying.",
    name: "Eat Real, Live Better",
    price: "$17",
    href: "/eat-real-guide",
    ctaLabel: "Buy the Guide - $17",
    desc: "Before you can build a perfect grocery list, you need to know what you're shopping for. Eat Real, Live Better gives you the 80/20 framework - a simple, sustainable rule for identifying real food versus Ultra Processed Food without giving up the things you love.",
    includes: [
      "The 80/20 method, explained simply",
      "Ingredient labels, decoded (plus a full UPF red flag chart)",
      "The money math: why real food is often cheaper",
      "A handful of our favorite, easy recipes to get you started!",
    ],
    secondaryNote:
      "Ready to build on this? The Perfect Grocery List is the natural next step once you know what to look for.",
    secondaryHref: "/the-perfect-list",
    secondaryLabel: "Learn about The Perfect Grocery List →",
  },
  pgl: {
    eyebrow: "You're ready for a system",
    headline: "You need a shopping system that actually works.",
    name: "The Perfect Grocery List",
    price: "$47",
    href: "/the-perfect-list",
    ctaLabel: "Get The Perfect Grocery List - $47",
    desc: "You've got a sense of what you want to eat - what you need is a system that makes it happen. The Perfect Grocery List gives you the templates, meal planners, and retail psychology insights to get in and out of any grocery store with exactly what you need, on budget.",
    includes: [
      "4 blank grocery list templates + 4 blank weekly menu planners",
      "1 pre-filled example menu and matching grocery list",
      "Retail psychology breakdown (how stores make you overspend)",
      "14+ healthy recipe recommendations",
    ],
    secondaryNote:
      "Pair it with Eat Real, Live Better for the complete picture - know what to buy AND how to buy it.",
    secondaryHref: "/eat-real-guide",
    secondaryLabel: "Learn about Eat Real, Live Better →",
  },
};

// ---------- small pieces ----------

function Progress({ index }: { index: number }) {
  const pct = Math.round(((index + 1) / TOTAL_Q) * 100);
  return (
    <div className={styles.progress}>
      <div className={styles.progressMeta}>
        <span>
          Question {index + 1} of {TOTAL_Q}
        </span>
        <span>{pct}% complete</span>
      </div>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function OptionCard({
  text,
  selected,
  onSelect,
  idx,
}: {
  text: string;
  selected: boolean;
  onSelect: () => void;
  idx: number;
}) {
  return (
    <button
      type="button"
      className={`${styles.opt} ${selected ? styles.optSel : ""}`}
      onClick={onSelect}
      style={{ animationDelay: `${idx * 45}ms` }}
    >
      <span className={styles.optText}>{text}</span>
      <span className={styles.optCheck}>
        <i className="ph ph-check" />
      </span>
    </button>
  );
}

// ---------- screens ----------

function Entry({ onStart }: { onStart: () => void }) {
  return (
    <div className={styles.entryGrid}>
      <div>
        <span className="eyebrow">Free 2-minute quiz</span>
        <h1 className={styles.entryH1}>
          Not sure which guide is{" "}
          <span className="accent">right for you?</span>
        </h1>
        <p className={styles.entrySub}>
          Answer 7 quick questions and we&apos;ll point you toward the guide
          that actually fits your situation.
        </p>
        <div className={styles.entryCta}>
          <button type="button" className="btn btn-primary lg" onClick={onStart}>
            Find My Guide <i className="ph ph-arrow-right" />
          </button>
        </div>
        <p className="fineprint">
          <i className="ph ph-clock" />
          Takes under 2 minutes. See your result instantly.
        </p>
      </div>
      <div className={styles.entryMedia}>
        <Image
          src={lifestyleImg}
          alt="Healthy home cooking lifestyle"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
}

function QuizScreen({
  index,
  answers,
  onAnswer,
  onNext,
  onBack,
}: {
  index: number;
  answers: WhichGuideAnswers;
  onAnswer: (index: number, val: number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const question = QUESTIONS[index];
  const selected = answers[index];
  const hasSel = selected !== null && selected !== undefined;
  return (
    <div>
      <Progress index={index} />
      <div className={styles.quizBody} key={index}>
        <span className={styles.qLabel}>{question.label}</span>
        <h2 className={styles.qTitle}>{question.q}</h2>
        <div className={styles.optList}>
          {question.options.map((opt, i) => (
            <OptionCard
              key={i}
              idx={i}
              text={opt.text}
              selected={selected === i}
              onSelect={() => onAnswer(index, i)}
            />
          ))}
        </div>
      </div>
      <div className={styles.quizNav}>
        <button
          type="button"
          className={`${styles.back} ${index === 0 ? styles.backHidden : ""}`}
          onClick={onBack}
        >
          <i className="ph ph-arrow-left" /> Back
        </button>
        {hasSel ? (
          <button type="button" className="btn btn-primary" onClick={onNext}>
            {index === TOTAL_Q - 1 ? "See My Result" : "Next"}{" "}
            <i className="ph ph-arrow-right" />
          </button>
        ) : (
          <span className={styles.navHint}>Choose an answer to continue</span>
        )}
      </div>
    </div>
  );
}

function Results({ answers }: { answers: WhichGuideAnswers }) {
  const rec = getRecommendation(answers);
  const product = PRODUCTS[rec];
  const cardClass = rec === "erlb" ? styles.erlbCard : styles.pglCard;

  return (
    <div>
      <span className="eyebrow">Your recommended guide</span>
      <h1 className={styles.resultsH1}>{product.headline}</h1>

      <div className={`${styles.resultCard} ${cardClass}`}>
        <span className={styles.cardEyebrow}>{product.eyebrow}</span>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDesc}>{product.desc}</p>

        <span className={styles.includesLabel}>What&apos;s inside</span>
        <ul className={styles.includesList}>
          {product.includes.map((item, i) => (
            <li key={i} className={styles.includesItem}>
              <i className="ph ph-check" />
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.cardFoot}>
          <div className={styles.priceWrap}>
            <span className={styles.price}>{product.price}</span>
            <span className={styles.priceSub}>
              one-time &middot; instant PDF download
            </span>
          </div>
          <Link href={product.href} className="btn btn-primary lg">
            {product.ctaLabel} <i className="ph ph-arrow-right" />
          </Link>
        </div>
      </div>

      <p className={styles.secondaryNote}>
        {product.secondaryNote}{" "}
        <Link href={product.secondaryHref}>{product.secondaryLabel}</Link>
      </p>
    </div>
  );
}

// ---------- app shell ----------

export default function WhichGuideApp() {
  const [step, setStep] = useState<Step>("entry");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<WhichGuideAnswers>(() =>
    new Array(TOTAL_Q).fill(null)
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = loadState();
    if (saved) {
      setStep(saved.step ?? "entry");
      setQIndex(saved.qIndex ?? 0);
      setAnswers(saved.answers ?? new Array(TOTAL_Q).fill(null));
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveState({ step, qIndex, answers });
  }, [hydrated, step, qIndex, answers]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, qIndex]);

  function answer(i: number, val: number) {
    const next = answers.slice();
    next[i] = val;
    setAnswers(next);
  }
  function nextQ() {
    if (qIndex < TOTAL_Q - 1) setQIndex(qIndex + 1);
    else setStep("results");
  }
  function backQ() {
    if (qIndex > 0) setQIndex(qIndex - 1);
    else setStep("entry");
  }
  function startOver() {
    setAnswers(new Array(TOTAL_Q).fill(null));
    setQIndex(0);
    setStep("entry");
  }

  let screen: ReactNode;
  if (step === "entry") {
    screen = (
      <Entry
        onStart={() => {
          setQIndex(0);
          setStep("quiz");
        }}
      />
    );
  } else if (step === "quiz") {
    screen = (
      <QuizScreen
        index={qIndex}
        answers={answers}
        onAnswer={answer}
        onNext={nextQ}
        onBack={backQ}
      />
    );
  } else {
    screen = <Results answers={answers} />;
  }

  return (
    <section className={styles.stage}>
      <div
        className={styles.stageInner}
        key={`${step}-${step === "quiz" ? qIndex : ""}`}
      >
        {step !== "entry" && (
          <div className={styles.restartRow}>
            <button type="button" className={styles.restart} onClick={startOver}>
              <i className="ph ph-arrow-counter-clockwise" /> Start over
            </button>
          </div>
        )}
        {screen}
      </div>
    </section>
  );
}
