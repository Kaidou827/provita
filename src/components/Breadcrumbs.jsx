import { Link, useLocation } from 'react-router-dom'
import { buildCrumbs } from '../routes.js'

/**
 * Brotkrumen auf allen Unterseiten. Auf der Startseite wird nichts gerendert.
 * Gibt zusätzlich BreadcrumbList-Markup für Suchmaschinen aus.
 */
export default function Breadcrumbs() {
  const { pathname } = useLocation()
  const crumbs = buildCrumbs(pathname)

  if (crumbs.length === 0) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: c.to,
    })),
  }

  return (
    <div className="crumbs">
      <div className="wrap">
        <nav aria-label="Brotkrumen-Navigation">
          <ol className="crumbs__list">
            {crumbs.map((crumb, i) => {
              const last = i === crumbs.length - 1
              return (
                <li key={crumb.to}>
                  {i > 0 && <span className="crumbs__sep" aria-hidden="true" />}
                  {last ? (
                    <span className="crumbs__current" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link to={crumb.to}>{crumb.label}</Link>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
