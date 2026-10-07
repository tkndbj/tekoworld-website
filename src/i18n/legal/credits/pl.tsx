import { localePath } from "@/i18n/locales";
import { Sources, sections, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, site } from "@/lib/site";

const game = gemfire.name;

const used: Used = {
  craftpix:
    "Większość tego, co widać: klejnoty, najeźdźcy i ich animacje, wieże, pola bitew, zestaw interfejsu, mapy świata i niebo oraz kafelki wioski.",
  layerlab: "Grafiki monet i klejnotów na półkach sklepu oraz ikony na dole ekranu.",
  envato: "Skrzynie ze skarbami i sposób, w jaki się otwierają, oraz jedna z trzech armii najeźdźców.",
  kaykit:
    "Modele 3D, z których renderowane są budynki twojego królestwa, oraz jeden z jego bossów. Udostępnione na licencji CC0.",
  gameburp: "Większość efektów dźwiękowych w grze.",
  rpgmagic: "Zaklęcia: wszystko, co się rzuca, a nie zadaje ciosem.",
  craftpixMusic: "Muzyka w menu i na mapie świata.",
  titan:
    "Każde słowo w grze jest nią złożone. Udostępniona na licencji SIL Open Font License; nasza wersja dodaje litery z akcentami dla imion tureckich, polskich, czeskich i węgierskich i dlatego nosi inną nazwę.",
};

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Twórcy",
  description: `Grafika, dźwięk i oprogramowanie, z których powstał ${game}, i ich autorzy.`,
  intro: `${game} tworzy ${site.company}. Grafika i dźwięk pochodzą z licencji od studiów wymienionych niżej, którym należą się bardziej podziękowania niż drobny druk.`,
  Body: () => (
    <>
      <p>
        Każdy z tych pakietów został kupiony albo udostępniony w domenie publicznej i żadna z
        licencji nie wymaga podania autora. Wymieniamy ich mimo to, bo ktoś to wszystko
        narysował.
      </p>

      <h2>Grafika</h2>
      <Sources ids={sections.art} used={used} />

      <h2>Dźwięk i muzyka</h2>
      <Sources ids={sections.sound} used={used} />

      <h2>Krój pisma</h2>
      <Sources ids={sections.type} used={used} />

      <h2>Oprogramowanie</h2>
      <p>
        Zbudowane w <strong>Unity</strong>, na <strong>Google Firebase</strong>. Reklamy są
        wyświetlane przez <strong>Unity LevelPlay</strong> i <strong>Google AdMob</strong>, a
        zgody zbiera platforma User Messaging Platform firmy Google. Co każde z nich otrzymuje i
        do czego to służy, opisujemy w{" "}
        <a href={localePath("pl", "/privacy")}>polityce prywatności</a>.
      </p>

      <h2>Kogoś brakuje?</h2>
      <p>
        Jeśli coś, co widać w grze {game}, jest twoim dziełem, a nie ma cię na tej liście, napisz na{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>, a poprawimy to.
      </p>
    </>
  ),
};

export default doc;
