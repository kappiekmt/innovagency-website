import { useState, useEffect } from "react";

// ─── Shared icons ────────────────────────────────────────────
export const Arrow = ({ className = "arrow" }) => (
  <span className={className} aria-hidden="true">→</span>
);

export const SocialIcon = ({ kind }) => {
  if (kind === "linkedin") return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.2 5.5h2.1V13H3.2V5.5zM4.25 2.2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM6.7 5.5h2v1.05h.03c.28-.53 1-1.1 2.05-1.1 2.2 0 2.6 1.45 2.6 3.3V13h-2.1V9.16c0-.92-.02-2.1-1.28-2.1-1.28 0-1.48.95-1.48 2.04V13h-2.1V5.5h.28z"/>
    </svg>
  );
  if (kind === "x") return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M11.7 2H13.6L9.55 6.7 14.3 13H10.6L7.7 9.27 4.4 13H2.5L6.84 8 2.3 2H6.1l2.62 3.43L11.7 2zm-.66 9.85h1.05L4.99 3.1H3.86l7.17 8.75z"/>
    </svg>
  );
  return ( // instagram
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="2.5" y="2.5" width="11" height="11" rx="3.2"/>
      <circle cx="8" cy="8" r="2.6"/>
      <circle cx="11.4" cy="4.6" r="0.6" fill="currentColor" stroke="none"/>
    </svg>
  );
};

// ─── Nav ─────────────────────────────────────────────────────
export function Nav({ route, navigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { setMobileOpen(false); }, [route]);

  const links = [
    { id: "werkwijze", label: "Werkwijze" },
    { id: "diensten",  label: "Diensten"  },
    { id: "insights",  label: "Insights"  },
    { id: "over-ons",  label: "Over ons"  },
    { id: "contact",   label: "Contact"   },
  ];

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#/home"
           onClick={(e) => { e.preventDefault(); navigate("home"); }}
           className="nav__logo" aria-label="Innovagency home">
          <img src="/assets/logo.png" alt="Innovagency" />
        </a>

        <nav className="nav__links" aria-label="Hoofdmenu">
          {links.map(l => (
            <a key={l.id} href={`#/${l.id}`}
               onClick={(e) => { e.preventDefault(); navigate(l.id); }}
               className={`nav__link ${route === l.id ? "nav__link--active" : ""}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#/contact"
           onClick={(e) => { e.preventDefault(); navigate("contact"); }}
           className="btn btn--sm nav__cta">
          Plan een kennismaking <Arrow/>
        </a>

        <button className="nav__menu-btn"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? "Sluit" : "Menu"}
        </button>

        {mobileOpen && (
          <div className="nav__mobile">
            {links.map(l => (
              <a key={l.id} href={`#/${l.id}`}
                 onClick={(e) => { e.preventDefault(); navigate(l.id); }}
                 className={`nav__link ${route === l.id ? "nav__link--active" : ""}`}>
                {l.label}
              </a>
            ))}
            <a href="#/contact"
               onClick={(e) => { e.preventDefault(); navigate("contact"); }}
               className="btn btn--sm">
              Plan een kennismaking <Arrow/>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

// ─── Footer ──────────────────────────────────────────────────
export function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="page-wrap">
        <div className="footer__top">
          <div>
            <a href="#/home" onClick={(e) => { e.preventDefault(); navigate("home"); }}
               style={{display: "inline-block", height: 48, width: 68}}>
              <img src="/assets/logo.png" alt="Innovagency"
                   style={{height: "100%", width: "100%", objectFit: "contain"}}/>
            </a>
            <p className="footer__brand-blurb">
              Het externe marketingteam voor ambitieuze bedrijven. Strategie, executie en eigenaarschap onder één dak.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Navigatie</div>
            <ul className="footer__list">
              {[
                ["werkwijze", "Werkwijze"],
                ["diensten",  "Diensten"],
                ["insights",  "Insights"],
                ["over-ons",  "Over ons"],
                ["contact",   "Contact"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a href={`#/${id}`}
                     onClick={(e) => { e.preventDefault(); navigate(id); }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Contact</div>
            <ul className="footer__list">
              <li className="footer__contact-item">Dorpstraat 26H</li>
              <li className="footer__contact-item">7391 DE Twello</li>
              <li><a href="mailto:hello@innovagency.com">hello@innovagency.com</a></li>
              <li><a href="tel:+31853033960">085 303 39 60</a></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Volg ons</div>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="LinkedIn"><SocialIcon kind="linkedin"/></a>
              <a href="#" className="footer__social" aria-label="X"><SocialIcon kind="x"/></a>
              <a href="#" className="footer__social" aria-label="Instagram"><SocialIcon kind="instagram"/></a>
            </div>
          </div>
        </div>

        <div className="footer__bot">
          <div>© 2026 Innovagency. Alle rechten voorbehouden.</div>
          <div className="footer__bot-links">
            <a href="#">Privacy</a>
            <a href="#">Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Eyebrow with rule ───────────────────────────────────────
export function Eyebrow({ children, withRule = true }) {
  return (
    <div className={`eyebrow ${withRule ? "eyebrow--rule" : ""}`}>
      <div>{children}</div>
    </div>
  );
}

// ─── CTA section (reusable bottom-of-page) ───────────────────
export function CtaSection({ heading, lede, navigate, label = "Plan een kennismaking" }) {
  return (
    <section className="section section--cta">
      <div className="page-wrap">
        <div className="cta-block">
          <h2 className="h2">{heading}</h2>
          {lede && <p className="lede cta-block__lede">{lede}</p>}
          <a href="#/contact"
             onClick={(e) => { e.preventDefault(); navigate("contact"); }}
             className="btn">{label} <Arrow/></a>
        </div>
      </div>
    </section>
  );
}
