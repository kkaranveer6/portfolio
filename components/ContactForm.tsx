'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      if (res.ok) {
        setState('success')
        setFields({ name: '', email: '', message: '' })
      } else {
        const data = await res.json()
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setState('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
        <p className="text-emerald-400 font-semibold mb-1">Message sent!</p>
        <p className="text-slate-400 text-sm">I'll get back to you within 1–2 business days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={fields.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={fields.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
          placeholder="Tell me about your business and what you're looking to build..."
        />
      </div>

      {state === 'error' && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full py-3 rounded-lg bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-sky-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {state === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
