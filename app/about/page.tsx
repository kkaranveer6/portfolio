import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Karanveer',
  description: 'Full-stack engineer building SaaS tools for small businesses.',
}

const stack = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'Go', 'SQL', 'Rust'] },
  { category: 'Frontend', items: ['Next.js', 'React', 'Tailwind CSS', 'React Native'] },
  { category: 'Backend', items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Prisma'] },
  { category: 'Infrastructure', items: ['Vercel', 'Railway', 'Docker', 'GitHub Actions'] },
  { category: 'Payments & Email', items: ['Stripe', 'Resend', 'Webhooks'] },
]

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">About</p>
      <h1 className="text-4xl font-extrabold text-slate-100 mb-8">Hi, I&apos;m Karanveer.</h1>

      <div className="space-y-5 text-slate-400 leading-relaxed mb-12">
        <p>
          I&apos;m a full-stack engineer with experience across many languages and technologies.
          I focus on building practical SaaS products — tools that replace clunky spreadsheets
          and manual processes for real businesses.
        </p>
        <p>
          My approach: understand the business problem first, build the simplest thing that
          actually solves it, and deploy it to production. I care about multi-tenant architecture,
          clean data models, and software that&apos;s easy to maintain and extend.
        </p>
        <p>
          If you run a small business and have a software problem worth solving, I&apos;d love to
          hear about it.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mb-6">Tech Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {stack.map(({ category, items }) => (
          <div key={category}>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">{category}</p>
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <span key={item} className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 pt-10">
        <p className="text-slate-400 mb-6">
          Interested in working together? Let&apos;s have a conversation.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-lg bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-sky-300 transition-colors inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
