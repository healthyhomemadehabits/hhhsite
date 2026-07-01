import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "The Perfect Grocery List — Coming Soon | Healthy Homemade Habits",
  description:
    "The Perfect Grocery List is almost here. Join the waitlist to be the first to know when it drops.",
};

export default function GroceryGuideWaitlistPage() {
  return (
    <ComingSoonPage
      eyebrow="Coming Soon"
      headline="Something Good Is On Its Way"
      productName="The Perfect Grocery List"
      description="We're putting the finishing touches on our guide to smarter, healthier grocery shopping. Drop your email below and we'll let you know the moment it's ready."
      icon="ph-shopping-cart"
      buttonLabel="Join the Waitlist"
    />
  );
}
