import { Metadata } from 'next'
import Link from 'next/link'
import { getAllProjects } from '@/lib/projects'
import { ProjectGrid } from '@/components/ProjectGrid'

export const metadata: Metadata = {
  title: 'Projects — Karanveer',
  description: "SaaS tools I've built for small businesses.",
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Work</p>
        <h1 className="text-4xl font-extrabold text-slate-100 mb-4">Projects</h1>
        <p className="text-slate-400 max-w-xl leading-relaxed">
          SaaS tools built for small businesses. Each project includes a full case study covering
          the problem, solution, and technical decisions.
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </div>
  )
}
