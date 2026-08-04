import Seo from '../components/Seo.jsx'
import PageShell from '../components/PageShell.jsx'
import { site } from '../data/site.js'

/* ==========================================================================
   ACHTUNG: Gerüst, keine Rechtsberatung.
   Vor dem Livegang bitte von einer Anwältin oder einem Anwalt prüfen lassen.
   Offene Punkte sind unten mit "bitte ergänzen" markiert.
   ========================================================================== */
export default function Impressum() {
  return (
    <>
      <Seo title="Impressum" description="Impressum und Anbieterkennzeichnung der ProVita Akademie." />
      <PageShell eyebrow="Impressum" meta={[{ label: 'Grundlage', value: '§ 5 DDG' }]}>
        <div>
          <h1>Impressum</h1>
          <p className="u-lead" style={{ marginTop: 'var(--s-5)' }}>
            Angaben gemäß § 5 Digitale-Dienste-Gesetz.
          </p>
        </div>

        <dl className="specs">
          <div className="specs__row">
            <dt>Anbieter</dt>
            <dd>
              {site.legal.entity}
              <br />
              {site.academy}
            </dd>
          </div>
          <div className="specs__row">
            <dt>Anschrift</dt>
            <dd>
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              {site.address.country}
            </dd>
          </div>
          <div className="specs__row">
            <dt>Vertreten durch</dt>
            <dd>{site.legal.managingDirector}, Geschäftsführung</dd>
          </div>
          <div className="specs__row">
            <dt>Kontakt</dt>
            <dd>
              Telefon: {site.contact.phone}
              <br />
              E-Mail: {site.contact.email}
            </dd>
          </div>
          <div className="specs__row">
            <dt>Registereintrag</dt>
            <dd>{site.legal.register} — bitte ergänzen</dd>
          </div>
          <div className="specs__row">
            <dt>Umsatzsteuer-Identifikationsnummer</dt>
            <dd>{site.legal.vatId} — bitte ergänzen</dd>
          </div>
          <div className="specs__row">
            <dt>Inhaltlich verantwortlich</dt>
            <dd>{site.legal.responsibleForContent}, Anschrift wie oben</dd>
          </div>
          <div className="specs__row">
            <dt>Berufsaufsicht / Zulassung</dt>
            <dd>{site.azav.statusShort}. Zuständige fachkundige Stelle: bitte ergänzen.</dd>
          </div>
          <div className="specs__row">
            <dt>Streitschlichtung</dt>
            <dd>
              Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </dd>
          </div>
        </dl>

        <div className="notice">
          <p className="notice__title">Hinweis an das Projektteam</p>
          <p>
            Diese Seite ist ein Gerüst und keine Rechtsberatung. Vor dem Livegang müssen
            Registergericht, HRB-Nummer und USt-IdNr. eingetragen und die Angaben zur Trägergesellschaft
            mit der AZAV-Zulassung abgeglichen werden. Im Leitbild wird als Träger die{' '}
            {site.legal.formerEntity} genannt – hier steht die {site.legal.entity}. Beide Angaben
            müssen zusammenpassen. Diesen Block anschließend löschen.
          </p>
        </div>
      </PageShell>
    </>
  )
}
