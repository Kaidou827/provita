import Seo from '../components/Seo.jsx'
import PageShell from '../components/PageShell.jsx'
import { site } from '../data/site.js'

/* ==========================================================================
   ACHTUNG: Gerüst, keine Rechtsberatung. Vor dem Livegang prüfen lassen.
   Der Text beschreibt bewusst den tatsächlichen Stand dieser Seite:
   keine Datenbank, kein Tracking, kein Cookie-Banner nötig.
   ========================================================================== */
export default function Datenschutz() {
  return (
    <>
      <Seo title="Datenschutz" description="Datenschutzerklärung der ProVita Akademie." />
      <PageShell eyebrow="Datenschutz" meta={[{ label: 'Grundlage', value: 'DSGVO' }]}>
        <div>
          <h1>Datenschutz</h1>
          <p className="u-lead" style={{ marginTop: 'var(--s-5)' }}>
            Diese Website ist absichtlich schlicht gebaut: keine Datenbank, keine Analyse-Werkzeuge,
            keine Werbe-Cookies. Deshalb ist auch nur wenig zu erklären.
          </p>
        </div>

        <section>
          <h2 style={{ marginBottom: 'var(--s-4)' }}>Verantwortliche Stelle</h2>
          <p className="u-prose">
            {site.legal.entity}, {site.address.street}, {site.address.zip} {site.address.city}.
            E-Mail: {site.contact.email}, Telefon: {site.contact.phone}.
          </p>
        </section>

        <section>
          <h2 style={{ marginBottom: 'var(--s-4)' }}>Aufruf dieser Website</h2>
          <p className="u-prose">
            Beim Aufruf verarbeitet unser Hosting-Anbieter technisch notwendige Zugriffsdaten
            (IP-Adresse, Zeitpunkt, aufgerufene Datei, übertragene Datenmenge, Browsertyp). Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. f DSGVO, das berechtigte Interesse am sicheren Betrieb. Diese Daten
            werden nicht mit anderen Quellen zusammengeführt. Namen und Aufbewahrungsfrist des
            Hosting-Anbieters bitte hier ergänzen; ein Auftragsverarbeitungsvertrag ist erforderlich.
          </p>
        </section>

        <section>
          <h2 style={{ marginBottom: 'var(--s-4)' }}>Kontaktformular</h2>
          <p className="u-prose">
            Das Formular auf der Kontaktseite überträgt keine Daten an einen Server. Es setzt Ihre
            Eingaben ausschließlich in einen E-Mail-Entwurf in Ihrem eigenen Mailprogramm um. Erst wenn
            Sie diesen Entwurf selbst absenden, erreichen die Angaben uns – dann als gewöhnliche E-Mail.
          </p>
          <p className="u-prose">
            Ihre Anfrage verarbeiten wir zur Beantwortung auf Grundlage von Art. 6 Abs. 1 lit. b bzw.
            lit. f DSGVO und löschen sie, sobald sie erledigt ist und keine gesetzlichen
            Aufbewahrungsfristen entgegenstehen.
          </p>
        </section>

        <section>
          <h2 style={{ marginBottom: 'var(--s-4)' }}>Schriftarten</h2>
          <p className="u-prose">
            Diese Website lädt die Schrift „Google Sans“ über die Google-Fonts-API. Dabei wird Ihre
            IP-Adresse an Google übermittelt. Wenn das vermieden werden soll, lässt sich die Schrift
            lokal einbinden – der Hinweis dazu steht im README des Projekts.
          </p>
        </section>

        <section>
          <h2 style={{ marginBottom: 'var(--s-4)' }}>Ihre Rechte</h2>
          <p className="u-prose">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch sowie das Recht auf Beschwerde bei einer
            Aufsichtsbehörde. Zuständig ist für uns die Landesbeauftragte für Datenschutz und
            Informationsfreiheit Nordrhein-Westfalen.
          </p>
        </section>

        <div className="notice">
          <p className="notice__title">Hinweis an das Projektteam</p>
          <p>
            Gerüst, keine Rechtsberatung. Vor dem Livegang ergänzen: Hosting-Anbieter samt
            Auftragsverarbeitungsvertrag, Speicherfristen, gegebenenfalls Datenschutzbeauftragte. Bei
            Trägerzulassung nach AZAV kommen zusätzlich Anforderungen aus der Zusammenarbeit mit
            Jobcentern hinzu. Diesen Block anschließend löschen.
          </p>
        </div>
      </PageShell>
    </>
  )
}
