import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { getAllProjects, getProjectBySlug, getProjectContent } from '@/lib/projects'
import { MDXContent } from '@/components/MDXContent'
import { StatusPill } from '@/components/StatusPill'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjects().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Karanveer`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const content = getProjectContent(slug)
  if (!content) notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/projects" className="text-slate-500 text-sm hover:text-slate-300 transition-colors mb-8 inline-block">
        ← All Projects
      </Link>

      <div className="mb-2">
        <StatusPill status={project.status} />
      </div>

      <h1 className="text-4xl font-extrabold text-slate-100 mt-3 mb-3">
        {project.title}
      </h1>
      <p className="text-slate-400 text-xl mb-6 leading-relaxed">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-0.5 rounded text-xs bg-slate-800 text-sky-400 border border-slate-700">
            {t}
          </span>
        ))}
      </div>

      {(project.demoUrl || project.repoUrl) && (
        <div className="flex gap-4 mb-10 pb-10 border-b border-slate-800">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-sky-300 transition-colors">
              Live Demo ↗
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 text-sm font-semibold hover:border-slate-500 transition-colors">
              GitHub ↗
            </a>
          )}
        </div>
      )}

      <MDXContent source={content} />
    </div>
  )
}
