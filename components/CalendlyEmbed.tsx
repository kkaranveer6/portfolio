'use client'

import { useEffect } from 'react'

export function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const existing = document.querySelector('script[src*="calendly.com"]')
    if (existing) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget rounded-lg overflow-hidden border border-slate-800"
      data-url={url}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
