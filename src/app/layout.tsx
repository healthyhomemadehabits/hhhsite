import type { Metadata } from "next";
import { Instrument_Serif, Raleway } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Healthy Homemade Habits — Real Food. Real Life. 80/20.",
  description:
    "Real food, real life, 80/20. A Midwest couple teaching honest, un-fussy real-food habits.",
  icons: {
    icon: "/small-circle-logo_w-bg.svg",
    apple: "/small-circle-logo_png.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${instrumentSerif.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://unpkg.com/@phosphor-icons/web@2.1.1"
          strategy="afterInteractive"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
