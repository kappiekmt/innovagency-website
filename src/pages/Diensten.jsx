import { Eyebrow, CtaSection } from "../components/Layout.jsx";

const SERVICES = [
  ["01", "Growth Strategie",
    "Een onderbouwd plan dat richting geeft en keuzes scherp maakt — geen aannames, wel kaders.",
    [
      "Groei begint met een helder strategisch fundament. We analyseren de markt, doelgroep, concurrentie, en interne capaciteit, en vertalen dat naar concrete keuzes.",
      "We definiëren wie jullie ideale klant is, hoe jullie je onderscheiden, welke kanalen prioriteit krijgen, en welke KPI's werkelijk belangrijk zijn.",
      "Het resultaat is een strategisch kader dat beslissingen stuurt, focus creëert, en de organisatie op één lijn brengt.",
      "Deze strategie wordt volledig afgestemd met de directie en vormt de basis voor alle marketinginspanningen die volgen.",
    ],
    "ICP-definitie, positioneringskeuze, kanaalstrategie, KPI-framework"],
  ["02", "Performance Marketing",
    "Datagedreven campagnes met focus op rendement, niet op vanity metrics.",
    [
      "Performance marketing draait om resultaat. We bouwen campagnes die gericht zijn op conversie, niet op impressies.",
      "We optimaliseren op ROAS, CAC en LTV — metrics die er echt toe doen. Elke euro wordt verantwoord, elke campagne gemeten, en elke beslissing onderbouwd met data.",
      "We werken met alle relevante kanalen: Google Ads, Meta, LinkedIn, programmatic — maar alleen die kanalen die echt bijdragen aan de doelstellingen.",
      "Continue optimalisatie en A/B-testing zijn standaard. We sturen wekelijks bij, testen onvermoeibaar, en zorgen dat elke campagne beter presteert dan de vorige.",
    ],
    "Campagne-opzet, targeting & creative, bidding & optimalisatie, rapportage & sturing"],
  ["03", "Branding & Positionering",
    "Een merk dat onderscheidend is, herkenbaar blijft en in elk kanaal stand houdt.",
    [
      "Een sterk merk is geen logo of kleurenpalet — het is een heldere positie in de markt en in de hoofden van jullie doelgroep.",
      "We helpen organisaties hun onderscheidende waarde scherp te krijgen, dit te vertalen naar een visuele en verbale identiteit, en consequent toe te passen over alle touchpoints.",
      "We zorgen dat merk en performance hand in hand gaan. Een campagne die converteert, maar het merk verwatert, is een slechte deal. Wij bouwen merkwaarde én conversie.",
      "Van naming en messaging tot tone of voice en brand guidelines — alles wordt opgeleverd met oog voor consistentie en impact.",
    ],
    "Positionering, messaging framework, visuele identiteit, brand guidelines"],
  ["04", "Website & Funnel Optimalisatie",
    "Een digitale omgeving die converteert en het verhaal van het merk waarmaakt.",
    [
      "De website is het centrale conversie-instrument. Hier komen bezoekers binnen, hier vallen beslissingen, hier wordt vertrouwen opgebouwd of verloren.",
      "We bouwen websites en funnels die niet alleen mooi zijn, maar echt converteren. Strategisch UX-design, heldere copy, en een technische basis die snel, stabiel en meetbaar is.",
      "We optimaliseren op basis van data: heatmaps, sessie-opnames, A/B-tests en conversie-analyse. Elke pagina wordt continu verbeterd.",
      "Van landingspagina's voor campagnes tot volledige website-redesigns — altijd met dezelfde focus: conversie en merkbeleving in balans.",
    ],
    "Website-strategie, UX/UI-design, development, CRO & testing"],
  ["05", "Content & Campagnes",
    "Verhalen, formats en campagnes die opvallen in een verzadigde markt.",
    [
      "Content is geen doel op zich — het is een middel om aandacht te krijgen, vertrouwen op te bouwen, en conversie te stimuleren.",
      "We ontwikkelen contentstrategie die aansluit op de klantreis: van awareness tot conversie. Elke asset heeft een functie, elk kanaal een rol.",
      "We produceren alles zelf of sturen externe partijen nauwgezet aan: video, fotografie, artikelen, whitepapers, case studies, social content — alles op hoog niveau.",
      "Campagnes worden niet gelanceerd en dan losgelaten. We monitoren real-time, sturen bij waar nodig, en zorgen dat elke campagne maximale impact heeft.",
    ],
    "Contentstrategie, campagne-concepten, contentproductie, kanaalactivatie"],
  ["06", "Marketing als Team (retainer)",
    "Een vast extern marketingteam dat strategie en uitvoering volledig overneemt.",
    [
      "Dit is de vorm waarin de meeste samenwerkingen uiteindelijk landen: een retainer waarin we fungeren als het volledige marketingteam.",
      "We nemen eigenaarschap over strategie, planning, uitvoering en rapportage. Alles wat marketing omvat, valt onder onze verantwoordelijkheid.",
      "We integreren in de organisatie, schuiven aan op directieniveau, en zijn bereikbaar alsof we intern zijn. Maximale betrokkenheid, minimale afstand.",
      "Dit model werkt voor organisaties die geen vol marketingteam in huis willen of kunnen bouwen, maar wel de kwaliteit, focus en eigenaarschap willen die daarbij hoort.",
    ],
    "Volledige marketingverantwoordelijkheid, strategische sparring, continue executie, maandelijkse sturing"],
];

export default function DienstenPage({ navigate }) {
  return (
    <>
      <section className="section section--intro">
        <div className="page-wrap">
          <div className="hero-row">
            <Eyebrow>Diensten</Eyebrow>
            <div className="hero-row__main">
              <h1 className="h1">Zes disciplines, één geïntegreerd team.</h1>
              <p className="lede" style={{ marginTop: 40 }}>
                Van strategie tot executie — wij bieden de volledige marketingstack. Of we nu één discipline invullen of fungeren als het complete externe team, kwaliteit en eigenaarschap staan altijd centraal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark section--body">
        <div className="page-wrap">
          <div style={{ padding: "0 64px" }} className="services-wrap">
            {SERVICES.map(([num, title, sub, body, deliverables]) => (
              <article className="service" key={num}>
                <div>
                  <div className="service__num">{num}</div>
                  <div className="service__num-rule"></div>
                </div>
                <div className="service__body">
                  <h3 className="service__title">{title}</h3>
                  <p className="service__sub">{sub}</p>
                  <div className="service__paragraphs">
                    {body.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                  <div className="service__deliverables">
                    <span className="eyebrow">Deliverables</span>
                    <p>{deliverables}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Benieuwd wat we voor jullie kunnen betekenen?" navigate={navigate} />

      <style>{`
        @media (max-width: 900px) {
          .services-wrap { padding: 0 !important; }
        }
      `}</style>
    </>
  );
}
