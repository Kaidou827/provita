/**
 * Aktenschiene: schmale Metaspalte links, Inhalt rechts.
 * Die Schiene traegt genau die Angaben, die Kostentraeger zuerst suchen.
 */
export default function PageShell({ eyebrow, meta = [], children }) {
  return (
    <div className="wrap sheet">
      <aside className="rail">
        {eyebrow && <p className="rail__eyebrow">{eyebrow}</p>}
        {meta.length > 0 && (
          <dl className="rail__meta">
            {meta.map((row) => (
              <div className="rail__row" key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </aside>
      <div className="sheet__body">{children}</div>
    </div>
  )
}
