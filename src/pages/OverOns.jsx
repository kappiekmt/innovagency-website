import { Eyebrow, CtaSection, Arrow } from "../components/Layout.jsx";

const TEAM = [
  ["Sophie van der Meer", "Strategisch directeur",     "Strategie is pas waardevol als het tot actie leidt.",       "/assets/team-sophie.jpg"],
  ["Jurgen Bakker",       "Performance lead",          "Data zonder context is ruis. Context zonder data is gissen.","/assets/team-jurgen.jpg"],
  ["Lisa de Jong",        "Brand & creative directeur","Een merk is geen logo. Het is een belofte die je elke dag waarmaakt.", "/assets/team-lisa.jpg"],
  ["Thomas Vermeulen",    "Growth marketeer",          "Groei is geen toeval. Het is discipline, data en durven.",  "/assets/team-thomas.jpg"],
];

const VALUES = [
  ["Eigenaarschap", "Wij nemen verantwoordelijkheid voor resultaten, niet alleen voor uitvoering. Elke beslissing wordt genomen alsof het ons eigen bedrijf is."],
  ["Kwaliteit",     "Alles wat live gaat voldoet aan de hoogste standaard. Kwaliteit is geen doel, maar de norm."],
  ["Nabijheid",     "Wij zijn geen extern bureau. We integreren in de organisatie en zijn bereikbaar alsof we intern zijn."],
  ["Transparantie", "We rapporteren eerlijk, communiceren open, en bespreken zowel successen als tegenslagen zonder opsmuk."],
  ["Selectiviteit", "We werken met een beperkt aantal klanten en zeggen bewust nee tegen verkeerde matches."],
  ["Betrokkenheid", "We denken mee op directieniveau, schuiven aan bij strategische beslissingen, en geven volledige focus."],
];

export default function OverOnsPage({ navigate }) {
  return (
    <>
      <section className="section section--intro">
        <div className="page-wrap">
          <div className="hero-row">
            <Eyebrow>Over ons</Eyebrow>
            <div className="hero-row__main">
              <h1 className="h1">Wij zijn geen bureau.<br/>Wij zijn jouw marketingteam.</h1>
              <p className="lede" style={{ marginTop: 40 }}>
                Innovagency is opgericht vanuit de overtuiging dat marketing pas impact maakt wanneer iemand het écht draagt. Daarom werken we niet als leverancier, maar als geïntegreerd team dat eigenaarschap neemt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About row with photo */}
      <section className="section section--dark section--body">
        <div className="page-wrap">
          <div className="sec-head">
            <Eyebrow withRule={false}>04 — Over ons</Eyebrow>
            <div className="sec-head__main">
              <h2 className="h2">Wij geloven dat marketing pas impact maakt wanneer iemand het écht draagt.</h2>
            </div>
          </div>

          <div className="about-grid">
            <div></div>
            <div className="about-grid__img" style={{ backgroundImage: "url(/assets/about.jpg)" }}></div>
            <div className="about-grid__copy">
              <p>We werken niet voor klanten. We werken met hen. Ons team integreert in de organisatie, denkt op directieniveau mee en maakt de keuzes die er werkelijk toe doen — gefundeerd, gedragen, en met de blik op groei op lange termijn.</p>
              <p>Daarom houden we het bewust klein. Een handvol partners. Diepe betrokkenheid. Een werkwijze die niet schaalt op aantallen, maar op resultaat.</p>
              <ul className="about-list">
                <li className="about-list__item">Intensieve, langdurige samenwerking</li>
                <li className="about-list__item">Volledige betrokkenheid op directieniveau</li>
                <li className="about-list__item">Kwaliteit boven schaal — altijd</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--dark section--body">
        <div className="page-wrap">
          <div className="sec-head">
            <Eyebrow withRule={false}>Het team</Eyebrow>
            <div className="sec-head__main">
              <h2 className="h2 h2--small">Mensen die marketing dragen, niet uitvoeren.</h2>
            </div>
          </div>

          <div className="team">
            {TEAM.map(([name, role, quote, img]) => (
              <div className="team__card" key={name}>
                <div className="team__img" style={{ backgroundImage: `url(${img})` }}></div>
                <div>
                  <div className="team__name">{name}</div>
                  <div className="team__role">{role.toUpperCase()}</div>
                  <p className="team__quote">"{quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge — werkwijze recap */}
      <section className="section section--body">
        <div className="page-wrap">
          <div className="split">
            <div></div>
            <div className="split__body">
              <p>Van kennismaking tot continue sturing — alles is gericht op eigenaarschap.</p>
              <p>Onze werkwijze is opgebouwd rond zes stappen: van een wederzijdse kennismaking tot volledige integratie als team. Elke stap is erop gericht om maximale betrokkenheid, helderheid en impact te creëren.</p>
              <a href="#/werkwijze"
                 onClick={(e) => { e.preventDefault(); navigate("werkwijze"); }}
                 className="text-link"
                 style={{ marginTop: 8 }}>Bekijk onze werkwijze <Arrow/></a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--dark section--body">
        <div className="page-wrap">
          <div className="sec-head">
            <Eyebrow withRule={false}>Onze waarden</Eyebrow>
            <div className="sec-head__main">
              <h2 className="h2 h2--small">Zes principes die elke samenwerking sturen.</h2>
            </div>
          </div>

          <div className="values">
            {VALUES.map(([t, b]) => (
              <div className="value" key={t}>
                <div className="value__title">{t}</div>
                <p className="value__body">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What drives us */}
      <section className="section section--body">
        <div className="page-wrap">
          <div className="split">
            <Eyebrow withRule={false}>Wat ons drijft</Eyebrow>
            <div className="split__body">
              <p>Wij geloven dat marketing pas impact maakt wanneer iemand het écht draagt. Toch zien we te vaak het tegenovergestelde: bureaus die output leveren maar geen verantwoordelijkheid nemen, klanten die er één van velen zijn, communicatie die reactief blijft.</p>
              <p>Dat is precies waar bedrijven hun groeipotentieel verliezen. Innovagency is opgericht om dit anders te doen. Wij nemen volledige verantwoordelijkheid, integreren in de organisatie, en maken keuzes alsof het ons eigen bedrijf is.</p>
              <p>Dit vraagt maximale focus. Daarom werken we bewust met een beperkt aantal klanten. Elke samenwerking krijgt de aandacht, kwaliteit en betrokkenheid die nodig is om werkelijk verschil te maken.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our choices */}
      <section className="section section--body">
        <div className="page-wrap">
          <div className="split">
            <Eyebrow withRule={false}>Onze keuzes</Eyebrow>
            <div className="split__body">
              <p>Waarom boutique en niet schaal? Een bewuste keuze met consequenties.</p>
              <p>We hadden kunnen kiezen voor groei op volume. Meer klanten, meer teams, meer kantoren. Maar dat zou ten koste gaan van wat we waardevol vinden: betrokkenheid, kwaliteit en echte impact.</p>
              <p>Daarom houden we het bewust klein. Een handvol partners. Diepe betrokkenheid. Een werkwijze die niet schaalt op aantallen, maar op resultaat. Dit betekent dat we selectief zijn in wie we aannemen — en dat is wederzijds.</p>
              <p>We zoeken ambitieuze bedrijven die klaar zijn voor een samenwerking waarin eigenaarschap en vertrouwen centraal staan. Geen opdrachtgevers, maar partners die met ons groeien.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Kom kennismaken met het team."
        lede="Een open gesprek over ambitie, vertrouwen en wederzijdse fit. Geen verplichtingen, wel helderheid."
        navigate={navigate}/>
    </>
  );
}
