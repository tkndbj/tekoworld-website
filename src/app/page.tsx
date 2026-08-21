import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Companions } from "@/components/home/Companions";
import { Grove } from "@/components/home/Grove";
import { Road } from "@/components/home/Road";
import { GetIt } from "@/components/home/GetIt";
import PuzzleDemo from "@/components/home/PuzzleDemo";
import { site } from "@/lib/site";
import { faq } from "@/lib/content";

/**
 * Structured data for the listing, not for the reader.
 *
 * Search results for a game show a rating and a price when the page says what
 * they are, and a store reviewer looking for the publisher behind an app finds
 * it here rather than guessing from the footer.
 */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: site.game,
    url: site.url,
    applicationCategory: "GameApplication",
    genre: ["Puzzle", "Casual"],
    operatingSystem: "Android, iOS",
    publisher: { "@type": "Organization", name: site.publisher },
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

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Hero />
      <PuzzleDemo />
      <Features />
      <Companions />
      <Grove />
      <Road />
      <GetIt />
    </main>
  );
}
