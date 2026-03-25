import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Karanveer — karanveer.dev
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="/projects" className="hover:text-slate-300 transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          <a href="https://github.com/karanveer" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">GitHub ↗</a>
          <a href="https://linkedin.com/in/karanveer" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  )
}
