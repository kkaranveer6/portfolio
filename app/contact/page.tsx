import { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { CalendlyEmbed } from '@/components/CalendlyEmbed'

export const metadata: Metadata = {
  title: 'Contact — Karanveer',
  description: 'Get in touch to discuss your project or book a call.',
}

export default function ContactPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? ''

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Get in Touch</p>
        <h1 className="text-4xl font-extrabold text-slate-100 mb-4">Let&apos;s Talk</h1>
        <p className="text-slate-400 max-w-xl leading-relaxed">
          Have a business problem worth solving? Send a message or book a call directly.
          I&apos;ll get back to you same-day or next business day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-lg font-semibold text-slate-200 mb-6">Send a Message</h2>
          <ContactForm />
        </div>

        {calendlyUrl && (
          <div>
            <h2 className="text-lg font-semibold text-slate-200 mb-6">Book a Call</h2>
            <CalendlyEmbed url={calendlyUrl} />
          </div>
        )}
      </div>
    </div>
  )
}
