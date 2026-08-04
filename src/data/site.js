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

  /* AZAV-Status. Solange die Zulassung nicht erteilt ist, darf nirgends
     "AZAV-zertifiziert" stehen. Dieser Text wird an allen Stellen ausgespielt. */
  azav: {
    certified: false,
    statusShort: 'Trägerzulassung nach AZAV in Vorbereitung',
    statusLong:
      'Die ProVita Akademie befindet sich im Prozess der Trägerzulassung nach AZAV für Fachbereich 1 (Aktivierung und berufliche Eingliederung) und Fachbereich 4 (Berufliche Weiterbildung). Eine Förderung über Aktivierungs- und Vermittlungsgutschein oder Bildungsgutschein ist erst nach erteilter Zulassung und Maßnahmenzertifizierung möglich. Den aktuellen Stand nennen wir auf Anfrage jederzeit offen.',
    fields: [
      {
        code: 'Fachbereich 1',
        title: 'Heranführung an den Arbeitsmarkt',
        text: 'Maßnahmen zur Aktivierung und beruflichen Eingliederung: Berufsorientierung, Bewerbungstraining, individuelles Coaching, Stärkung der Handlungskompetenz.',
      },
      {
        code: 'Fachbereich 4',
        title: 'Fort- und Weiterbildung',
        text: 'Berufliche Weiterbildung mit anerkanntem Abschluss – bei uns die Vorbereitung auf die IHK-Sachkundeprüfung nach § 34a GewO samt integrierter Zusatzqualifikationen.',
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
