import { Link } from 'react-router-dom';
import { offerNav, paths } from '../routes.js';
import { site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <img
              className="foot-brand__logo"
              src="/logo-light.png"
              alt={site.academy}
              width={1500}
              height={751}
              decoding="async"
            />
            <p className="foot-note">
              {site.legal.entity}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
            <p className="foot-note">{site.azav.statusShort}.</p>
          </div>

          <div>
            <h4>Maßnahmen</h4>
            <ul className="foot-list">
              <li>
                <Link to={paths.offers}>Übersicht</Link>
              </li>
              {offerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Kontakt</h4>
            <ul className="foot-list">
              <li>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </li>
              <li>
                <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
              </li>
              <li>{site.contact.hours}</li>
              <li>
                <Link to={paths.contact}>Vorgespräch anfragen</Link>
              </li>
              <li>
                <Link to={paths.about}>Über uns</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {site.legal.entity}
          </span>
          <nav aria-label="Rechtliches">
            <Link to={paths.imprint}>Impressum</Link>
            <Link to={paths.privacy}>Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
