import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { Games } from "@/components/home/Games";
import { Studio } from "@/components/home/Studio";
import { Contact } from "@/components/home/Contact";
import { localeInfo, localePath } from "@/i18n/locales";
import { getText } from "@/i18n/server";
import { gemfire, site } from "@/lib/site";

/**
 * Structured data for the company. A store reviewer or a journalist looking
 * for the organisation behind the app finds it named here, with its product.
 */
async function StructuredData() {
  const { locale, t } = await getText();
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company,
    url: `${site.url}${localePath(locale, "/")}`,
    logo: `${site.url}/apple-icon.png`,
    email: site.email,
    description: t.site.description,
    address: { "@type": "PostalAddress", addressLocality: site.address },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "VideoGame",
        name: gemfire.name,
        url: `${site.url}${localePath(locale, gemfire.path)}`,
        inLanguage: localeInfo[locale].tag,
        applicationCategory: "GameApplication",
        operatingSystem: "Android, iOS",
      },
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
      <Ticker />
      <Games />
      <Studio />
      <Contact />
    </main>
  );
}
