/* ==========================================================================
   Curriculum – vier Bloecke, 1.048 Unterrichtseinheiten, dazu 160 Stunden
   betriebliche Lernphase.

   Maßnahme: Fachkraft für Schutz und Sicherheit – Teilqualifikation 1
   "Personen- und Objektschutz", inkl. Vorbereitung auf die
   IHK-Sachkundepruefung nach § 34a GewO.

   "presence: true" = Baustein enthaelt verpflichtende Anteile in Praesenz.
   Die Summen werden gerechnet, nicht gepflegt – es kann keine falsche
   Gesamtzahl auf der Seite stehen.
   ========================================================================== */

export const blocks = [
  {
    id: 'A',
    title: 'Sachkundeprüfung § 34a GewO',
    items: [
      {
        title: 'Recht der öffentlichen Sicherheit und Ordnung, Gewerberecht/BewachV, Datenschutz',
        ue: 160,
      },
      { title: 'BGB, Straf- und Strafverfahrensrecht', ue: 120 },
      { title: 'Umgang mit Menschen, Deeskalation', ue: 80 },
      { title: 'UVV, Grundzüge der Sicherheitstechnik', ue: 40 },
    ],
  },
  {
    id: 'B',
    title: 'Teilqualifikation 1 „Personen- und Objektschutz“',
    items: [
      { title: 'Objekt- und Werkschutz', ue: 100 },
      { title: 'Personenschutz', ue: 80 },
      { title: 'Sicherheits- und Gefahrenmeldetechnik, Videoüberwachung', ue: 90 },
      { title: 'Gefahrenabwehr, vorbeugender Brandschutz', ue: 60 },
      { title: 'Dokumentation, Wachbuch, Melde- und Funkwesen', ue: 70 },
      { title: 'Kompetenzfeststellung', ue: 60 },
    ],
  },
  {
    id: 'C',
    title: 'Zusatzqualifikationen',
    items: [
      {
        title: 'Brandschutz- und Evakuierungshelfer inkl. Löschübung',
        ue: 16,
        presence: true,
        presenceNote: 'Löschübung',
      },
      {
        title: 'Erste Hilfe gemäß DGUV',
        ue: 9,
        presence: true,
        presenceNote: 'Praktische Übungen',
      },
      { title: 'Awareness bei Veranstaltungen', ue: 36 },
    ],
  },
  {
    id: 'D',
    title: 'Übergang in Arbeit',
    items: [
      { title: 'Digitale Kompetenzen und Fachsprache', ue: 60 },
      { title: 'Bewerbungscoaching', ue: 47 },
      { title: 'Auswertung betriebliche Lernphase', ue: 20 },
    ],
  },
];

export const blockUe = (block) => block.items.reduce((sum, item) => sum + item.ue, 0);

export const totalUe = blocks.reduce((sum, block) => sum + blockUe(block), 0);
export const totalUeLabel = totalUe.toLocaleString('de-DE');

export const maxUe = Math.max(...blocks.flatMap((b) => b.items.map((i) => i.ue)));

/* Die betriebliche Lernphase zaehlt in Stunden, nicht in UE – deshalb
   getrennt gefuehrt und in den Summen nicht mitgerechnet. */
export const practicalPhase = {
  hours: 160,
  weeks: 4,
  title: 'Betriebliche Lernphase (Praktikum)',
  text: 'Im Anschluss an Block D absolvieren die Teilnehmenden 160 Stunden betriebliche Lernphase bei Partnerunternehmen der Sicherheitsbranche in der Region.',
};

export const facts = [
  { value: totalUeLabel, label: 'Unterrichtseinheiten' },
  { value: `${blocks.length}`, label: 'Blöcke (A–D)' },
  { value: `${practicalPhase.hours}`, label: 'Std. betriebliche Lernphase' },
  { value: 'ca. 30', label: 'Wochen Vollzeit' },
];
