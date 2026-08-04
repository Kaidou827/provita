/** Faktenband. Nur nachpruefbare Zahlen, keine erfundenen Kennzahlen. */
export default function FactStrip({ items }) {
  return (
    <dl className="facts">
      {items.map((item) => (
        <div className="facts__item" key={item.label}>
          <dt className="facts__label">{item.label}</dt>
          <dd className="facts__value u-num">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
