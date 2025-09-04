import type { Metadata } from 'next'
import { Anton, Poppins } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import StoryblokProvider from '@/lib/StoryBlok/StoryblokProvider'
import Providers from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mundial Media',
  description: 'Mundial Media website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={`${poppins.variable} ${anton.variable} font-poppins`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  )
}
