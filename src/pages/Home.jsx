import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import FactStrip from '../components/FactStrip.jsx';
import ModuleLedger from '../components/ModuleLedger.jsx';
import { facts, totalUe } from '../data/curriculum.js';
import { offers, leadOffer } from '../data/offers.js';
import { site } from '../data/site.js';
import { paths } from '../routes.js';

export default function Home() {
  const extras = offers.filter((o) => !o.lead);

  return (
    <>
      <Seo
        description={`${site.academy}: ${totalUe} Unterrichtseinheiten Vorbereitung auf die IHK-Sachkundeprüfung nach § 34a GewO mit vier integrierten Zusatzqualifikationen. Theorie live online, Praxis in Präsenz.`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: site.academy,
          legalName: site.legal.entity,
          email: site.contact.email,
          telephone: site.contact.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: site.address.street,
            postalCode: site.address.zip,
            addressLocality: site.address.city,
            addressCountry: 'DE',
          },
        }}
      />

      {/* ---- Hero: die These, nicht das Stockfoto ---------------------- */}
      <section className="wrap hero">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-dot" aria-hidden="true" />
          <span className="u-label">Bewachungsgewerbe · Qualifizierung · Ratingen</span>
        </p>

        <h1 className="hero__title">
          Vorbereitung auf die IHK-Sachkundeprüfung nach <em>§&nbsp;34a</em> GewO.
        </h1>

        <p className="hero__lead">
          {totalUe} Unterrichtseinheiten in zwölf Modulen – mit Waffensachkunde, Brandschutz,
          Evakuierungshilfe und Erster Hilfe im selben Kurs. Theorie live online, Praxis vor Ort.
          Anmeldung zur Prüfung bei der IHK übernehmen wir.
        </p>

        <div className="btn-row hero__actions">
          <Link to={paths.contact} className="btn btn--solid">
            Kostenfreies Vorgespräch anfragen
          </Link>
          <Link to={paths.offer(leadOffer.slug)} className="btn btn--line">
            Maßnahme im Detail ansehen
          </Link>
        </div>

        <p className="hero__status">
          <strong>Stand der Zulassung:</strong> {site.azav.statusShort}. Eine Förderung über
          Bildungsgutschein oder Aktivierungs- und Vermittlungsgutschein ist erst nach erteilter
          Zulassung möglich. Wir sagen Ihnen im Vorgespräch offen, wo wir stehen.
        </p>
      </section>

      <section className="wrap">
        <FactStrip items={facts} />
      </section>

      {/* ---- Signatur: das UE-Register --------------------------------- */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-head__eyebrow">Curriculum</span>
            <h2>Das gesamte Curriculum, offen einsehbar.</h2>
            <p>
              Andere Anbieter legen den Stundenplan hinter ein Anmeldeformular. Hier stehen alle zwölf
              Module mit ihrem Umfang – damit Sie und Ihre Vermittlungsfachkraft vor der Entscheidung
              wissen, was in den {totalUe} Unterrichtseinheiten tatsächlich passiert.
            </p>
          </div>
          <ModuleLedger />
        </div>
      </section>

      {/* ---- Was am Ende in der Hand liegt ---------------------------- */}
      <section className="band band--fill band--ruled">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-head__eyebrow">Abschlüsse</span>
            <h2>Fünf Nachweise aus einer Maßnahme.</h2>
            <p>
              Das Hauptziel ist die Sachkundeprüfung. Die vier Zusatzqualifikationen sind im Kurs
              enthalten und kosten nichts extra – es sind genau jene Nachweise, die Sicherheitsdienstleister
              in Stellenanzeigen zusätzlich verlangen.
            </p>
          </div>

          <div className="cards">
            <Link to={paths.offer(leadOffer.slug)} className="card card--lead">
              <span className="card__kicker">{leadOffer.kicker}</span>
              <span className="card__title">{leadOffer.title}</span>
              <span className="card__text">{leadOffer.summary}</span>
              <span className="card__spacer" />
              <span className="card__foot">
                <span>{leadOffer.scope}</span>
                <span className="card__more">Ansehen →</span>
              </span>
            </Link>

            {extras.map((offer) => (
              <Link key={offer.slug} to={paths.offer(offer.slug)} className="card">
                <span className="card__kicker">{offer.kicker}</span>
                <span className="card__title">{offer.title}</span>
                <span className="card__text">{offer.summary}</span>
                <span className="card__spacer" />
                <span className="card__foot">
                  <span>{offer.basis}</span>
                  <span className="card__more">Ansehen →</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Format ---------------------------------------------------- */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-head__eyebrow">Lernform</span>
            <h2>Theorie von zu Hause. Praxis dort, wo sie hingehört.</h2>
          </div>

          <div className="duo">
            <div>
              <h3>Theorie: 100 % live online</h3>
              <p>
                Alle Rechts- und Theoriemodule finden live online statt – mit Dozentin oder Dozent im Raum,
                nicht als aufgezeichnetes Video. Kein Fahrtweg, kein Parkplatzsuchen, keine Betreuungslücke am
                Nachmittag.
              </p>
              <p>
                Sie brauchen Rechner oder Tablet mit Kamera und eine stabile Verbindung. Wenn das ein Problem
                ist, sagen Sie es vor Kursbeginn – das ist lösbar und war noch nie ein Ausschlussgrund.
              </p>
            </div>
            <div>
              <h3>Praxis: Präsenz bei unseren Partnern</h3>
              <p>
                Schießen lernt man nicht am Bildschirm, einen Feuerlöscher bedient man nicht per Webcam, und
                eine Herzdruckmassage muss man in den Händen gehabt haben. Die Praxisanteile der Module 6, 10
                und 11 laufen deshalb in Präsenz bei unseren Partnereinrichtungen.
              </p>
              <p>
                Die Waffensachkundeprüfung nach § 7 WaffG nimmt IPA Training ab. Alle Präsenztermine stehen zu
                Kursbeginn fest, damit Sie Fahrt und Betreuung planen können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Weg in die Maßnahme (echte Reihenfolge, daher numeriert) -- */}
      <section className="band band--fill band--ruled">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-head__eyebrow">Ablauf</span>
            <h2>Vom ersten Anruf bis zum ersten Arbeitstag.</h2>
          </div>
          <ol className="steps">
            {leadOffer.steps.map((step, i) => (
              <li key={step.title}>
                <span className="steps__no u-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="steps__body">
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Haltung statt Bewertungen -------------------------------- */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-head__eyebrow">Transparenz</span>
            <h2>Was wir nicht behaupten.</h2>
            <p>
              Auf dieser Seite finden Sie keine Teilnehmerstimmen und keine Sterne-Bewertungen. Wir sind eine
              junge Akademie – wir hätten sie erfinden müssen, und das kommt nicht in Frage. Stattdessen die
              Dinge, die überprüfbar sind:
            </p>
          </div>

          <dl className="specs">
            <div className="specs__row">
              <dt>Vermittlungsquote</dt>
              <dd>
                Wir nennen keine. Für belastbare Zahlen fehlt uns die Kohortenhistorie. Sobald geprüfte Zahlen
                vorliegen, stehen sie hier – mit Erhebungszeitraum und Fallzahl.
              </dd>
            </div>
            <div className="specs__row">
              <dt>Bestehensgarantie</dt>
              <dd>
                Gibt es nicht. Die IHK prüft, nicht wir. Modul 12 besteht ausschließlich aus Wiederholung und
                Prüfungsvorbereitung, und bei Zwischenstandsgesprächen sagen wir früh, wenn es knapp wird.
              </dd>
            </div>
            <div className="specs__row">
              <dt>Wortwahl</dt>
              <dd>
                Wir nennen das hier eine Qualifizierungsmaßnahme mit Prüfungsvorbereitung, keine „Ausbildung“.
                Eine Ausbildung im Sinne des Berufsbildungsgesetzes – etwa Fachkraft für Schutz und Sicherheit –
                ist etwas anderes und dauert Jahre.
              </dd>
            </div>
            <div className="specs__row">
              <dt>AZAV-Zulassung</dt>
              <dd>{site.azav.statusLong}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ---- Abschluss ----------------------------------------------- */}
      <section className="closer">
        <div className="wrap">
          <h2>Ein Gespräch verpflichtet zu nichts.</h2>
          <p>
            Zwanzig Minuten am Telefon reichen, um zu klären, ob diese Maßnahme zu Ihrer Situation passt – und
            was Sie Ihrer Vermittlungsfachkraft vorlegen müssen.
          </p>
          <div className="btn-row closer__actions">
            <Link to={paths.contact} className="btn btn--solid">
              Vorgespräch anfragen
            </Link>
            <a href={`tel:${site.contact.phoneHref}`} className="btn btn--line">
              {site.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
