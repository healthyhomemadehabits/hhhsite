import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Return Policy | Healthy Homemade Habits",
  description:
    "All sales of downloadable PDFs from Healthy Homemade Habits are final. Read our full refund and return policy.",
};

export default function RefundPolicyPage() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <span className="eyebrow">Legal</span>
        <h1 style={{ fontSize: "clamp(38px, 5vw, 64px)", marginTop: 14, marginBottom: 36 }}>
          Refund and Return Policy
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 22 }}>
          All sales of downloadable PDFs are final. Once the download link is
          delivered or the file is accessed, no refunds, returns, or exchanges
          will be issued for any reason. This applies because the content is
          non-tangible and non-returnable.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 22 }}>
          We may issue a refund in rare cases of a defective or corrupted file
          (provide proof within 48 hours via email).
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.7 }}>
          Contact us at{" "}
          <a
            href="mailto:healthyhomemadewife@gmail.com"
            style={{ color: "var(--forest)", textDecoration: "underline" }}
          >
            healthyhomemadewife@gmail.com
          </a>{" "}
          with any questions.
        </p>
      </div>
    </section>
  );
}
