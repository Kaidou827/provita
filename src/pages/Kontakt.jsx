import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import PageShell from '../components/PageShell.jsx';
import { site, fullAddress } from '../data/site.js';

/* ==========================================================================
   Kein Backend, keine Datenbank – bewusst so.
   Das Formular validiert im Browser und öffnet anschließend einen fertig
   ausgefüllten E-Mail-Entwurf im Mailprogramm. Es werden keine Daten an einen
   Server übertragen, was die Datenschutzerklärung deutlich einfacher macht.

   Wenn später ein echter Versand gewünscht ist: ENDPOINT setzen (z. B.
   Formspree oder ein eigener Mail-Handler) und in `submit()` den fetch-Block
   aktivieren. Vorher Auftragsverarbeitungsvertrag prüfen.
   ========================================================================== */
const ENDPOINT = null;

const CONCERNS = [
  'Vorgespräch zur Maßnahme',
  'Frage zur Förderung',
  'Anfrage vom Jobcenter',
  'Anfrage als Arbeitgeber',
  'Sonstiges',
];

const empty = {
  name: '',
  email: '',
  phone: '',
  concern: CONCERNS[0],
  message: '',
  consent: false,
};

export default function Kontakt() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (values.name.trim().length < 2) next.name = 'Fehler: Bitte Ihren Namen eintragen.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = 'Fehler: Bitte eine E-Mail-Adresse in der Form name@beispiel.de eintragen.';
    if (values.message.trim().length < 10)
      next.message = 'Fehler: Bitte beschreiben Sie Ihr Anliegen in mindestens einem Satz.';
    if (!values.consent)
      next.consent = 'Fehler: Ohne diese Bestätigung dürfen wir Ihre Anfrage nicht bearbeiten.';
    return next;
  };

  const submit = async () => {
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.querySelector('.has-error input, .has-error textarea');
      first?.focus();
      return;
    }

    // Optionaler echter Versand – erst aktivieren, wenn ein Endpunkt steht.
    if (ENDPOINT) {
      try {
        await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        setSent(true);
        return;
      } catch {
        // Fällt bewusst auf den Mailentwurf zurück.
      }
    }

    const body = [
      `Anliegen: ${values.concern}`,
      `Name: ${values.name}`,
      `E-Mail: ${values.email}`,
      values.phone ? `Telefon: ${values.phone}` : null,
      '',
      values.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Anfrage: ${values.concern}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <Seo
        title="Kontakt"
        description={`Kontakt zur ${site.academy}: Vorgespräch vereinbaren, Unterlagen für Jobcenter und Agentur für Arbeit anfordern.`}
      />

      <PageShell
        eyebrow="Kontakt"
        meta={[
          { label: 'Telefon', value: site.contact.phone },
          { label: 'E-Mail', value: site.contact.email },
          { label: 'Erreichbar', value: site.contact.hours },
          { label: 'Anschrift', value: fullAddress },
          { label: 'Antwortzeit', value: 'Werktags innerhalb von 24 Stunden' },
        ]}
      >
        <div>
          <h1>Sprechen wir zuerst, entscheiden Sie danach.</h1>
          <p className="u-lead" style={{ marginTop: 'var(--s-5)' }}>
            Das Vorgespräch ist kostenfrei und verpflichtet zu nichts. Wir klären Ausgangslage,
            Sprachniveau, Technik und Ziel – und sagen Ihnen offen, wenn ein anderer Schritt für Sie
            der sinnvollere ist.
          </p>
        </div>

        <section>
          <h2 style={{ marginBottom: 'var(--s-5)' }}>Direkt erreichbar</h2>
          <div className="channels">
            <div>
              <div className="channel__label">Telefon</div>
              <div className="channel__value">
                <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
              </div>
              <p className="field__hint" style={{ marginTop: 'var(--s-2)' }}>
                {site.contact.hours}
              </p>
            </div>
            <div>
              <div className="channel__label">E-Mail</div>
              <div className="channel__value">
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </div>
            </div>
            <div>
              <div className="channel__label">Anschrift</div>
              <div className="channel__value">{site.address.street}</div>
              <p className="field__hint" style={{ marginTop: 'var(--s-2)' }}>
                {site.address.zip} {site.address.city} · Besuche bitte vorher vereinbaren, wir sind ein
                kleines Team.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: 'var(--s-3)' }}>Anfrage schreiben</h2>
          <p className="u-prose" style={{ marginBottom: 'var(--s-6)' }}>
            Wir speichern über diese Seite keine Daten. Das Formular öffnet einen fertig ausgefüllten
            Entwurf in Ihrem Mailprogramm – abgeschickt wird er erst, wenn Sie das selbst tun.
          </p>

          {sent ? (
            <div className="notice" role="status">
              <p className="notice__title">Entwurf geöffnet</p>
              <p>
                Ihr Mailprogramm sollte jetzt einen vorbereiteten Entwurf an {site.contact.email}
                anzeigen. Öffnet sich nichts, schreiben Sie uns direkt an diese Adresse oder rufen Sie
                unter {site.contact.phone} an.
              </p>
            </div>
          ) : (
            <div className="form">
              <div className="form__pair">
                <div className={`field${errors.name ? ' has-error' : ''}`}>
                  <label className="field__label" htmlFor="f-name">
                    Name
                  </label>
                  <input
                    id="f-name"
                    className="field__input"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update('name')}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <span className="field__error">{errors.name}</span>}
                </div>

                <div className={`field${errors.email ? ' has-error' : ''}`}>
                  <label className="field__label" htmlFor="f-email">
                    E-Mail
                  </label>
                  <input
                    id="f-email"
                    className="field__input"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update('email')}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className="field__error">{errors.email}</span>}
                </div>
              </div>

              <div className="form__pair">
                <div className="field">
                  <label className="field__label" htmlFor="f-phone">
                    Telefon (freiwillig)
                  </label>
                  <input
                    id="f-phone"
                    className="field__input"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={update('phone')}
                  />
                  <span className="field__hint">Meist ist ein Rückruf schneller als E-Mail.</span>
                </div>

                <div className="field">
                  <label className="field__label" htmlFor="f-concern">
                    Anliegen
                  </label>
                  <select
                    id="f-concern"
                    className="field__select"
                    value={values.concern}
                    onChange={update('concern')}
                  >
                    {CONCERNS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={`field${errors.message ? ' has-error' : ''}`}>
                <label className="field__label" htmlFor="f-message">
                  Ihre Nachricht
                </label>
                <textarea
                  id="f-message"
                  className="field__area"
                  value={values.message}
                  onChange={update('message')}
                  aria-invalid={Boolean(errors.message)}
                />
                <span className="field__hint">
                  Hilfreich für uns: Wohnort, ob Sie bereits mit dem Jobcenter gesprochen haben und ab
                  wann Sie starten könnten.
                </span>
                {errors.message && <span className="field__error">{errors.message}</span>}
              </div>

              <div className={`field field--check${errors.consent ? ' has-error' : ''}`}>
                <input
                  id="f-consent"
                  type="checkbox"
                  checked={values.consent}
                  onChange={update('consent')}
                  aria-invalid={Boolean(errors.consent)}
                />
                <label htmlFor="f-consent">
                  Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
                  verwendet werden. Sie werden nicht an Dritte weitergegeben.
                </label>
                {errors.consent && (
                  <span className="field__error" style={{ gridColumn: '1 / -1' }}>
                    {errors.consent}
                  </span>
                )}
              </div>

              <div className="btn-row">
                <button type="button" className="btn btn--solid" onClick={submit}>
                  E-Mail-Entwurf öffnen
                </button>
                <a href={`tel:${site.contact.phoneHref}`} className="btn btn--line">
                  Lieber anrufen
                </a>
              </div>
            </div>
          )}
        </section>

        <div className="notice notice--plain">
          <p className="notice__title">Für Jobcenter und Agenturen für Arbeit</p>
          <p>
            Wir senden Ihnen Curriculum, Kalkulation, Maßnahmenbeschreibung und den aktuellen Stand der
            Trägerzulassung als Sammelmappe zu. Eine kurze Mail mit Ihrer Dienststelle genügt, in der
            Regel antworten wir am selben Werktag.
          </p>
        </div>
      </PageShell>
    </>
  );
}
