import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageShell from '../components/PageShell.jsx'
import ModuleLedger from '../components/ModuleLedger.jsx'
import { offers, leadOffer } from '../data/offers.js'
import { totalUeLabel, blocks, practicalPhase } from '../data/curriculum.js'
import { site } from '../data/site.js'
import { paths } from '../routes.js'

export default function Massnahmen() {
  const extras = offers.filter((o) => !o.lead)

  return (
    <>
      <Seo
        title="Maßnahmen"
        description={`Alle Maßnahmen der ${site.academy}: Fachkraft für Schutz und Sicherheit – Teilqualifikation 1 „Personen- und Objektschutz“ mit ${totalUeLabel} Unterrichtseinheiten, IHK-Sachkundeprüfung § 34a GewO und ${practicalPhase.hours} Stunden betrieblicher Lernphase.`}
      />

      <PageShell
        eyebrow="Maßnahmen"
        meta={[
          { label: 'Fachbereiche', value: 'AZAV Fachbereich 1 und 4' },
          {
            label: 'Umfang',
            value: `${totalUeLabel} UE in ${blocks.length} Blöcken · ${practicalPhase.hours} Std. Betrieb`,
          },
          { label: 'Lernform', value: 'Theorie online, Praxisbausteine in Präsenz' },
          { label: 'Ort', value: `${site.address.city}, Partnerstandorte und Betrieb` },
          { label: 'Zulassung', value: site.azav.statusShort },
        ]}
      >
        <div>
          <h1>Eine Maßnahme, fünf Nachweise.</h1>
          <p className="u-lead" style={{ marginTop: 'var(--s-5)' }}>
            Wir bieten bewusst kein breites Kursprogramm an. Wir machen eine Sache, und die
            vollständig: die Teilqualifikation 1 „Personen- und Objektschutz“ mit der
            Sachkundeprüfung nach § 34a GewO. Alles Weitere auf dieser Seite ist Teil derselben
            Maßnahme.
          </p>
        </div>

        <div className="notice">
          <p className="notice__title">Teilqualifikation, kein Berufsabschluss</p>
          <p>
            Die Maßnahme folgt dem Ausbildungsrahmenplan des Ausbildungsberufs Fachkraft für Schutz
            und Sicherheit und schließt die erste von mehreren Teilqualifikationen ab. Ein
            Berufsabschluss im Sinne des Berufsbildungsgesetzes ist damit nicht erreicht – dafür
            braucht es weitere Teilqualifikationen und die Abschlussprüfung vor der IHK. Wir sagen
            das hier deutlich, weil der Unterschied gegenüber Arbeitgeber und Kostenträger zählt.
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
            Diese {extras.length} Qualifikationen sind Bestandteil der Hauptmaßnahme (Block C) und
            kosten nichts extra. Sie sind hier einzeln aufgeführt, weil Arbeitgeber sie einzeln
            abfragen.
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
