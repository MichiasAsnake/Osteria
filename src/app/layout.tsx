import './globals.css'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

