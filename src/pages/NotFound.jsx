import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageShell from '../components/PageShell.jsx'
import { offerNav, paths } from '../routes.js'

export default function NotFound() {
  return (
    <>
      <Seo title="Seite nicht gefunden" />
      <PageShell eyebrow="404">
        <div>
          <h1>Diese Seite gibt es nicht.</h1>
          <p className="u-lead" style={{ marginTop: 'var(--s-5)' }}>
            Möglicherweise wurde die Adresse geändert. Von hier kommen Sie überall hin:
          </p>
        </div>

        <ul className="u-prose">
          <li>
            <Link to={paths.offers}>Maßnahmen im Überblick</Link>
          </li>
          {offerNav.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link to={paths.about}>Über uns</Link>
          </li>
          <li>
            <Link to={paths.contact}>Kontakt</Link>
          </li>
        </ul>

        <div className="btn-row">
          <Link to={paths.home} className="btn btn--solid">
            Zur Startseite
          </Link>
        </div>
      </PageShell>
    </>
  )
}
