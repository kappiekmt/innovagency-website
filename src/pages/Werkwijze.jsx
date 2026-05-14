import { Eyebrow, CtaSection } from "../components/Layout.jsx";

const STEPS = [
  ["01", "Kennismaking",
    "Een eerste open gesprek over ambitie, vertrouwen en wederzijdse fit. Geen verkoopgesprek — een verkenning of er voldoende basis is voor de manier waarop wij werken.",
    "In dit gesprek stellen we scherpe vragen. Niet om uit te vragen, maar om te beoordelen of wij de juiste partner zijn — en of jullie klaar zijn voor een samenwerking waarin eigenaarschap centraal staat.",
    "Aan het einde van dit gesprek weten beide partijen of er voldoende basis is om verder te gaan."],
  ["02", "Strategische intake",
    "Als we verder gaan, duiken we diep. We analyseren de markt, de concurrentie, de data, en de bestaande marketinginspanningen.",
    "We spreken met de directie, het verkoopteam, en andere stakeholders om een compleet beeld te krijgen van wat werkt, wat niet werkt, en waar de werkelijke kansen zitten.",
    "Dit is geen oppervlakkige check — dit is een fundamentele analyse die de basis vormt voor alles wat volgt."],
  ["03", "Strategisch plan",
    "Op basis van de intake leveren we een strategisch marketingplan. Geen document dat in een la verdwijnt, maar een actieplan met concrete keuzes.",
    "We stellen prioriteiten, definiëren KPI's, bepalen kanalen en tactieken, en maken helder wat we wel en niet gaan doen — en waarom.",
    "Dit plan wordt volledig afgestemd met de directie en vormt het fundament voor de samenwerking."],
  ["04", "Integratie als team",
    "Vanaf dit moment zijn we geen extern bureau meer — we zijn onderdeel van het team.",
    "We krijgen toegang tot systemen, data en interne communicatie. We denken mee op directieniveau, schuiven aan bij strategische sessies, en nemen volledige verantwoordelijkheid voor marketing.",
    "Deze integratie maakt het verschil tussen een leverancier en een partner die écht eigenaarschap neemt."],
  ["05", "Executie op hoog niveau",
    "Executie is waar strategie slaagt of faalt. Daarom voeren wij uit met maximale precisie en focus op kwaliteit.",
    "Of het nu gaat om campagnes, content, websites, of SEO — alles wat live gaat voldoet aan de hoogste standaard en is volledig afgestemd op het strategische plan.",
    "We bewaken de details, houden de snelheid erin, en zorgen dat er geen losse eindjes blijven liggen."],
  ["06", "Continue sturing",
    "Marketing is geen 'set it and forget it'-discipline. We evalueren maandelijks wat werkt en wat niet, en sturen bij op basis van data en signalen uit de markt.",
    "We rapporteren transparant, bespreken resultaten op directieniveau, en passen strategie en uitvoering aan waar nodig.",
    "Zo blijft de marketinginspanning relevant, effectief, en afgestemd op de groeiambities van de organisatie."],
];

export default function WerkwijzePage({ navigate }) {
  return (
    <>
      <section className="section section--intro">
        <div className="page-wrap">
          <div className="hero-row">
            <Eyebrow>Werkwijze</Eyebrow>
            <div className="hero-row__main">
              <h1 className="h1">Van intake tot continue sturing.</h1>
              <p className="lede" style={{ marginTop: 40 }}>
                Onze werkwijze is gebaseerd op diepgaande integratie, strategische helderheid en continue sturing. Geen losse projecten — een langdurige samenwerking waarin we volledige verantwoordelijkheid nemen voor groei.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark section--body">
        <div className="page-wrap">
          <div className="sec-head">
            <Eyebrow withRule={false}>Zes stappen</Eyebrow>
            <div className="sec-head__main">
              <h2 className="h2">Zo werken we samen.</h2>
            </div>
          </div>

          <div style={{ padding: "0 64px" }} className="steps-wrap">
            {STEPS.map(([num, title, ...paragraphs]) => (
              <article className="step" key={num}>
                <div className="step__num">{num}</div>
                <div className="step__body">
                  <h3 className="step__title">{title}</h3>
                  <div className="step__paragraphs">
                    {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Klaar voor een samenwerking met impact?" navigate={navigate} />

      <style>{`
        @media (max-width: 900px) {
          .steps-wrap { padding: 0 !important; }
        }
      `}</style>
    </>
  );
}
