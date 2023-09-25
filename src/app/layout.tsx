import './globals.css'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { Header } from '@components/Header';
import { ContactForm } from '@components/ContactForm';
import { Footer } from '@components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
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
      <body className={`${inter.variable} ${plexMono.variable} font-sans`}>
        <Header />
        {page}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
