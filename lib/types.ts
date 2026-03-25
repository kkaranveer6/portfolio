export type ProjectStatus = 'live' | 'wip' | 'planned'

export interface ProjectFrontmatter {
  title: string
  tagline: string
  description: string
  tech: string[]
  status: ProjectStatus
  featured: boolean
  demoUrl: string | null
  repoUrl: string | null
  coverImage: string | null
}

export interface Project extends ProjectFrontmatter {
  slug: string
}
