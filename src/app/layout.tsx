import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { Header } from '@components/global/Header';
import { ContactFormSection } from '@components/global/ContactFormSection';
import { Footer } from '@components/global/Footer';
import { FabBackToTop } from '@components/global/FabBackToTop';

const inter = Inter({
  variable: '--font-inter',
  subsets:['latin'],
  weight: ['100', '200', '400', '600', '900'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Naceja | Portfólio',
  description: 'Meu portfólio pessoal (naceja)',
}

interface IRootLayout {
  children: React.ReactNode
}
export default function RootLayout({ children: page }: IRootLayout) {
  return (
    <html lang="pt-BR">
      <body className={`${plexMono.variable} ${inter.variable} font-sans`}>
        <Header />
        {page}
        <ContactFormSection />
        <FabBackToTop />
        <Footer />
      </body>
    </html>
  )
}
