/* ==========================================================================
   Leitbild der ProVita Akademie – vollstaendiger Dokumenttext.
   Quelle: public/Leitbild_ProVita_Akademie.docx, Stand 29.07.2026.

   Das Leitbild steht jetzt vollstaendig auf der Seite. Der DOCX-Download
   bleibt als Beleg fuer Kostentraeger und Auditoren daneben stehen.

   >>> ABWEICHUNGEN GEGENUEBER DER DOCX <<<
   Drei Stellen sind bewusst NICHT wortgleich uebernommen, weil sie der
   uebrigen Seite widersprechen wuerden. Bitte die DOCX entsprechend
   nachziehen, damit Dokument und Website identisch sind:

   1. Traeger: die DOCX nennt "WEEQ UG (haftungsbeschraenkt)". Hier wird
      site.legal.entity gezogen, damit auf der Seite nur eine Gesellschaft
      steht (siehe Hinweisblock im Impressum).
   2. AZAV-Status: die DOCX sagt "befindet sich im Prozess der
      AZAV-Zertifizierung". Hier wird site.azav.statusSentence gezogen, das
      am Schalter azavCertified in site.js haengt. Solange der auf false
      steht, sagen DOCX und Seite dasselbe; wird die Zulassung erteilt,
      zieht die Seite automatisch nach und die DOCX muss folgen.
   3. Wortwahl: die DOCX schreibt "Ausbildung" bzw. "anerkannte
      Berufsausbildungen". Die Maßnahme ist eine Teilqualifikation nach dem
      Ausbildungsrahmenplan Fachkraft für Schutz und Sicherheit und fuehrt
      NICHT zum Berufsabschluss – die Seite sagt das an drei Stellen
      ausdruecklich. Daher hier "Qualifizierung", "Weiterbildung" und
      "Kammerpruefung".
   ========================================================================== */

import { site } from './site.js';

export const leitbild = {
  title: 'Kundenorientiertes Leitbild der ProVita Akademie',

  /* Kopf des Dokuments – wie im Briefkopf der DOCX. */
  header: [
    { label: 'Träger', value: site.legal.entity },
    { label: 'Zulassung', value: site.azav.statusShort },
    { label: 'Fachbereiche', value: 'Fachbereich 1 und Fachbereich 4' },
  ],

  /* Praeambel, im Dokument ohne eigene Ueberschrift. */
  intro: [
    'Die ProVita Akademie und alle Mitarbeiterinnen und Mitarbeiter haben sich zum festen Ziel gesetzt, qualitativ hochwertige Qualifizierungen und Weiterbildungen im Bereich Sicherheitsfachkraft (§ 34a GewO) anzubieten.',
    'Im Mittelpunkt aller Tätigkeiten steht die Teilnehmerin bzw. der Teilnehmer. Unsere Teilnehmerinnen und Teilnehmer sind arbeitslose Frauen und Männer, die sich in einer beruflichen Neuorientierung befinden. Durch Kündigung, betriebliche Umstrukturierungen oder persönliche Lebensumstände vorübergehend ohne Beschäftigung, fehlt ihnen häufig nicht der Wille, sondern der gezielte Weg zurück in eine gesicherte Beschäftigung. Genau hier setzen wir an.',
  ],

  sections: [
    {
      heading: 'Firmenprofil',
      text: [
        `Die ProVita Akademie ist eine Bildungseinrichtung der ${site.legal.entity}. ${site.azav.statusSentence} Wir spezialisieren uns auf die Qualifizierung von Sicherheitsfachkräften gemäß § 34a GewO sowie auf Fort- und Weiterbildungen im Sicherheitsbereich. Unser Ziel ist es, als zugelassener Träger nach Fachbereich 1 und Fachbereich 4 der AZAV anerkannte und praxisnahe Qualifizierungen anzubieten.`,
        'Unser Anspruch ist es, als wachsende Akademie kontinuierlich neue Bildungsangebote zu entwickeln, die sich an den realen Anforderungen des Arbeitsmarktes orientieren. In neuen und teilweise ungewöhnlichen Trends sehen wir eine Chance, unsere hohen Ziele für unsere Teilnehmerinnen und Teilnehmer zu erreichen. Rechtzeitige Anpassung an den sich ständig verändernden Markt ist für uns selbstverständlich.',
      ],
    },
    {
      heading: 'Mission und Werte',
      text: [
        'Ein partnerschaftlicher Umgang miteinander ist für uns sehr wichtig. Wir behandeln jede Teilnehmerin und jeden Teilnehmer mit Respekt und Wertschätzung. Unsere Mitarbeiterinnen und Mitarbeiter sind das Fundament unseres Erfolgs. Wir fördern sie durch regelmäßige Weiterbildungen, schaffen ein Arbeitsumfeld geprägt von gegenseitigem Vertrauen und fordern gleichzeitig hohe fachliche wie menschliche Standards.',
        'Lernbereitschaft, aktive Mitgestaltung und informativer Austausch sorgen für einen permanenten Verbesserungsprozess. Wir sehen uns als verlässlichen Partner für Jobcenter und Agenturen für Arbeit.',
      ],
    },
    {
      heading: 'Eingliederung in den Arbeitsmarkt',
      text: [
        'Ziel ist es, durch Qualifizierung und Weiterbildung ein erfolgreiches Berufsleben zu ermöglichen. Dabei sehen wir es als unsere Verpflichtung an, unsere Teilnehmerinnen und Teilnehmer nach dem erfolgreichen Abschluss bei der Eingliederung in das Berufsleben zu unterstützen. Wir begleiten aktiv den Übergang in eine neue Beschäftigung und tragen dazu bei, dass unsere Absolventinnen und Absolventen schnell und nachhaltig einen neuen Job finden. Wieder Teil des Berufslebens zu sein und die eigene Lebensqualität dauerhaft zu verbessern – das ist das Ziel, das wir gemeinsam verfolgen.',
      ],
    },
    {
      heading: 'Fachbereich 1 AZAV – Heranführung an den Arbeitsmarkt',
      text: [
        'Im Rahmen des Fachbereichs 1 der AZAV (Maßnahmen zur Aktivierung und beruflichen Eingliederung) begleiten wir Teilnehmerinnen und Teilnehmer gezielt bei der Heranführung an den Arbeitsmarkt. Durch Aktivierungsmaßnahmen, Berufsorientierung, Bewerbungstraining und individuelles Coaching stärken wir die Handlungskompetenz unserer Teilnehmerinnen und Teilnehmer als erste wichtige Brücke zurück in das Berufsleben.',
      ],
    },
    {
      heading: 'Fachbereich 4 AZAV – Fort- und Weiterbildung',
      text: [
        'Im Fachbereich 4 der AZAV bieten wir Weiterbildungsmaßnahmen mit Kammerprüfung an, insbesondere die Vorbereitung auf die Sachkundeprüfung nach § 34a GewO (Sicherheitsfachkraft). Unsere Qualifizierungen und Weiterbildungen sind praxisnah konzipiert, werden von erfahrenen Dozentinnen und Dozenten begleitet und richten sich vollständig nach den Vorgaben der AZAV sowie den einschlägigen gesetzlichen Anforderungen.',
      ],
    },
    {
      heading: 'Qualitätssicherung',
      text: [
        'Die Überwachung, Einschätzung und Verbesserung bzw. Weiterentwicklung des Leitbildes wird jährlich durch die Geschäftsführung in der Managementbewertung vorgenommen. Die Qualitätsmanagement-Beauftragten unterstützen die Geschäftsführung bei der Pflege und kontinuierlichen Weiterentwicklung des Qualitätsmanagementsystems.',
      ],
      /* Namen und Rollen kommen aus site.qm – eine Quelle, kein Doppelpflegen. */
      people: true,
    },
  ],

  /* Dateiname des Belegdokuments in public/. */
  file: '/Leitbild_ProVita_Akademie.docx',
};
