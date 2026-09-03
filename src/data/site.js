/* ==========================================================================
   Zentrale Stammdaten.
   Alles, was rechtlich verbindlich ist, wird NUR hier gepflegt.
   ==========================================================================

   >>> BITTE PRÜFEN <<<
   Im Leitbild steht als Träger "WEEQ UG (haftungsbeschränkt)".
   Du hast die "ProVita GmbH" gegründet. Das ist ein Widerspruch, der im
   Impressum, in der AZAV-Trägerzulassung und auf jedem Zertifikat identisch
   sein muss. Trage unten die tatsächlich zulassungsführende Gesellschaft ein
   (inkl. Registergericht, HRB-Nummer, USt-IdNr.) und lösche, was nicht passt.
   ========================================================================== */

/* --------------------------------------------------------------------------
   AZAV-Zulassungsstand. EIN Schalter, der alle Status- und Fördertexte der
   Seite umstellt.

   Auf `true` erst dann, wenn der Zulassungsbescheid der fachkundigen Stelle
   tatsächlich vorliegt – vorher darf nirgends "zugelassen" stehen. Das
   Leitbild (Stand 29.07.2026) spricht vom "Prozess der AZAV-Zertifizierung"
   und die zuständige fachkundige Stelle ist im Impressum noch offen; deshalb
   steht der Schalter auf `false`. Liegt der Bescheid vor: hier auf `true`
   setzen und die fachkundige Stelle im Impressum ergänzen – die Texte auf
   Startseite, Maßnahmenseiten, Über uns und im Fuß ziehen automatisch nach.
   -------------------------------------------------------------------------- */
const azavCertified = false;

export const site = {
  academy: 'ProVita Akademie',

  legal: {
    // Zulassungsführende Gesellschaft – bitte verifizieren.
    entity: 'ProVita GmbH',
    formerEntity: 'WEEQ UG (haftungsbeschränkt)',
    managingDirector: 'Petra Zakova',
    register: 'Amtsgericht Düsseldorf, HRB — folgt', // TODO
    vatId: 'DE — folgt', // TODO
    responsibleForContent: 'Petra Zakova',
  },

  address: {
    street: 'Josef-Schappe-Str. 21',
    zip: '40882',
    city: 'Ratingen',
    country: 'Deutschland',
  },

  contact: {
    email: 'info@provita-akademie.de',
    phone: '0162 8347090',
    phoneHref: '+491628347090',
    hours: 'Mo–Fr, 09:00–16:00 Uhr',
  },

  /* AZAV-Status. Alle Texte hängen an azavCertified (siehe oben). */
  azav: {
    certified: azavCertified,

    statusShort: azavCertified
      ? 'Trägerzulassung nach AZAV erteilt'
      : 'Im AZAV-Zulassungsverfahren',

    statusLong: azavCertified
      ? 'Die ProVita Akademie ist nach AZAV zugelassen für Fachbereich 1 (Aktivierung und berufliche Eingliederung) und Fachbereich 4 (Berufliche Weiterbildung). Die Maßnahme ist eine Maßnahme der beruflichen Weiterbildung; eine Förderung über Bildungsgutschein nach §§ 81 ff. SGB III ist möglich.'
      : 'Die ProVita Akademie befindet sich im AZAV-Zulassungsverfahren bei der fachkundigen Stelle – für Fachbereich 1 (Aktivierung und berufliche Eingliederung) und Fachbereich 4 (Berufliche Weiterbildung). Die Maßnahme ist als Maßnahme der beruflichen Weiterbildung angelegt; eine Förderung über Bildungsgutschein nach §§ 81 ff. SGB III ist ab erteilter Zulassung möglich. Bis dahin behaupten wir sie nicht.',

    /* Vollständiger Satz – für Fließtext, z. B. im Leitbild. */
    statusSentence: azavCertified
      ? 'Die Trägerzulassung nach AZAV für die Fachbereiche 1 und 4 ist erteilt.'
      : 'Für die Fachbereiche 1 und 4 läuft das Zulassungsverfahren nach AZAV bei der fachkundigen Stelle.',

    /* Kurzer Förderhinweis für Kacheln und Fußzeile. */
    fundingShort: azavCertified
      ? 'Förderung über Bildungsgutschein möglich'
      : 'Förderung über Bildungsgutschein ab erteilter Zulassung',

    fields: [
      {
        code: 'Fachbereich 1',
        title: 'Heranführung an den Arbeitsmarkt',
        text: 'Maßnahmen zur Aktivierung und beruflichen Eingliederung: Berufsorientierung, Bewerbungstraining, individuelles Coaching, Stärkung der Handlungskompetenz.',
      },
      {
        code: 'Fachbereich 4',
        title: 'Fort- und Weiterbildung',
        text: 'Berufliche Weiterbildung mit Kammerprüfung – bei uns die Teilqualifikation 1 „Personen- und Objektschutz“ nach dem Ausbildungsrahmenplan Fachkraft für Schutz und Sicherheit, inklusive Vorbereitung auf die IHK-Sachkundeprüfung nach § 34a GewO.',
      },
    ],
  },

  qm: [
    {
      name: 'Petra Zakova',
      role: 'Geschäftsführung',
      text: 'Verantwortet die Managementbewertung, in der Leitbild und Qualitätsziele jährlich überprüft und weiterentwickelt werden. Freigabe aller QM-Dokumente.',
    },
    {
      name: 'Rüdiger Keith',
      role: 'Qualitätsmanagement-Beauftragter',
      text: 'Pflege und Weiterentwicklung des Qualitätsmanagementsystems, Dokumentenlenkung, Vorbereitung der Audits.',
    },
    {
      name: 'Scharam Saleh',
      role: 'Qualitätsmanagement-Beauftragter',
      text: 'Qualitätssicherung im Lehrbetrieb, Auswertung der Teilnehmerrückmeldungen, Nachverfolgung von Verbesserungsmaßnahmen.',
    },
  ],

  documentStatus: 'Stand des Leitbildes: 29.07.2026 · Freigabe: Geschäftsführung',
};

export const fullAddress = `${site.address.street}, ${site.address.zip} ${site.address.city}`;
