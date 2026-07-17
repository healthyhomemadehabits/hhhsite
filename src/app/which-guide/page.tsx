import type { Metadata } from "next";
import WhichGuideApp from "./WhichGuideApp";

export const metadata: Metadata = {
  title: "Which Guide Is Right for You? | Healthy Homemade Habits",
  description:
    "Answer 7 quick questions and find out whether Eat Real, Live Better or The Perfect Grocery List is the right fit for where you are right now.",
};

export default function WhichGuidePage() {
  return <WhichGuideApp />;
}
