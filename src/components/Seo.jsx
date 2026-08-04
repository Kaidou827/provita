import { useEffect } from 'react'
import { site } from '../data/site.js'

/**
 * Setzt Titel, Meta-Description und optional strukturierte Daten.
 * Bewusst ohne Zusatzabhängigkeit gehalten.
 */
export default function Seo({ title, description, jsonLd }) {
  useEffect(() => {
    document.title = title
      ? `${title} – ${site.academy}`
      : `${site.academy} – Vorbereitung auf die Sachkundeprüfung § 34a GewO`

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])

  useEffect(() => {
    if (!jsonLd) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [jsonLd])

  return null
}
