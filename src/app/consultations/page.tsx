import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Clean Cart Consultation - Coming Soon | Healthy Homemade Habits",
  description:
    "Personal 1-on-1 consultations with Hana and Timm are on the way. Join the waitlist to be the first to know when spots open.",
};

export default function ConsultationsPage() {
  return (
    <ComingSoonPage
      eyebrow="Coming Soon"
      headline="Personal Consultations Are On Their Way"
      productName="The Clean Cart Consultation"
      description="We're building a 1-on-1 session where Hana and Timm walk through your desired eating habits with you, build a personalized meal plan for you and your  household, and set you up with a 2-week grocery list that actually fits your lifestyle and budget! Sign up to the waiting list below and you'll be the first to know when spots open - and first in line for our founding member rate."
      icon="ph-users"
      buttonLabel="Join the Waitlist"
      group="waitlist"
    />
  );
}
