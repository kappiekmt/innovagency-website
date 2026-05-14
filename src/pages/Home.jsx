import { Eyebrow, CtaSection, Arrow } from "../components/Layout.jsx";

export default function HomePage({ navigate }) {
  return (
    <>
      {/* Hero */}
      <section className="section section--intro">
        <div className="page-wrap">
          <div className="hero-row">
            <Eyebrow>01 — Introductie</Eyebrow>
            <div className="hero-row__main">
              <h1 className="h1">Geen bureau.<br/>Een marketingteam dat eigenaarschap neemt.</h1>
              <p className="lede" style={{ marginTop: 40 }}>
                Innovagency is het externe marketingteam voor ambitieuze bedrijven. Wij combineren strategie en executie, en nemen verantwoordelijkheid voor groei.
              </p>
              <div className="hero-row__actions">
                <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }} className="btn">
                  Plan een kennismaking <Arrow/>
                </a>
                <a href="#/werkwijze" onClick={(e) => { e.preventDefault(); navigate("werkwijze"); }} className="btn btn--ghost">
                  Ontdek onze werkwijze
                </a>
              </div>
            </div>
          </div>

          <div className="stats">
            {[
              ["12",   "Actieve klanten — selectief"],
              ["94%",  "Retentie na jaar één"],
              ["3.4×", "Gem. groei in 18 maanden"],
              ["2014", "Opgericht in"],
            ].map(([v, l]) => (
              <div className="stat" key={l}>
                <div className="stat__value">{v}</div>
                <div className="stat__label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section section--dark section--body">
        <div className="page-wrap">
          <div className="sec-head">
            <Eyebrow withRule={false}>02 — Pijlers</Eyebrow>
            <div className="sec-head__main">
              <h2 className="h2 h2--small">Drie principes die elke samenwerking sturen.</h2>
            </div>
          </div>

          <div className="pillars">
            {[
              ["01", "Eigenaarschap als standaard", "Wij voeren niet uit. Wij nemen verantwoordelijkheid. Beslissingen worden genomen alsof het ons eigen bedrijf is."],
              ["02", "Selectief in klanten",        "Wij draaien geen volume. Wij werken met een beperkt aantal ambitieuze bedrijven en geven elke samenwerking maximale focus."],
              ["03", "High-end executie",           "Kwaliteit is geen doel, maar de norm. Alles wat live gaat, voldoet aan de hoogste standaard."],
            ].map(([n, t, b]) => (
              <div className="pillar" key={n}>
                <div className="pillar__num">{n}</div>
                <div>
                  <div className="pillar__title">{t}</div>
                  <p className="pillar__body" style={{ marginTop: 16 }}>{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Observation */}
      <section className="section section--body">
        <div className="page-wrap">
          <div className="observation">
            <Eyebrow withRule={false}>03 — Observatie</Eyebrow>
            <p className="observation__quote">
              Veel bureaus leveren output. Weinig bureaus nemen eigenaarschap. Klanten worden één van velen. Communicatie is reactief. Kwaliteit wisselt. En precies daar verliezen bedrijven hun groeipotentieel.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Klaar om eigenaarschap te ervaren?"
        lede="Plan een kennismaking en ontdek of er een match is."
        navigate={navigate}
      />
    </>
  );
}
