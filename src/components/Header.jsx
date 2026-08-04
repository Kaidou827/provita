import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { mainNav, offerNav, paths } from '../routes.js';
import { site } from '../data/site.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const groupRef = useRef(null);
  const { pathname } = useLocation();

  // Beim Seitenwechsel schließt sich alles.
  useEffect(() => {
    setMenuOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

  // Klick nach außen und Escape schließen das Untermenü.
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e) => {
      if (groupRef.current && !groupRef.current.contains(e.target)) setMenuOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const inOffers = pathname.startsWith(paths.offers);

  return (
    <header className="site-head">
      <div className="wrap site-head__bar">
        <Link to={paths.home} className="brand" aria-label={`${site.academy}, zur Startseite`}>
          <img
            className="brand__logo"
            src="/logo-dark.png"
            alt=""
            width={1500}
            height={751}
            decoding="async"
          />
        </Link>

        <nav className="nav" aria-label="Hauptnavigation">
          {mainNav.map((item) =>
            item.children ? (
              <div className="nav__group" key={item.to} ref={groupRef}>
                <button
                  type="button"
                  className={`nav__toggle${inOffers ? ' is-active' : ''}`}
                  aria-expanded={menuOpen}
                  aria-haspopup="true"
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  {item.label}
                  <span className="nav__caret" aria-hidden="true" />
                </button>

                {menuOpen && (
                  <div className="nav__menu" role="menu">
                    <Link to={paths.offers} className="nav__menu-item" role="menuitem">
                      <span>Alle Maßnahmen im Überblick</span>
                      <small>Übersicht</small>
                    </Link>
                    {offerNav.map((sub) => (
                      <Link key={sub.to} to={sub.to} className="nav__menu-item" role="menuitem">
                        <span>{sub.label}</span>
                        <small>{sub.basis}</small>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <Link to={paths.contact} className="btn btn--solid btn--sm head-cta">
          Vorgespräch anfragen
        </Link>

        <button
          type="button"
          className="burger"
          aria-expanded={drawerOpen}
          aria-label={drawerOpen ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {drawerOpen && (
        <div className="drawer">
          <div className="wrap">
            <NavLink
              to={paths.offers}
              className={({ isActive }) => `drawer__link${isActive ? ' is-active' : ''}`}
            >
              Maßnahmen
            </NavLink>
            {offerNav.map((sub) => (
              <Link key={sub.to} to={sub.to} className="drawer__sub">
                {sub.label}
              </Link>
            ))}
            <NavLink
              to={paths.about}
              className={({ isActive }) => `drawer__link${isActive ? ' is-active' : ''}`}
            >
              Über uns
            </NavLink>
            <NavLink
              to={paths.contact}
              className={({ isActive }) => `drawer__link${isActive ? ' is-active' : ''}`}
            >
              Kontakt
            </NavLink>
            <div className="drawer__foot">
              <Link to={paths.contact} className="btn btn--solid btn--wide">
                Vorgespräch anfragen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
