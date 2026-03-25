import Link from 'next/link'
import { getFeaturedProjects } from '@/lib/projects'
import { ProjectGrid } from '@/components/ProjectGrid'

export default function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* Hero */}
      <section className="flex flex-col items-center text-center py-28 md:py-36">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-5">
          Full-Stack Engineer · SaaS
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
          I build software{' '}
          <span className="text-sky-400">small businesses</span>{' '}
          actually use.
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed">
          Custom SaaS tools — booking systems, CRMs, billing dashboards — designed for
          real workflows and built to production quality.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-sky-300 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-semibold text-sm hover:border-slate-500 hover:text-slate-100 transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-100">Featured Projects</h2>
          <Link href="/projects" className="text-sky-400 text-sm hover:text-sky-300 transition-colors">
            View all →
          </Link>
        </div>
        <ProjectGrid projects={featured} />
      </section>

      {/* About snippet */}
      <section className="py-12 border-t border-slate-800">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">About Me</h2>
          <p className="text-slate-400 leading-relaxed mb-2">
            I&apos;m Karanveer, a full-stack engineer with experience across many languages and
            technologies. I focus on building practical SaaS products — the kind of tools that
            replace clunky spreadsheets and manual processes for real businesses.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            If you run a small business and have a software problem worth solving, I&apos;d love to
            talk about it.
          </p>
          <Link href="/about" className="text-sky-400 text-sm hover:text-sky-300 transition-colors font-medium">
            More about me →
          </Link>
        </div>
      </section>

    </div>
  )
}
