import { useEffect, useRef, useState } from 'react'

/**
 * Setzt `is-revealed`, sobald das Element sichtbar wird.
 * Bei prefers-reduced-motion sofort sichtbar, ohne Observer.
 */
export default function useReveal({ threshold = 0.2 } = {}) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.disconnect()
          }
        })
      },
      { threshold }
    )

    observer.observe(node)

    // Sicherheitsnetz: sollte der Observer in einem Umfeld nicht feuern
    // (Druckansicht, Screenshot-Tools, alte WebViews), wird trotzdem gezeigt.
    const fallback = window.setTimeout(() => setRevealed(true), 1600)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [threshold])

  return [ref, revealed]
}
