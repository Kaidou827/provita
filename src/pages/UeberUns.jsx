import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageShell from '../components/PageShell.jsx';
import { site, fullAddress } from '../data/site.js';
import { totalUe } from '../data/curriculum.js';
import { paths } from '../routes.js';

export default function UeberUns() {
  return (
    <>
      <Seo
        title="Über uns"
        description={`Leitbild, Werte und Qualitätsmanagement der ${site.academy}: wer wir sind, für wen wir arbeiten und wie wir Qualität sichern.`}
      />

      <PageShell
        eyebrow="Über uns"
        meta={[
          { label: 'Träger', value: site.legal.entity },
          { label: 'Geschäftsführung', value: site.legal.managingDirector },
          { label: 'Sitz', value: fullAddress },
          { label: 'Fachbereiche', value: 'AZAV Fachbereich 1 und 4' },
          { label: 'Zulassung', value: site.azav.statusShort },
        ]}
      >
        <div>
          <h1>Eine Akademie für Menschen, denen nicht der Wille fehlt, sondern der Weg.</h1>
          <p className="u-lead" style={{ marginTop: 'var(--s-5)' }}>
            Die ProVita Akademie ist eine Bildungseinrichtung mit einem einzigen Schwerpunkt: die
            Qualifizierung von Sicherheitsfachkräften nach § 34a GewO. Unsere Teilnehmerinnen und
            Teilnehmer sind Menschen in beruflicher Neuorientierung – nach einer Kündigung, einer
            betrieblichen Umstrukturierung oder einer Veränderung in den persönlichen Lebensumständen.
          </p>
        </div>

        <section>
          <h2 style={{ marginBottom: 'var(--s-4)' }}>Warum wir uns auf eine Sache beschränken</h2>
          <p className="u-prose">
            Es gibt Bildungsträger mit vierzig Kursen im Katalog. Wir haben einen. Das ist eine
            Entscheidung, keine Einschränkung: Wer die Sachkundeprüfung nach § 34a GewO wirklich
            beherrscht, kennt jede Frage, die die IHK in den letzten Jahren gestellt hat, weiß, an
            welchen zwei Modulen die meisten Menschen scheitern, und kann Modul 12 – vierzig
            Unterrichtseinheiten reine Prüfungsvorbereitung – genau darauf ausrichten.
          </p>
          <p className="u-prose">
            Aus derselben Haltung stammt der Aufbau der Maßnahme. Wir hätten es bei den {totalUe}{' '}
            Unterrichtseinheiten Sachkunde belassen können. Stattdessen sind Waffensachkunde,
            Brandschutzhilfe, Evakuierungshilfe und Erste Hilfe fest integriert – weil das die
            Nachweise sind, die in Stellenanzeigen zusätzlich verlangt werden. Wer einen Kurs abschließt,
            soll damit auch eingestellt werden.
          </p>
        </section>

        <section>
          <h2 style={{ marginBottom: 'var(--s-4)' }}>Unser Leitbild</h2>
          <p className="u-prose">
            Im Mittelpunkt aller Tätigkeiten steht die Teilnehmerin und der Teilnehmer. Ein
            partnerschaftlicher Umgang miteinander ist für uns die Grundlage: Wir behandeln jede und
            jeden mit Respekt und Wertschätzung, unabhängig davon, wie der Weg in die Arbeitslosigkeit
            verlief.
          </p>
          <p className="u-prose">
            Unsere Mitarbeiterinnen und Mitarbeiter sind das Fundament dieser Arbeit. Wir fördern sie
            durch regelmäßige Weiterbildung, schaffen ein Arbeitsumfeld aus gegenseitigem Vertrauen und
            fordern gleichzeitig hohe fachliche und menschliche Standards ein. Lernbereitschaft, aktive
            Mitgestaltung und offener Austausch sorgen für einen permanenten Verbesserungsprozess.
          </p>
          <p className="u-prose">
            Gegenüber Jobcentern und Agenturen für Arbeit verstehen wir uns als verlässlicher Partner.
            Verlässlich heißt konkret: erreichbar, dokumentiert und ehrlich – auch dann, wenn eine
            Teilnahme aus unserer Sicht nicht der richtige nächste Schritt ist.
          </p>
          <p className="btn-row" style={{ marginTop: 'var(--s-5)' }}>
            <a
              className="btn btn--line"
              href="/Leitbild_ProVita_Akademie.docx"
              download="Leitbild_ProVita_Akademie.docx"
            >
              Leitbild herunterladen (DOCX)
            </a>
          </p>
        </section>

        <section>
          <h2 style={{ marginBottom: 'var(--s-4)' }}>Eingliederung in den Arbeitsmarkt</h2>
          <p className="u-prose">
            Ein Zertifikat ist kein Arbeitsvertrag. Wir sehen es deshalb als unsere Verpflichtung an,
            unsere Absolventinnen und Absolventen über den Abschluss hinaus zu begleiten: bei den
            Bewerbungsunterlagen, im Kontakt zu Sicherheitsdienstleistern in der Region und beim
            Übergang in die neue Beschäftigung.
          </p>
          <p className="u-prose">
            Wieder Teil des Berufslebens zu sein und die eigene Lebensqualität dauerhaft zu verbessern –
            das ist das Ziel, das wir gemeinsam verfolgen.
          </p>
        </section>

        <section>
          <h2 style={{ marginBottom: 'var(--s-5)' }}>Die beiden AZAV-Fachbereiche</h2>
          <dl className="specs">
            {site.azav.fields.map((field) => (
              <div className="specs__row" key={field.code}>
                <dt>{field.code}</dt>
                <dd>
                  <strong>{field.title}</strong>
                  <br />
                  {field.text}
                </dd>
              </div>
            ))}
          </dl>
          <div className="notice" style={{ marginTop: 'var(--s-6)' }}>
            <p className="notice__title">AZAV-Zulassung</p>
            <p>{site.azav.statusLong}</p>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: 'var(--s-4)' }}>Qualitätssicherung</h2>
          <p className="u-prose" style={{ marginBottom: 'var(--s-6)' }}>
            Überwachung, Einschätzung und Weiterentwicklung des Leitbildes nimmt die Geschäftsführung
            jährlich in der Managementbewertung vor. Die Qualitätsmanagement-Beauftragten unterstützen
            sie bei der Pflege und kontinuierlichen Weiterentwicklung des Qualitätsmanagementsystems.
          </p>

          <div className="people">
            {site.qm.map((person) => (
              <div className="people__row" key={person.name}>
                <div>
                  <div className="people__name">{person.name}</div>
                  <div className="people__role">{person.role}</div>
                </div>
                <p className="people__text">{person.text}</p>
              </div>
            ))}
          </div>
          <p className="ledger__legend">{site.documentStatus}</p>
        </section>

        <section>
          <h2 style={{ marginBottom: 'var(--s-4)' }}>Woran wir noch arbeiten</h2>
          <p className="u-prose">
            Wir sind eine junge Akademie. Manches, was etablierte Träger vorzeigen können, können wir noch
            nicht: keine Kohortenstatistik über mehrere Jahre, keine Vermittlungsquote, keine
            Teilnehmerstimmen aus zehn Jahrgängen. Wir werden diese Zahlen nicht erfinden und stellen keine
            Bewertungen auf diese Seite, die es nicht gibt.
          </p>
          <p className="u-prose">
            Was wir jetzt schon vorlegen können, steht offen auf dieser Website: das vollständige
            Curriculum mit allen Modulen und Unterrichtseinheiten, die Rechtsgrundlage jeder einzelnen
            Qualifikation, die Namen der Verantwortlichen und unsere AZAV-Zulassung.
            Fragen Sie uns alles, was darüber hinausgeht – wir antworten schriftlich.
          </p>
        </section>

        <div className="btn-row">
          <Link to={paths.contact} className="btn btn--solid">
            Gespräch vereinbaren
          </Link>
          <Link to={paths.offers} className="btn btn--line">
            Maßnahmen ansehen
          </Link>
        </div>
      </PageShell>
    </>
  );
}
