export default function ComingSoon() {
  return (
    <main className="coming-soon">
      <div className="coming-soon__inner">
        <img src="/assets/logo.png" alt="Innovagency" className="coming-soon__logo"/>

        <div className="coming-soon__eyebrow">Binnenkort online</div>

        <h1 className="coming-soon__title">
          Geen bureau.<br/>
          Een marketingteam dat eigenaarschap neemt.
        </h1>

        <p className="coming-soon__lede">
          Innovagency is het externe marketingteam voor ambitieuze bedrijven. Wij combineren strategie en executie, en nemen verantwoordelijkheid voor groei.
        </p>

        <p className="coming-soon__lede coming-soon__lede--muted">
          Onze nieuwe website is in de maak. Wil je nu al kennismaken?
        </p>

        <div className="coming-soon__actions">
          <a href="mailto:hello@innovagency.nl" className="btn">
            Neem contact op <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="coming-soon__foot">
          © {new Date().getFullYear()} Innovagency
        </div>
      </div>
    </main>
  );
}
