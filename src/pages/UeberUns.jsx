import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageShell from '../components/PageShell.jsx';
import { site, fullAddress } from '../data/site.js';
import { leitbild } from '../data/leitbild.js';
import { totalUeLabel, practicalPhase } from '../data/curriculum.js';
import { paths } from '../routes.js';

export default function UeberUns() {
  return (
    <>
      <Seo
        title="Über uns"
        description={`Leitbild, Werte und Qualitätsmanagement der ${site.academy}: wer wir sind, für wen wir arbeiten und wie wir Qualität sichern. Das vollständige Leitbild steht offen auf der Seite.`}
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
            welchen Themen die meisten Menschen scheitern, und kann die 400 Unterrichtseinheiten in
            Block A genau darauf ausrichten.
          </p>
          <p className="u-prose">
            Aus derselben Haltung stammt der Aufbau der Maßnahme. Wir hätten es bei der Sachkunde
            belassen können. Stattdessen umfasst sie {totalUeLabel} Unterrichtseinheiten: die
            Teilqualifikation 1 nach dem Ausbildungsrahmenplan Fachkraft für Schutz und Sicherheit,
            Brandschutz- und Evakuierungshilfe, Erste Hilfe, Awareness – und {practicalPhase.hours}{' '}
            Stunden betriebliche Lernphase im Sicherheitsunternehmen. Wer einen Kurs abschließt, soll
            damit auch eingestellt werden.
          </p>
        </section>

        {/* ---- Leitbild vollstaendig, nicht als Download versteckt --------- */}
        <section id="leitbild">
          <div className="sec-head" style={{ marginBottom: 'var(--s-6)' }}>
            <h2>Unser Leitbild – vollständig</h2>
            <p>
              Das Leitbild ist das Dokument, an dem uns die fachkundige Stelle und jedes Jobcenter
              messen kann. Deshalb steht es hier im Wortlaut auf der Seite und nicht nur als Datei
              zum Herunterladen.
            </p>
          </div>

          <article className="doc">
            <header className="doc__head">
              <p className="doc__kicker">Dokument · Leitbild</p>
              <h3 className="doc__title">{leitbild.title}</h3>
              <dl className="doc__meta">
                {leitbild.header.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </header>

            <div className="doc__intro">
              {leitbild.intro.map((paragraph) => (
                <p className="u-prose" key={paragraph.slice(0, 40)}>
                  {paragraph}
                </p>
              ))}
            </div>

            {leitbild.sections.map((section) => (
              <section className="doc__section" key={section.heading}>
                <h3>{section.heading}</h3>
                {section.text.map((paragraph) => (
                  <p className="u-prose" key={paragraph.slice(0, 40)}>
                    {paragraph}
                  </p>
                ))}

                {section.people && (
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
                )}
              </section>
            ))}

            <footer className="doc__foot">
              <p className="ledger__legend">{site.documentStatus}</p>
              <a
                className="btn btn--line btn--sm"
                href={leitbild.file}
                download="Leitbild_ProVita_Akademie.docx"
              >
                Als DOCX herunterladen
              </a>
            </footer>
          </article>

          <div className="notice" style={{ marginTop: 'var(--s-6)' }}>
            <p className="notice__title">AZAV-Zulassung</p>
            <p>{site.azav.statusLong}</p>
          </div>
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
            Leitbild im Wortlaut, das vollständige Curriculum mit allen Modulen und
            Unterrichtseinheiten, die Rechtsgrundlage jeder einzelnen Qualifikation, die Namen der
            Verantwortlichen und unsere AZAV-Zulassung.
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
