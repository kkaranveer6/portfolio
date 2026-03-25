import Link from 'next/link'
import { Project } from '@/lib/types'
import { StatusPill } from './StatusPill'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-lg border border-slate-800 bg-slate-900/50 p-6 hover:border-sky-500/50 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-slate-100 font-semibold text-lg leading-snug group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>
        <StatusPill status={project.status} />
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-0.5 rounded text-xs bg-slate-800 text-sky-400 border border-slate-700">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
        >
          Case Study →
        </Link>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-300 transition-colors"
          >
            Live Demo ↗
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-300 transition-colors"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  )
}
