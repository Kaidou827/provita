import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageShell from '../components/PageShell.jsx'
import ModuleLedger from '../components/ModuleLedger.jsx'
import { offers, leadOffer } from '../data/offers.js'
import { totalUe, modules } from '../data/curriculum.js'
import { site } from '../data/site.js'
import { paths } from '../routes.js'

export default function Massnahmen() {
  const extras = offers.filter((o) => !o.lead)

  return (
    <>
      <Seo
        title="Maßnahmen"
        description={`Alle Maßnahmen der ${site.academy}: Vorbereitung auf die IHK-Sachkundeprüfung § 34a GewO mit ${totalUe} Unterrichtseinheiten sowie vier integrierte Zusatzqualifikationen.`}
      />

      <PageShell
        eyebrow="Maßnahmen"
        meta={[
          { label: 'Fachbereiche', value: 'AZAV Fachbereich 1 und 4' },
          { label: 'Umfang', value: `${totalUe} UE in ${modules.length} Modulen` },
          { label: 'Lernform', value: 'Theorie online, Praxis in Präsenz' },
          { label: 'Ort', value: `${site.address.city} und Partnerstandorte` },
          { label: 'Zulassung', value: site.azav.statusShort },
        ]}
      >
        <div>
          <h1>Eine Maßnahme, fünf Nachweise.</h1>
          <p className="u-lead" style={{ marginTop: 'var(--s-5)' }}>
            Wir bieten bewusst kein breites Kursprogramm an. Wir machen eine Sache, und die
            vollständig: die Qualifizierung für den Einstieg in das Bewachungsgewerbe. Alles
            Weitere auf dieser Seite ist Teil derselben Maßnahme.
          </p>
        </div>

        <div className="notice">
          <p className="notice__title">Zur Wortwahl</p>
          <p>
            Streng genommen bieten wir keine „Ausbildung“ an, sondern eine Qualifizierungsmaßnahme
            mit Prüfungsvorbereitung. Eine Ausbildung im Sinne des Berufsbildungsgesetzes – etwa
            zur Fachkraft für Schutz und Sicherheit – ist etwas anderes. Genau so ist es auch in
            unserem Curriculum formuliert.
          </p>
        </div>

        <div>
          <h2 style={{ marginBottom: 'var(--s-5)' }}>Hauptmaßnahme</h2>
          <div className="cards">
            <Link to={paths.offer(leadOffer.slug)} className="card card--lead">
              <span className="card__kicker">{leadOffer.basis}</span>
              <span className="card__title">{leadOffer.title}</span>
              <span className="card__text">{leadOffer.summary}</span>
              <span className="card__spacer" />
              <span className="card__foot">
                <span>{leadOffer.scope}</span>
                <span className="card__more">Ansehen →</span>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <h2 style={{ marginBottom: 'var(--s-3)' }}>Enthaltene Zusatzqualifikationen</h2>
          <p className="u-prose" style={{ marginBottom: 'var(--s-5)' }}>
            Diese vier Qualifikationen sind Bestandteil der Hauptmaßnahme und kosten nichts extra.
            Sie sind hier einzeln aufgeführt, weil Arbeitgeber sie einzeln abfragen.
          </p>
          <div className="cards">
            {extras.map((offer) => (
              <Link key={offer.slug} to={paths.offer(offer.slug)} className="card">
                <span className="card__kicker">{offer.basis}</span>
                <span className="card__title">{offer.title}</span>
                <span className="card__text">{offer.summary}</span>
                <span className="card__spacer" />
                <span className="card__foot">
                  <span>{offer.scope}</span>
                  <span className="card__more">Ansehen →</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ marginBottom: 'var(--s-5)' }}>Curriculum im Überblick</h2>
          <ModuleLedger />
        </div>

        <div className="btn-row">
          <Link to={paths.contact} className="btn btn--solid">
            Vorgespräch anfragen
          </Link>
          <Link to={paths.about} className="btn btn--line">
            Wer wir sind
          </Link>
        </div>
      </PageShell>
    </>
  )
}
