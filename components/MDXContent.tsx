import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-slate-200 mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-400 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-slate-400" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-slate-200 font-semibold" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="px-1.5 py-0.5 rounded bg-slate-800 text-sky-400 text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-slate-800/80 rounded-lg p-4 overflow-x-auto mb-4 text-sm" {...props} />
  ),
}

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  )
}
