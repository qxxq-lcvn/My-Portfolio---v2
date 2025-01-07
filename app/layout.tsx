import type { Metadata } from 'next'
import { Playwrite_IS, Merriweather_Sans } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/providers'
import Footer from '@/components/footer'
import Header from '@/components/header'

const merriSans = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
})
const playwriteIS = Playwrite_IS({
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'By Next.js & Node.js'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          merriSans.variable,
          playwriteIS.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
