import { useState } from "react";
import { Arrow } from "../components/Layout.jsx";

export default function ContactPage({ navigate }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const markTouched = (k) => () => setTouched(t => ({ ...t, [k]: true }));

  const errors = {
    name:    !form.name.trim() ? "Naam is verplicht" : "",
    company: !form.company.trim() ? "Bedrijf is verplicht" : "",
    email:   !form.email.trim() ? "E-mail is verplicht"
             : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "Geen geldig e-mailadres" : "",
  };
  const isValid = !errors.name && !errors.company && !errors.email;

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, company: true, email: true });
    if (!isValid) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section section--intro" style={{ minHeight: "70vh" }}>
        <div className="page-wrap">
          <div className="contact-wrap">
            <h1>Dank je wel.</h1>
            <p className="lede">We hebben je aanvraag ontvangen, {form.name.split(" ")[0]}. We nemen binnen één werkdag contact op om een kennismaking in te plannen.</p>
            <div className="success-msg">
              <strong style={{ color: "var(--accent)" }}>Bevestiging verzonden naar {form.email}</strong>
            </div>
            <div style={{ marginTop: 40 }}>
              <a href="#/home" onClick={(e) => { e.preventDefault(); navigate("home"); }} className="text-link">
                Terug naar home <Arrow/>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--intro" style={{ paddingBottom: 128 }}>
      <div className="page-wrap">
        <div className="contact-wrap">
          <h1>Plan een kennismaking</h1>
          <p className="lede">Wij werken selectief. Een kennismaking is wederzijds — wij beoordelen of er een match is op ambitie en vertrouwen.</p>

          <form className="form-grid" onSubmit={onSubmit} noValidate>
            {[
              ["name",    "Naam",            "text",  "Voor- en achternaam"],
              ["company", "Bedrijf",         "text",  "Naam van jullie organisatie"],
              ["email",   "E-mailadres",     "email", "naam@bedrijf.com"],
              ["phone",   "Telefoonnummer (optioneel)", "tel", "+31 6 12 34 56 78"],
            ].map(([key, label, type, placeholder]) => (
              <div className="form-field" key={key}
                   style={touched[key] && errors[key]
                     ? { borderColor: "rgba(220, 80, 80, 0.6)" } : null}>
                <label className="form-field__label" htmlFor={key}>{label}</label>
                <input id={key} name={key} type={type}
                       placeholder={placeholder}
                       value={form[key]}
                       onChange={update(key)}
                       onBlur={markTouched(key)} />
                {touched[key] && errors[key] && (
                  <div style={{
                    marginTop: 6,
                    fontSize: 12,
                    color: "rgba(230, 120, 120, 0.95)",
                  }}>{errors[key]}</div>
                )}
              </div>
            ))}

            <div className="form-field form-field--textarea">
              <label className="form-field__label" htmlFor="message">Korte toelichting</label>
              <textarea id="message" name="message" rows="3"
                        placeholder="Vertel kort over jullie bedrijf en waar je mee bezig bent..."
                        value={form.message}
                        onChange={update("message")}/>
            </div>

            <button type="submit" className="form-submit">
              Verstuur aanvraag <Arrow/>
            </button>
          </form>

          <div className="contact-direct">
            <span className="eyebrow">Direct contact</span>
            <a href="mailto:hello@innovagency.com" className="contact-direct__email">hello@innovagency.com</a>
            <span className="contact-direct__address">Dorpstraat 26H, 7391 DE Twello — Tel. 085 303 39 60</span>
          </div>
        </div>
      </div>
    </section>
  );
}
