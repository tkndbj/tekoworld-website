import type { Metadata } from "next";
import { BuddiesHero } from "@/components/balance-buddies/BuddiesHero";
import { Showcase } from "@/components/balance-buddies/Showcase";
import { HowItPlays } from "@/components/balance-buddies/HowItPlays";
import { Contraptions } from "@/components/balance-buddies/Contraptions";
import { Hints } from "@/components/balance-buddies/Hints";
import { Promises } from "@/components/balance-buddies/Promises";
import { GetIt } from "@/components/balance-buddies/GetIt";
import { Faq } from "@/components/ui/GameFaq";
import { localeInfo, localePath } from "@/i18n/locales";
import { pageAlternates, pageOpenGraph } from "@/i18n/metadata";
import { getText } from "@/i18n/server";
import { balanceBuddies, site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getText();
  const title = `${balanceBuddies.name} - ${t.balanceBuddies.genre}`;

  return {
    title: balanceBuddies.name,
    description: t.balanceBuddies.description,
    alternates: pageAlternates(locale, balanceBuddies.path),
    openGraph: {
      ...pageOpenGraph(locale, balanceBuddies.path),
      title,
      description: t.balanceBuddies.description,
      images: [{ url: "/og-balance-buddies.jpg", width: 1200, height: 630, alt: t.balanceBuddies.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.balanceBuddies.description,
      images: ["/og-balance-buddies.jpg"],
    },
  };
}

/** Structured data for the listing: price, publisher and the FAQ, as on the Gemfire page. */
async function StructuredData() {
  const { locale, t } = await getText();
  const data = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: balanceBuddies.name,
    url: `${site.url}${localePath(locale, balanceBuddies.path)}`,
    inLanguage: localeInfo[locale].tag,
    description: t.balanceBuddies.description,
    applicationCategory: "GameApplication",
    genre: ["Puzzle", "Casual", "Physics"],
    gamePlatform: ["Android", "iOS"],
    operatingSystem: "Android 8.0+, iOS 15+",
    publisher: { "@type": "Organization", name: site.company, url: site.url },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: t.balanceBuddies.faq.items.map((item) => ({
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

export default function BalanceBuddiesPage() {
  return (
    <main>
      <StructuredData />
      <BuddiesHero />
      <Showcase />
      <HowItPlays />
      <Contraptions />
      <Hints />
      <Promises />
      <Faq game="balanceBuddies" />
      <GetIt />
    </main>
  );
}
