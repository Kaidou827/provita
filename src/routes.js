/* ==========================================================================
   Seitenverzeichnis. Navigation UND Brotkrumen lesen aus dieser Datei,
   damit sich beides nie auseinanderentwickeln kann.
   ========================================================================== */

import { offers } from './data/offers.js';

export const paths = {
  home: '/',
  offers: '/massnahmen',
  about: '/ueber-uns',
  contact: '/kontakt',
  imprint: '/impressum',
  privacy: '/datenschutz',
  offer: (slug) => `/massnahmen/${slug}`,
};

export const mainNav = [
  { to: paths.offers, label: 'Maßnahmen', children: true },
  { to: paths.about, label: 'Über uns' },
  { to: paths.contact, label: 'Kontakt' },
];

export const offerNav = offers.map((o) => ({
  to: paths.offer(o.slug),
  label: o.short,
  basis: o.basis,
}));

const titles = {
  [paths.offers]: 'Maßnahmen',
  [paths.about]: 'Über uns',
  [paths.contact]: 'Kontakt',
  [paths.imprint]: 'Impressum',
  [paths.privacy]: 'Datenschutz',
};

/**
 * Baut die Brotkrumen aus dem Pfad.
 * "/massnahmen/erste-hilfe" -> Start / Maßnahmen / Erste Hilfe (DGUV)
 */
export function buildCrumbs(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/') return [];

  const crumbs = [{ to: paths.home, label: 'Start' }];
  const segments = clean.split('/').filter(Boolean);

  let acc = '';
  segments.forEach((segment) => {
    acc += `/${segment}`;
    const offer = offers.find((o) => o.slug === segment);
    crumbs.push({
      to: acc,
      label: offer ? offer.short : titles[acc] || segment,
    });
  });

  return crumbs;
}
