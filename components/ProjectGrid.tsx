import { Project } from '@/lib/types'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
