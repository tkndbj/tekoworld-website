import { localePath } from "@/i18n/locales";
import { Sources, buddiesSections, sections, type BuddiesUsed, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, site } from "@/lib/site";

const game = gemfire.name;
const bb = balanceBuddies.name;

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

const buddiesUsed: BuddiesUsed = {
  craftpix: "Sami kumple, z zestawu do gier Onet, oraz przyciski, panele i ikony wokół nich.",
  envato:
    "Kamienie, deski, metalowe klocki, kule i lód z zestawu klocków do gier fizycznych: wszystko, co nie jest kumplem, a i tak musi utrzymać równowagę.",
  gameburp: "Kliknięcie przycisku, pęknięcie balonu i brzdęk sprężyny.",
  lilita: "Każde słowo w grze. Udostępniony na licencji SIL Open Font License.",
};

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Twórcy",
  description: `Grafiki, dźwięki i oprogramowanie, z których powstały ${game} i ${bb}, oraz kto je stworzył.`,
  intro: `${game} i ${bb} tworzy ${site.company}. Grafiki i dźwięki w nich pochodzą na licencji od poniższych studiów, którym należą się podziękowania, a nie drobny druk.`,
  Body: () => (
    <>
      <p>
        Każdy z tych pakietów został kupiony albo udostępniony w domenie publicznej i żadna z
        licencji nie wymaga podania autora. Wymieniamy ich mimo to, bo ktoś to wszystko
        narysował.
      </p>

      <h2 id="gemfire">{game}</h2>

      <h3>Grafika</h3>
      <Sources ids={sections.art} used={used} />

      <h3>Dźwięk i muzyka</h3>
      <Sources ids={sections.sound} used={used} />

      <h3>Krój pisma</h3>
      <Sources ids={sections.type} used={used} />

      <h3>Oprogramowanie</h3>
      <p>
        Zbudowane w <strong>Unity</strong>, na <strong>Google Firebase</strong>. Reklamy są
        wyświetlane przez <strong>Unity LevelPlay</strong> i <strong>Google AdMob</strong>, a
        zgody zbiera platforma User Messaging Platform firmy Google. Co każde z nich otrzymuje i
        do czego to służy, opisujemy w{" "}
        <a href={localePath("pl", "/privacy")}>polityce prywatności</a>.
      </p>

      <h2 id="balance-buddies">{bb}</h2>

      <h3>Grafika</h3>
      <Sources ids={buddiesSections.art} used={buddiesUsed} />
      <p>Niebo, wzgórza, woda, mechanizmy i główna ilustracja powstały specjalnie dla gry.</p>

      <h3>Dźwięk i muzyka</h3>
      <Sources ids={buddiesSections.sound} used={buddiesUsed} />
      <p>
        Pozostałe dźwięki, łagodne dzwonki nastrojone w jednej tonacji i muzyka zostały
        stworzone lub nagrane dla gry.
      </p>

      <h3>Krój pisma</h3>
      <Sources ids={buddiesSections.type} used={buddiesUsed} />

      <h3>Oprogramowanie</h3>
      <p>
        Zbudowane w <strong>Unity</strong>, na <strong>Google Firebase</strong>. Reklamy
        dostarcza <strong>Google AdMob</strong>, a zgody zbiera platforma User Messaging
        Platform od Google. Zobacz{" "}
        <a href={localePath("pl", "/privacy#balance-buddies")}>politykę prywatności</a>.
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
