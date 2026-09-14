import type { Metadata } from "next";
import { GameHero } from "@/components/gemfire/GameHero";
import { HowItPlays } from "@/components/gemfire/HowItPlays";
import { Arsenal } from "@/components/gemfire/Arsenal";
import { Campaign } from "@/components/gemfire/Campaign";
import { Kingdom } from "@/components/gemfire/Kingdom";
import { Promises } from "@/components/gemfire/Promises";
import { Faq } from "@/components/gemfire/Faq";
import { GetIt } from "@/components/gemfire/GetIt";
import { faq } from "@/lib/content";
import { gemfire, site } from "@/lib/site";

const title = `${gemfire.name} - ${gemfire.genre}`;

export const metadata: Metadata = {
  title: gemfire.name,
  description: gemfire.description,
  alternates: { canonical: gemfire.path },
  openGraph: {
    title,
    description: gemfire.description,
    url: gemfire.path,
    images: [
      {
        url: "/og-gemfire.jpg",
        width: 1200,
        height: 630,
        alt: `${gemfire.name}: turrets on a castle wall firing at a skeleton horde over a gem board.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: gemfire.description,
    images: ["/og-gemfire.jpg"],
  },
};

/**
 * Structured data for the listing, not for the reader.
 *
 * Search results for a game show a price and a publisher when the page says
 * what they are, and a store reviewer looking for the company behind an app
 * finds it here rather than guessing from the footer.
 */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: gemfire.name,
    url: `${site.url}${gemfire.path}`,
    description: gemfire.description,
    applicationCategory: "GameApplication",
    genre: ["Puzzle", "Strategy", "Tower defense"],
    gamePlatform: ["Android", "iOS"],
    operatingSystem: "Android 8.0+, iOS 15+",
    publisher: { "@type": "Organization", name: site.company, url: site.url },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function GemfirePage() {
  return (
    <main>
      <StructuredData />
      <GameHero />
      <HowItPlays />
      <Arsenal />
      <Campaign />
      <Kingdom />
      <Promises />
      <Faq />
      <GetIt />
    </main>
  );
}
