import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karanveer — Full-Stack SaaS Engineer',
  description: 'I build SaaS tools that help small businesses run better. Booking systems, CRMs, billing dashboards — built and deployed.',
  metadataBase: new URL('https://karanveer.dev'),
  openGraph: {
    title: 'Karanveer — Full-Stack SaaS Engineer',
    description: 'I build SaaS tools that help small businesses run better.',
    url: 'https://karanveer.dev',
    siteName: 'karanveer.dev',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
