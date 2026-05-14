import { useState } from "react";
import { Eyebrow, CtaSection, Arrow } from "../components/Layout.jsx";

const POSTS = [
  { cat: "Strategie",   time: "6 min", title: "Waarom de meeste marketingplannen falen voordat ze beginnen", excerpt: "Een strategisch marketingplan is pas waardevol als het gefundeerd is op realiteit, niet op aannames. Veel plannen missen de basis." },
  { cat: "Branding",    time: "4 min", title: "Positionering is een keuze, geen oefening in copywriting", excerpt: "Te veel merken proberen alles te zijn voor iedereen. Echte positionering betekent bewust afstand nemen van wie je niet bent." },
  { cat: "Performance", time: "5 min", title: "Het verschil tussen meten en sturen op data", excerpt: "Data verzamelen is gemakkelijk. De juiste conclusies trekken en daadwerkelijk sturen op wat ertoe doet, dat is waar de meeste organisaties vastlopen." },
  { cat: "Strategie",   time: "7 min", title: "Waarom eigenaarschap het verschil maakt in marketing", excerpt: "Het verschil tussen een bureau dat levert en een team dat écht verantwoordelijkheid neemt, is groter dan je denkt." },
  { cat: "Performance", time: "5 min", title: "ROAS is niet hetzelfde als rendement", excerpt: "Veel marketeers optimaliseren op ROAS zonder te begrijpen wat het werkelijk zegt over de gezondheid van hun groei." },
  { cat: "Strategie",   time: "4 min", title: "Hoe selectiviteit in klanten kwaliteit verhoogt", excerpt: "Door bewust nee te zeggen tegen verkeerde klanten, kunnen we maximale focus en kwaliteit bieden aan de juiste partijen." },
  { cat: "Performance", time: "8 min", title: "Wanneer organic groei meer oplevert dan ads", excerpt: "Paid media is krachtig, maar er zijn momenten waarop organic kanalen structureel meer waarde creëren. Hier is wanneer." },
  { cat: "Branding",    time: "5 min", title: "Waarom consistentie de basis is van merkherkenning", excerpt: "Elk touchpoint telt. Inconsistentie tussen kanalen ondermijnt vertrouwen en verzwakt de merkpositie." },
  { cat: "Strategie",   time: "6 min", title: "De rol van een marketingteam in directieoverleg", excerpt: "Marketing hoort op directieniveau te worden besproken. Niet als kostenpost, maar als strategische motor van groei." },
];

const FILTERS = ["Alle", "Strategie", "Branding", "Performance"];

export default function InsightsPage({ navigate }) {
  const [active, setActive] = useState("Alle");
  const visible = active === "Alle" ? POSTS : POSTS.filter(p => p.cat === active);

  return (
    <>
      <section className="section section--intro">
        <div className="page-wrap">
          <div className="hero-row">
            <Eyebrow>Insights</Eyebrow>
            <div className="hero-row__main">
              <h1 className="h1">Hoe wij denken over marketing en groei.</h1>
              <p className="lede" style={{ marginTop: 40 }}>
                Inzichten, standpunten en observaties over strategie, branding en performance marketing. Geschreven vanuit de praktijk, niet vanuit theorie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark section--body">
        <div className="page-wrap">
          <div className="insight-filters">
            {FILTERS.map(f => (
              <button key={f}
                      className={`insight-filter ${active === f ? "insight-filter--active" : ""}`}
                      onClick={() => setActive(f)}>
                {f}
              </button>
            ))}
          </div>

          <div className="insight-grid">
            {visible.map((p, i) => (
              <a href="#" key={p.title + i} className="insight-card"
                 onClick={(e) => e.preventDefault()}>
                <div className="insight-card__meta">
                  <span className="eyebrow">{p.cat}</span>
                  <span className="insight-card__time">{p.time}</span>
                </div>
                <h3 className="insight-card__title">{p.title}</h3>
                <p className="insight-card__excerpt">{p.excerpt}</p>
                <span className="insight-card__cta">Lees verder <Arrow/></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Liever het gesprek aangaan?" lede="Een artikel zegt veel. Een goed gesprek meer." navigate={navigate} />
    </>
  );
}
