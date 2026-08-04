import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Breadcrumbs from './components/Breadcrumbs.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import Massnahmen from './pages/Massnahmen.jsx'
import OfferDetail from './pages/OfferDetail.jsx'
import UeberUns from './pages/UeberUns.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Impressum from './pages/Impressum.jsx'
import Datenschutz from './pages/Datenschutz.jsx'
import NotFound from './pages/NotFound.jsx'

import { paths } from './routes.js'

export default function App() {
  return (
    <div className="shell">
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>
      <ScrollToTop />
      <Header />
      <Breadcrumbs />
      <main id="inhalt">
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.offers} element={<Massnahmen />} />
          <Route path="/massnahmen/:slug" element={<OfferDetail />} />
          <Route path={paths.about} element={<UeberUns />} />
          <Route path={paths.contact} element={<Kontakt />} />
          <Route path={paths.imprint} element={<Impressum />} />
          <Route path={paths.privacy} element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
