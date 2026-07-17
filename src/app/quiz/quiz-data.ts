// Clean Cart Calculator - quiz content + scoring logic

export interface Question {
  key: string;
  label: string;
  q: string;
  options: string[];
}

// The 8 questions, one per screen
export const QUESTIONS: Question[] = [
  {
    key: "household",
    label: "Household size",
    q: "How many people are you shopping for?",
    options: [
      "Just me",
      "Me and a partner",
      "A family of 3-4",
      "A family of 5 or more",
    ],
  },
  {
    key: "spend",
    label: "Current weekly spend",
    q: "About how much do you spend on groceries each week?",
    options: [
      "Less than $100",
      "$100-$200",
      "$200-$350",
      "$350-$500",
      "More than $500",
    ],
  },
  {
    key: "waste",
    label: "Food waste",
    q: "How often do you throw away food that spoiled before you used it?",
    options: [
      "Almost never - we use just about everything",
      "Once or twice a month",
      "Something gets thrown out most weeks",
      "Honestly, more than I'd like to admit",
    ],
  },
  {
    key: "takeout",
    label: "Takeout and delivery",
    q: "How many times a week do you order takeout, get delivery, or eat at a restaurant?",
    options: [
      "Rarely - once or twice a month",
      "1-2 times a week",
      "3-4 times a week",
      "5 or more times a week",
    ],
  },
  {
    key: "cooking",
    label: "Cooking at home",
    q: "If you had a simple meal plan and a clear grocery list ready every week, how likely are you to cook at home more often?",
    options: [
      "Very likely - I enjoy cooking, I just don't have a system",
      "Somewhat likely - I'd try it if it wasn't complicated",
      "Not sure - cooking feels overwhelming right now",
      "Unlikely - I genuinely don't have time",
    ],
  },
  {
    key: "planning",
    label: "Shopping habits",
    q: "When you go grocery shopping, do you usually have a plan?",
    options: [
      "Yes - I shop with a list and stick to it",
      "Mostly - I have a rough idea but improvise a lot",
      "Not really - I figure it out as I go",
      "No - and it shows in my receipt",
    ],
  },
  {
    key: "snacks",
    label: "Snacks and beverages",
    q: "How much of your grocery cart is snacks, beverages, and packaged convenience items?",
    options: [
      "Not much - we keep it pretty clean",
      "Some - a reasonable amount",
      "Quite a bit - it adds up",
      "A lot - it's probably our biggest category",
    ],
  },
  {
    key: "confidence",
    label: "Health confidence",
    q: "How confident are you that the food you’re buying is actually good for you?",
    options: [
      "Very confident - I read labels and know what I'm looking for",
      "Somewhat confident - I try but I'm not always sure",
      "Not very confident - I know I could be doing better",
      "Not confident at all - the grocery store feels like a minefield",
    ],
  },
];

// index of each scoring question within QUESTIONS
const IDX = { household: 0, waste: 2, takeout: 3, planning: 5, snacks: 6 };

const BASELINE = [485, 895, 1430, 1760]; // USDA moderate monthly by household
const MULT = {
  waste: [0, 40, 120, 200],
  takeout: [70, 280, 560, 840],
  planning: [0, 80, 160, 240],
  snacks: [0, 60, 120, 200],
};

const OPPORTUNITY: Record<string, string> = {
  waste: "Food waste",
  takeout: "Eating out frequency",
  planning: "Unplanned shopping",
  snacks: "Snack and beverage spending",
};

export const CONSULT_PRICE = 247;

export type TierKey = "low" | "medium" | "high";

export interface Tier {
  name: TierKey;
  headline: string;
  bridge: (m: string, a: string) => string;
}

export const TIERS: Record<TierKey, Tier> = {
  low: {
    name: "low",
    headline:
      "You're doing better than most - but there's still money on the table.",
    bridge: (m) =>
      `Based on your answers, you're already more intentional than the average household. But even small leaks add up - at your rate, you're leaving ${m} per month in unnecessary grocery spending. The good news: a little structure goes a long way from where you're starting.`,
  },
  medium: {
    name: "medium",
    headline: "You're spending more than you think - and it's not your fault.",
    bridge: (m, a) =>
      `Effective grocery shopping is a skill! Navigating healthy and affordable options isn't always straightforward! Based on your answers, we estimate you're overspending ${m} per month - that's ${a} a year that could stay in your pocket with a real system in place.`,
  },
  high: {
    name: "high",
    headline: "Your grocery bill has been quietly draining your budget for years.",
    bridge: (m, a) =>
      `You're not alone - most families in your situation don't realize how much is slipping through until they see the number. Based on your answers, we estimate you're overspending ${m} per month on groceries and food. That's ${a} a year. The families we work with typically recover this within 60-90 days of putting a real system in place.`,
  },
};

export function money(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export type Answers = (number | null)[];

export interface ScoreResult {
  tier: TierKey;
  overspend: number;
  baseline: number;
  totalSpend: number;
  contrib: Record<string, number>;
  monthlyRange: { low: number; high: number; text: string };
  annualRange: { low: number; high: number; text: string };
  paybackWeeks: number | null;
  areaLabels: string[];
}

export function score(answers: Answers): ScoreResult {
  const a = answers || [];
  const w = a[IDX.waste] ?? 0;
  const t = a[IDX.takeout] ?? 0;
  const p = a[IDX.planning] ?? 0;
  const s = a[IDX.snacks] ?? 0;
  const h = a[IDX.household] ?? 0;

  const contrib = {
    waste: MULT.waste[w] || 0,
    takeout: MULT.takeout[t] || 0,
    planning: MULT.planning[p] || 0,
    snacks: MULT.snacks[s] || 0,
  };
  const overspend = contrib.waste + contrib.takeout + contrib.planning + contrib.snacks;
  const baseline = BASELINE[h] || BASELINE[0];
  const totalSpend = baseline + overspend;

  const lowM = Math.max(0, overspend - 20);
  const highM = overspend + 20;
  const lowA = lowM * 12;
  const highA = highM * 12;

  // payback weeks = round(247 / (monthly overspend / 4.33))
  const weeklySavings = overspend / 4.33;
  const paybackWeeks = weeklySavings > 0 ? Math.round(CONSULT_PRICE / weeklySavings) : null;

  // tier
  let tier: TierKey = "low";
  if (overspend > 350) tier = "high";
  else if (overspend >= 150) tier = "medium";

  // opportunity areas - qualify if option index 2 or 3 (option 3 or 4)
  const qualifies: string[] = [];
  if (w >= 2) qualifies.push("waste");
  if (t >= 2) qualifies.push("takeout");
  if (p >= 2) qualifies.push("planning");
  if (s >= 2) qualifies.push("snacks");

  // ensure at least 2 - fill from biggest dollar contributors
  const areas = qualifies.slice();
  if (areas.length < 2) {
    const ranked = Object.keys(contrib).sort(
      (x, y) => contrib[y as keyof typeof contrib] - contrib[x as keyof typeof contrib]
    );
    for (const k of ranked) {
      if (areas.length >= 2) break;
      if (!areas.includes(k)) areas.push(k);
    }
  }
  const areaLabels = areas.slice(0, 3).map((k) => OPPORTUNITY[k]);

  return {
    tier,
    overspend,
    baseline,
    totalSpend,
    contrib,
    monthlyRange: { low: lowM, high: highM, text: money(lowM) + "–" + money(highM) },
    annualRange: { low: lowA, high: highA, text: money(lowA) + "–" + money(highA) },
    paybackWeeks,
    areaLabels,
  };
}
