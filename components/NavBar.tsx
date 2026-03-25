import Link from 'next/link'

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-sky-400 font-bold text-lg tracking-tight hover:text-sky-300 transition-colors">
          karanveer.dev
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/projects" className="text-slate-400 text-sm hover:text-slate-200 transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-slate-400 text-sm hover:text-slate-200 transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded border border-sky-500 text-sky-400 text-sm font-medium hover:bg-sky-500/10 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
