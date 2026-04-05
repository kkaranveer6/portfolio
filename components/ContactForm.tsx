export function ContactForm() {
  return (
    <div className="space-y-4">
      <p className="text-slate-400 text-sm leading-relaxed">
        Send me an email directly.
      </p>
      <a
        href="mailto:kkaranveer6@gmail.com"
        className="inline-block w-full py-3 rounded-lg bg-sky-400 text-slate-950 font-semibold text-sm text-center hover:bg-sky-300 transition-colors"
      >
        Send Email ↗
      </a>
    </div>
  )
}
