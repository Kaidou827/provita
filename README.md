# ProVita Akademie – Website

React + Vite. Kein Backend, keine Datenbank, kein Cookie-Banner nötig.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Ausgabe in dist/
npm run preview  # gebaute Version lokal prüfen
```

---

## Vor dem Livegang zu klären

Alles Rechtsverbindliche steht in **einer** Datei: `src/data/site.js`.

| Punkt | Stand |
|---|---|
| Trägergesellschaft | Im Leitbild steht **WEEQ UG (haftungsbeschränkt)**, im Code steht **ProVita GmbH**. Impressum, AZAV-Zulassung und jedes Zertifikat müssen dieselbe Gesellschaft nennen. |
| Leitbild-DOCX vs. Website | Die DOCX weicht an drei Stellen ab (Träger, AZAV-Status, Wort „Ausbildung“) – siehe Kopf von `src/data/leitbild.js`. DOCX nachziehen. |
| Registergericht und HRB-Nummer | offen |
| USt-IdNr. | offen |
| Zuständige fachkundige Stelle (AZAV) | offen |
| Hosting-Anbieter in der Datenschutzerklärung | offen, Auftragsverarbeitungsvertrag erforderlich |

`src/pages/Impressum.jsx` und `src/pages/Datenschutz.jsx` enthalten je einen
Hinweisblock „Hinweis an das Projektteam“. Beide sind Gerüste und keine
Rechtsberatung – vor dem Livegang anwaltlich prüfen lassen und die Blöcke
danach löschen.

### AZAV-Status

In `src/data/site.js` steht oben **ein** Schalter: `const azavCertified`.
Er steht auf `false`, weil das Leitbild vom „Prozess der AZAV-Zertifizierung“
spricht und die zuständige fachkundige Stelle noch offen ist. Solange er auf
`false` steht, erscheint überall „Im AZAV-Zulassungsverfahren“ – nirgends
„zugelassen“, und die Förderung über Bildungsgutschein steht unter dem
Vorbehalt der erteilten Zulassung.

Liegt der Zulassungsbescheid vor: Schalter auf `true` und die fachkundige
Stelle im Impressum ergänzen. Die Texte auf Startseite, Maßnahmenseiten,
Über uns und im Fuß ziehen automatisch nach.

### Wortwahl

Die Maßnahme ist eine **Teilqualifikation** nach dem Ausbildungsrahmenplan des
Ausbildungsberufs Fachkraft für Schutz und Sicherheit – kein Berufsabschluss.
Die Seite sagt das an drei Stellen ausdrücklich (Startseite Transparenz,
Maßnahmenübersicht, Detailseite). Bitte beibehalten: „Teilqualifikation“ ja,
„Ausbildung“ oder „Berufsabschluss“ nein. Gegenüber Auditor und Kostenträger
ist das der entscheidende Unterschied.

Die **Waffensachkunde nach § 7 WaffG ist nicht Teil der Maßnahme.** Sie wurde
bewusst überall entfernt; nicht wieder aufnehmen, ohne dass sie im Curriculum
und in der Zulassung steht.

---

## Struktur

```
src/
  routes.js              Seitenverzeichnis – Navigation UND Brotkrumen lesen hier
  data/
    site.js              Träger, Anschrift, Kontakt, AZAV-Schalter, QM-Team
    leitbild.js          Leitbild im Volltext (steht auf /ueber-uns, nicht nur als DOCX)
    curriculum.js        4 Blöcke A–D, 1.048 UE, 160 Std. Betrieb, Präsenz-Kennzeichnung
    offers.js            Hauptmaßnahme (TQ 1) + 3 Zusatzqualifikationen (Inhalt der Unterseiten)
  styles/
    tokens.css           Farben, Typo-Skala, Raster
    base.css             Reset, Typografie, Fokus
    layout.css           Kopf, Navigation, Aktenschiene, Brotkrumen, Fuß
    components.css       Hero, Buttons, Karten, UE-Register, Formular
  components/
    ModuleLedger.jsx     das UE-Register (Kernelement der Seite)
    PageShell.jsx        Aktenschiene links + Inhalt rechts
    Breadcrumbs.jsx      inkl. BreadcrumbList-JSON-LD
    Seo.jsx              Titel, Description, strukturierte Daten
  pages/                 eine Datei je Seite
```

**Neue Zusatzqualifikation aufnehmen:** einen Eintrag in `src/data/offers.js`
ergänzen. Unterseite, Karte auf Start- und Übersichtsseite, Navigations­eintrag,
Brotkrumen und Fußzeile entstehen daraus automatisch.

**Curriculum ändern:** `src/data/curriculum.js`. Die Summe wird gerechnet, nicht
gepflegt – es kann keine falsche Gesamtzahl auf der Seite stehen.

---

## Gestaltung

- Akzentfarbe ausschließlich `#2c7a4e`. Keine Gradients. Fehlerzustände im
  Formular arbeiten ohne Rot (dunkler Rahmen + Text „Fehler: …“), was
  zusätzlich barrierefreier ist.
- Eine Schriftfamilie, **Google Sans**, in drei Rollen: 700 mit enger Laufweite
  für Überschriften, 400 für Fließtext, 500 in Versalien mit weiter Laufweite
  für Labels und Tabellenköpfe. Zahlen laufen tabellarisch (`tabular-nums`).
- Unterseiten tragen links eine schmale Aktenschiene mit Rechtsgrundlage,
  Umfang, Format, Abschluss und Zulassungsstand – die Angaben, die
  Vermittlungsfachkräfte zuerst suchen.
- Geprüft: responsive bis 390 px, sichtbarer Tastaturfokus, `prefers-reduced-motion`
  respektiert, Brotkrumen mit `aria-current`, Sprunglink zum Inhalt.

### Schrift lokal einbinden (optional)

Aktuell lädt `index.html` Google Sans über die Google-Fonts-API; dabei geht die
IP-Adresse der Besucher an Google, was in der Datenschutzerklärung steht. Wer
das vermeiden will: WOFF2-Dateien herunterladen, unter `public/fonts/` ablegen,
`@font-face` in `src/styles/base.css` deklarieren und die beiden `<link>`-Tags
in `index.html` entfernen. Danach den Abschnitt „Schriftarten“ in
`src/pages/Datenschutz.jsx` anpassen.

---

## Kontaktformular

Bewusst ohne Server: das Formular validiert im Browser und öffnet anschließend
einen fertig ausgefüllten Entwurf im Mailprogramm. Es werden keine Daten
übertragen, solange der Nutzer den Entwurf nicht selbst absendet.

Soll später echt versendet werden, in `src/pages/Kontakt.jsx` die Konstante
`ENDPOINT` setzen (Formspree, eigener Mail-Handler o. ä.). Der `fetch`-Block ist
vorbereitet und fällt bei Fehlern auf den Mailentwurf zurück. Bei einem externen
Dienst vorher den Auftragsverarbeitungsvertrag prüfen und die
Datenschutzerklärung ergänzen.

---

## Deployment

Statisches Hosting genügt. Wichtig ist nur, dass alle Pfade auf `index.html`
zeigen, sonst laufen die Unterseiten bei direktem Aufruf oder Reload in einen
404 des Servers.

- **Netlify:** `public/_redirects` liegt bereits bei.
- **Vercel:** `vercel.json` mit
  `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
- **Apache:** `.htaccess` mit `FallbackResource /index.html`
- **Nginx:** `try_files $uri $uri/ /index.html;`

Vor dem Livegang außerdem: `sitemap.xml` erzeugen, Domain in `robots.txt`
hinterlegen und in `Seo.jsx` die absoluten URLs für die strukturierten Daten
eintragen (aktuell relative Pfade).
