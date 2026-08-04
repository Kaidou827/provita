import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageShell from '../components/PageShell.jsx'
import ModuleLedger from '../components/ModuleLedger.jsx'
import NotFound from './NotFound.jsx'
import { getOffer, offers } from '../data/offers.js'
import { site } from '../data/site.js'
import { paths } from '../routes.js'

export default function OfferDetail() {
  const { slug } = useParams()
  const offer = getOffer(slug)

  if (!offer) return <NotFound />

  const siblings = offers.filter((o) => o.slug !== offer.slug)

  return (
    <>
      <Seo title={offer.short} description={offer.summary} />

      <PageShell
        eyebrow={offer.kicker}
        meta={[
          { label: 'Rechtsgrundlage', value: offer.basis },
          { label: 'Umfang', value: offer.scope },
          { label: 'Format', value: offer.format },
          { label: 'Abschluss', value: offer.result },
          { label: 'Zulassung', value: site.azav.statusShort },
        ]}
      >
        <div>
          <h1>{offer.title}</h1>
          {offer.intro.map((para, i) => (
            <p key={i} className={i === 0 ? 'u-lead' : 'u-prose'} style={{ marginTop: 'var(--s-5)' }}>
              {para}
            </p>
          ))}
        </div>

        {offer.sections?.map((section) => (
          <section key={section.heading}>
            <h2 style={{ marginBottom: 'var(--s-4)' }}>{section.heading}</h2>
            {section.text?.map((para, i) => (
              <p key={i} className="u-prose">
                {para}
              </p>
            ))}
            {section.list && (
              <ul className="u-prose">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {offer.steps && (
          <section>
            <h2 style={{ marginBottom: 'var(--s-5)' }}>Ablauf</h2>
            <ol className="steps">
              {offer.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="steps__no u-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="steps__body">
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {offer.lead && (
          <section>
            <h2 style={{ marginBottom: 'var(--s-5)' }}>Module und Unterrichtseinheiten</h2>
            <ModuleLedger />
          </section>
        )}

        <div className="notice notice--plain">
          <p className="notice__title">Kosten und Förderung</p>
          <p>
            Die Maßnahme ist auf eine Förderung über die Agentur für Arbeit oder das Jobcenter
            ausgelegt; die Prüfungsgebühr der IHK ist in der Kalkulation enthalten. Eine Förderung
            ist erst nach erteilter Trägerzulassung und Maßnahmenzertifizierung möglich. Die
            aktuelle Kalkulation und alle Unterlagen für Ihre Vermittlungsfachkraft senden wir auf
            Anfrage zu.
          </p>
        </div>

        <div className="btn-row">
          <Link to={paths.contact} className="btn btn--solid">
            Vorgespräch anfragen
          </Link>
          <Link to={paths.offers} className="btn btn--line">
            Alle Maßnahmen
          </Link>
        </div>

        <section>
          <h2 style={{ marginBottom: 'var(--s-5)' }}>Ebenfalls in dieser Maßnahme</h2>
          <div className="cards">
            {siblings.map((other) => (
              <Link key={other.slug} to={paths.offer(other.slug)} className="card">
                <span className="card__kicker">{other.basis}</span>
                <span className="card__title">{other.short}</span>
                <span className="card__text">{other.summary}</span>
                <span className="card__spacer" />
                <span className="card__foot">
                  <span>{other.scope}</span>
                  <span className="card__more">Ansehen →</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </PageShell>
    </>
  )
}
