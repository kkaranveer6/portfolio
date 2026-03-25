import path from 'path'
import { getAllProjects, getFeaturedProjects, getProjectBySlug, getProjectContent } from '@/lib/projects'

const FIXTURE_DIR = path.join(process.cwd(), '__tests__/fixtures/projects')

describe('getAllProjects', () => {
  it('returns an array of projects with slug and frontmatter', () => {
    const projects = getAllProjects(FIXTURE_DIR)
    expect(projects).toHaveLength(1)
    expect(projects[0]).toMatchObject({
      slug: 'test-project',
      title: 'Test Project',
      tagline: 'A project for testing',
      status: 'live',
      featured: true,
      tech: ['Next.js', 'TypeScript'],
    })
  })
})

describe('getFeaturedProjects', () => {
  it('returns only featured projects', () => {
    const projects = getFeaturedProjects(FIXTURE_DIR)
    expect(projects.every(p => p.featured)).toBe(true)
  })
})

describe('getProjectBySlug', () => {
  it('returns project matching the slug', () => {
    const project = getProjectBySlug('test-project', FIXTURE_DIR)
    expect(project?.slug).toBe('test-project')
    expect(project?.title).toBe('Test Project')
  })

  it('returns null for unknown slug', () => {
    const project = getProjectBySlug('nonexistent', FIXTURE_DIR)
    expect(project).toBeNull()
  })
})

describe('getProjectContent', () => {
  it('returns MDX body content without frontmatter', () => {
    const content = getProjectContent('test-project', FIXTURE_DIR)
    expect(content).toContain('## Overview')
    expect(content).not.toContain('title: Test Project')
  })

  it('returns null for unknown slug', () => {
    const content = getProjectContent('nonexistent', FIXTURE_DIR)
    expect(content).toBeNull()
  })
})
