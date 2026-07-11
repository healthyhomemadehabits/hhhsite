"use client";

import { useEffect, useState, type ReactNode } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import Tag from "@/components/Tag";
import styles from "./quiz.module.css";
import {
  QUESTIONS,
  TIERS,
  CONSULT_PRICE,
  score,
  type Answers,
  type TierKey,
  type ScoreResult,
} from "./quiz-data";

const STORE_KEY = "cleanCart.v1";
const TOTAL_Q = QUESTIONS.length;

type Step = "entry" | "quiz" | "email" | "results" | "confirm";

interface SavedState {
  step: Step;
  qIndex: number;
  answers: Answers;
  email: string;
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
        <span className="eyebrow">Free 3-minute quiz</span>
        <h1 className={styles.entryH1}>
          Find out how much you’re{" "}
          <span className="accent">overspending</span> at the grocery store
        </h1>
        <p className={styles.entrySub}>
          Answer 8 quick questions and we’ll show you exactly where your
          grocery money is going — and how much you could save.
        </p>
        <div className={styles.entryCta}>
          <button type="button" className="btn btn-primary lg" onClick={onStart}>
            Take the Free Quiz <i className="ph ph-arrow-right" />
          </button>
        </div>
        <p className="fineprint">
          <i className="ph ph-clock" />
          Takes under 3 minutes. No signup required to start.
        </p>
      </div>
      <div className={styles.entryMedia}>
        <PlaceholderImage
          icon="ph-shopping-cart-simple"
          aspect="4/4.6"
          label="still life — cart of fresh produce, sage & apricot tones"
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
  answers: Answers;
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
              text={opt}
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
            {index === TOTAL_Q - 1 ? "See My Results" : "Next"}{" "}
            <i className="ph ph-arrow-right" />
          </button>
        ) : (
          <span className={styles.navHint}>Choose an answer to continue</span>
        )}
      </div>
    </div>
  );
}

function EmailGate({ onSubmit }: { onSubmit: (email: string) => void }) {
  return (
    <div className={styles.emailInner}>
      <span className={styles.checkmark}>
        <i className="ph ph-check-circle" />
      </span>
      <h1 className={styles.emailH1}>Your results are ready.</h1>
      <p className={styles.emailSub}>
        Where should we send your Clean Cart Report?
      </p>
      <div className={styles.emailCaptureWrap}>
        <EmailCaptureForm
          placeholder="you@email.com"
          buttonLabel="Show Me My Results"
          onSuccess={onSubmit}
        />
      </div>
      <p className={`fineprint ${styles.centerFine}`}>
        <i className="ph ph-gift" />
        We’ll also send you our free guide — Eat Real, Live Better — as a
        gift.
      </p>
    </div>
  );
}

const FEATURES = [
  {
    icon: "ph-clipboard-text",
    b: "A custom questionnaire review",
    t: "— we read every answer you just gave and build around it.",
  },
  {
    icon: "ph-list-checks",
    b: "Your personalized clean grocery list",
    t: "— real food that fits how your household actually eats.",
  },
  {
    icon: "ph-calendar-check",
    b: "A 2-week meal plan built for your household",
    t: "— sized to your people, your budget, your week.",
  },
  {
    icon: "ph-users-three",
    b: "1:1 guidance from Hana and Timm",
    t: "— the two of us, walking it through with you.",
  },
];

const TIER_KEYS: TierKey[] = ["low", "medium", "high"];

function Results({
  result,
  email,
  tierOverride,
  onTierPreview,
  onBook,
}: {
  result: ScoreResult;
  email: string;
  tierOverride: TierKey | null;
  onTierPreview: (tier: TierKey) => void;
  onBook: () => void;
}) {
  const tierKey = tierOverride || result.tier;
  const tier = TIERS[tierKey];
  const bridge = tier.bridge(result.monthlyRange.text, result.annualRange.text);

  return (
    <div>
      <div className={styles.resultsConfirm}>
        <i className="ph ph-envelope-simple" />
        Your Clean Cart Report is on its way to{" "}
        <b>{email || "your inbox"}</b>.
      </div>

      <span className="eyebrow">Your Clean Cart Report</span>
      <h1 className={styles.resultsH1}>{tier.headline}</h1>

      {/* ----- stat card ----- */}
      <div className={styles.statcard}>
        <div className={styles.statGrid}>
          <div className={styles.statBlock}>
            <span className={styles.statCap}>Estimated monthly overspend</span>
            <span className={styles.statBig}>{result.monthlyRange.text}</span>
          </div>
          <div className={styles.statBlock}>
            <span className={styles.statCap}>Estimated annual overspend</span>
            <span className={styles.statBig}>{result.annualRange.text}</span>
          </div>
        </div>
        <div className={styles.opp}>
          <span className={styles.oppLabel}>Your biggest opportunity areas</span>
          <div className={styles.oppTags}>
            {result.areaLabels.map((a, i) => (
              <Tag key={i}>{a}</Tag>
            ))}
          </div>
        </div>
      </div>

      {/* ----- bridge ----- */}
      <p className={styles.bridge}>{bridge}</p>

      {/* ----- consultation offer ----- */}
      <div className={`frame ${styles.offer}`}>
        <span className="eyebrow">The fix</span>
        <h2 className={styles.offerH2}>
          This is exactly what the Clean Cart Consultation is designed to fix.
        </h2>
        <div className={styles.offerList}>
          {FEATURES.map((f, i) => (
            <div className={styles.feature} key={i}>
              <i className={`ph ${f.icon}`} />
              <span>
                <b>{f.b}</b> {f.t}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.offerFoot}>
          <div className={styles.priceWrap}>
            <span className={styles.price}>${CONSULT_PRICE}</span>
            <span className={styles.priceSub}>one-time · everything above</span>
            {result.paybackWeeks != null && (
              <span className={styles.payback}>
                At your savings rate, this pays for itself in{" "}
                <b>
                  {result.paybackWeeks}
                  {result.paybackWeeks === 1 ? " week" : " weeks"}
                </b>
                .
              </span>
            )}
          </div>
          <button type="button" className={styles.btnApricot} onClick={onBook}>
            Book My Consultation <i className="ph ph-arrow-right" />
          </button>
        </div>
        <a
          className={styles.secondaryLink}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBook();
          }}
        >
          Not ready yet? Start with our $37 Grocery Guide instead →
        </a>
      </div>

      <p className={styles.source}>
        Baseline grocery costs based on USDA moderate food plan data via{" "}
        <a href="https://groceriestracker.com" target="_blank" rel="noopener">
          groceriestracker.com
        </a>
        .
      </p>

      {/* ----- demo tier preview ----- */}
      <div className={styles.tierPreview}>
        <span className={styles.tierPreviewLabel}>Demo — preview result tier</span>
        <div className={styles.tierBtns}>
          {TIER_KEYS.map((t) => (
            <button
              key={t}
              type="button"
              className={`${styles.tierBtn} ${tierKey === t ? styles.tierBtnOn : ""}`}
              onClick={() => onTierPreview(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Confirm({
  email,
  onBook,
  onGuide,
}: {
  email: string;
  onBook: () => void;
  onGuide: () => void;
}) {
  return (
    <div className={styles.confirmInner}>
      <PlaceholderImage
        variant="rose"
        icon="ph-envelope-open"
        aspect="16/7"
        label="warm photo — Hana & Timm at the kitchen counter"
      />
      <span className={styles.checkmark} style={{ marginTop: "40px" }}>
        <i className="ph ph-check-circle" />
      </span>
      <h1 className={styles.emailH1}>You’re all set — check your inbox.</h1>
      <p className={styles.emailSub}>
        We just sent your Clean Cart Report plus your free copy of Eat Real,
        Live Better to <b>{email || "your inbox"}</b>.
      </p>
      <div className={styles.confirmCards}>
        <button
          type="button"
          className={`${styles.softCard} ${styles.softCardSage}`}
          onClick={onBook}
        >
          <span className={styles.softEyebrow}>Ready to fix it now?</span>
          <span className={styles.softTitle}>Book the Consultation</span>
          <span className={styles.softArrow}>
            <i className="ph ph-arrow-right" />
          </span>
        </button>
        <button
          type="button"
          className={`${styles.softCard} ${styles.softCardCream}`}
          onClick={onGuide}
        >
          <span className={styles.softEyebrow}>Want to learn first?</span>
          <span className={styles.softTitle}>Get The Perfect Grocery List for $47</span>
          <span className={styles.softArrow}>
            <i className="ph ph-arrow-right" />
          </span>
        </button>
      </div>
    </div>
  );
}

// ---------- app shell ----------
export default function QuizApp() {
  const [step, setStep] = useState<Step>("entry");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(() => new Array(TOTAL_Q).fill(null));
  const [email, setEmail] = useState("");
  const [tierOverride, setTierOverride] = useState<TierKey | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // load any saved progress after mount (avoids SSR/client hydration mismatch)
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      setStep(saved.step ?? "entry");
      setQIndex(saved.qIndex ?? 0);
      setAnswers(saved.answers ?? new Array(TOTAL_Q).fill(null));
      setEmail(saved.email ?? "");
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveState({ step, qIndex, answers, email });
  }, [hydrated, step, qIndex, answers, email]);

  // scroll to top of page on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, qIndex]);

  const result = score(answers);

  function answer(i: number, val: number) {
    const next = answers.slice();
    next[i] = val;
    setAnswers(next);
  }
  function nextQ() {
    if (qIndex < TOTAL_Q - 1) setQIndex(qIndex + 1);
    else setStep("email");
  }
  function backQ() {
    if (qIndex > 0) setQIndex(qIndex - 1);
    else setStep("entry");
  }
  function startOver() {
    setAnswers(new Array(TOTAL_Q).fill(null));
    setQIndex(0);
    setEmail("");
    setTierOverride(null);
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
  } else if (step === "email") {
    screen = (
      <EmailGate
        onSubmit={(val) => {
          setEmail(val || "");
          setStep("results");
        }}
      />
    );
  } else if (step === "results") {
    screen = (
      <Results
        result={result}
        email={email}
        tierOverride={tierOverride}
        onTierPreview={setTierOverride}
        onBook={() => setStep("confirm")}
      />
    );
  } else {
    screen = (
      <Confirm
        email={email}
        onBook={() => setStep("confirm")}
        onGuide={() => setStep("confirm")}
      />
    );
  }

  return (
    <section className={styles.stage}>
      <div
        className={`${styles.stageInner} ${step === "results" ? styles.wide : ""}`}
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
