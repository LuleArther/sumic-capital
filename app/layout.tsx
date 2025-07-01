import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export const metadata: Metadata = {
  title: 'Sumic Capital | Africa\'s Premier Investment Platform',
  description: 'Connect with verified investors, founders, and advisors. Build, fund, and scale African businesses with confidence. By Sumic IT Solutions.',
  keywords: 'investment, startups, Africa, funding, venture capital, angel investment, Sumic IT Solutions',
  authors: [{ name: 'Sumic IT Solutions' }],
  creator: 'Sumic IT Solutions',
  publisher: 'Sumic IT Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}