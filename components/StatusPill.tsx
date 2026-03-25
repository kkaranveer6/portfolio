import { ProjectStatus } from '@/lib/types'

const config: Record<ProjectStatus, { label: string; classes: string }> = {
  live:    { label: 'Live',        classes: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  wip:     { label: 'In Progress', classes: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  planned: { label: 'Planned',     classes: 'bg-slate-500/10 text-slate-400 border-slate-500/20' },
}

export function StatusPill({ status }: { status: ProjectStatus }) {
  const { label, classes } = config[status]
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${classes}`}>
      {label}
    </span>
  )
}
