import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project, ProjectFrontmatter } from './types'

export const DEFAULT_PROJECTS_DIR = path.join(process.cwd(), 'content/projects')

export function getAllProjects(dir = DEFAULT_PROJECTS_DIR): Project[] {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter(f => f.endsWith('.mdx'))
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
      const { data } = matter(raw)
      return { slug, ...(data as ProjectFrontmatter) }
    })
}

export function getFeaturedProjects(dir = DEFAULT_PROJECTS_DIR): Project[] {
  return getAllProjects(dir).filter(p => p.featured)
}

export function getProjectBySlug(slug: string, dir = DEFAULT_PROJECTS_DIR): Project | null {
  const filePath = path.join(dir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(raw)
  return { slug, ...(data as ProjectFrontmatter) }
}

export function getProjectContent(slug: string, dir = DEFAULT_PROJECTS_DIR): string | null {
  const filePath = path.join(dir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(raw)
  return content
}
