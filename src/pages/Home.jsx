import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import FactStrip from '../components/FactStrip.jsx';
import ModuleLedger from '../components/ModuleLedger.jsx';
import { facts, totalUeLabel, practicalPhase } from '../data/curriculum.js';
import { offers, leadOffer } from '../data/offers.js';
import { site } from '../data/site.js';
import { paths } from '../routes.js';

export default function Home() {
  const extras = offers.filter((o) => !o.lead);

  return (
    <>
      <Seo
        description={`${site.academy}: Fachkraft für Schutz und Sicherheit – Teilqualifikation 1 „Personen- und Objektschutz“ mit ${totalUeLabel} Unterrichtseinheiten, IHK-Sachkundeprüfung nach § 34a GewO und ${practicalPhase.hours} Stunden betrieblicher Lernphase. Theorie live online, Praxisbausteine in Präsenz.`}
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
          <span className="u-label">Berufliche Weiterbildung · Teilqualifikation · Ratingen</span>
        </p>

        <h1 className="hero__title">
          Fachkraft für Schutz und Sicherheit – <em>Teilqualifikation&nbsp;1</em> „Personen- und
          Objektschutz“.
        </h1>

        <p className="u-label" style={{ marginTop: 'var(--s-4)' }}>
          inkl. Vorbereitung auf die IHK-Sachkundeprüfung nach § 34a GewO
        </p>

        <p className="hero__lead">
          {totalUeLabel} Unterrichtseinheiten plus {practicalPhase.hours} Stunden betriebliche
          Lernphase – Teilqualifikation nach dem Ausbildungsrahmenplan Fachkraft für Schutz und
          Sicherheit, mit Sachkundeprüfung § 34a, Brandschutz-/Evakuierungshelfer und Erster Hilfe.
          Theorie live online, Praxisbausteine in Präsenz, Praktikum im Betrieb.
        </p>

        <div className="btn-row hero__actions">
          <Link to={paths.contact} className="btn btn--solid">
            Kostenfreies Vorgespräch anfragen
          </Link>
          <Link to={paths.offer(leadOffer.slug)} className="btn btn--line">
            Maßnahme im Detail ansehen
          </Link>
        </div>
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
              Andere Anbieter legen den Stundenplan hinter ein Anmeldeformular. Hier stehen alle vier
              Blöcke mit jedem Baustein und seinem Umfang – damit Sie und Ihre Vermittlungsfachkraft
              vor der Entscheidung wissen, was in den {totalUeLabel} Unterrichtseinheiten tatsächlich
              passiert.
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
              Das Hauptziel ist die Teilqualifikation mit Kompetenzfeststellung, dazu die
              Sachkundeprüfung nach § 34a GewO. Die Zusatzqualifikationen sind im Kurs enthalten und
              kosten nichts extra – es sind genau jene Nachweise, die Sicherheitsdienstleister in
              Stellenanzeigen zusätzlich verlangen.
            </p>
          </div>

          <ol className="steps" style={{ marginBottom: 'var(--s-8)' }}>
            {leadOffer.results.map((result, i) => (
              <li key={result.title}>
                <span className="steps__no u-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="steps__body">
                  <h4>{result.title}</h4>
                  <p>{result.text}</p>
                </div>
              </li>
            ))}
          </ol>

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
              <h3>Praxis: Präsenz und Betrieb</h3>
              <p>
                Einen Feuerlöscher bedient man nicht per Webcam, und eine Herzdruckmassage muss man in den
                Händen gehabt haben. Die Bausteine Brandschutz (Löschübung) und Erste Hilfe finden deshalb in
                Präsenz bei unseren Partnereinrichtungen statt; alle übrigen Praxisanteile laufen live online
                in Kleingruppen.
              </p>
              <p>
                Die betriebliche Lernphase absolvieren die Teilnehmenden in Sicherheitsunternehmen der Region –
                {' '}{practicalPhase.hours} Stunden, etwa {practicalPhase.weeks} Wochen. Alle Präsenztermine
                und der Zeitraum des Praktikums stehen zu Kursbeginn fest, damit Sie Fahrt und Betreuung planen
                können.
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
                Gibt es nicht. Die Sachkundeprüfung nimmt die IHK ab, nicht wir. Block A ist vollständig auf
                diese Prüfung ausgerichtet, und bei Zwischenstandsgesprächen sagen wir früh, wenn es knapp
                wird.
              </dd>
            </div>
            <div className="specs__row">
              <dt>Teilqualifikation, kein Berufsabschluss</dt>
              <dd>
                Die Maßnahme führt zur Teilqualifikation 1 nach dem Ausbildungsrahmenplan Fachkraft für Schutz
                und Sicherheit – nicht zum Berufsabschluss. Der volle Abschluss im Sinne des
                Berufsbildungsgesetzes setzt weitere Teilqualifikationen und die Abschlussprüfung vor der IHK
                voraus. Dieser Weg bleibt offen, ist mit dieser Maßnahme aber nicht zurückgelegt.
              </dd>
            </div>
            <div className="specs__row">
              <dt>Waffen</dt>
              <dd>
                Nicht Teil dieser Maßnahme. Eine Waffensachkunde nach § 7 WaffG bieten wir hier nicht an und
                stellen dafür auch keinen Nachweis aus.
              </dd>
            </div>
            <div className="specs__row">
              <dt>AZAV-Zulassung und Förderung</dt>
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
