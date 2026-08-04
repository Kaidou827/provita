/* ==========================================================================
   Curriculum – 12 Module, 320 Unterrichtseinheiten.
   "presence: true" = Modul enthält verpflichtende Praxisanteile in Präsenz.
   Quelle: Curriculum ProVita Akademie.
   ========================================================================== */

export const modules = [
  { no: 1, title: 'Recht der öffentlichen Sicherheit und Ordnung', ue: 32 },
  { no: 2, title: 'Gewerberecht und Bewachungsverordnung', ue: 24 },
  { no: 3, title: 'Datenschutz', ue: 16 },
  { no: 4, title: 'Bürgerliches Gesetzbuch', ue: 32 },
  { no: 5, title: 'Straf- und Strafverfahrensrecht', ue: 32 },
  {
    no: 6,
    title: 'Umgang mit Waffen / Waffensachkunde § 7 WaffG',
    ue: 40,
    presence: true,
    presenceNote: 'Waffenhandhabung und Schießen',
  },
  { no: 7, title: 'Unfallverhütungsvorschriften', ue: 16 },
  { no: 8, title: 'Umgang mit Menschen', ue: 32 },
  { no: 9, title: 'Grundzüge der Sicherheitstechnik', ue: 24 },
  {
    no: 10,
    title: 'Brandschutzhelfer und Evakuierungshelfer',
    ue: 16,
    presence: true,
    presenceNote: 'Löschübung',
  },
  {
    no: 11,
    title: 'Erste Hilfe gemäß DGUV',
    ue: 16,
    presence: true,
    presenceNote: 'Praktische Übungen',
  },
  { no: 12, title: 'Prüfungsvorbereitung und Wiederholung', ue: 40 },
];

export const totalUe = modules.reduce((sum, m) => sum + m.ue, 0);
export const maxUe = Math.max(...modules.map((m) => m.ue));

export const facts = [
  { value: `${totalUe}`, label: 'Unterrichtseinheiten' },
  { value: `${modules.length}`, label: 'Module' },
  { value: '5', label: 'Abschlüsse und Zertifikate' },
  { value: '100 %', label: 'Theorie live online' },
];
