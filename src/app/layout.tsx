import './globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Header } from '@components/global/Header';
import { ContactFormSection } from '@components/global/ContactFormSection';
import { Footer } from '@components/global/Footer';
import { FabBackToTop } from '@components/global/FabBackToTop';
import { ToastMessage } from '@components/global/ToastMessage';
import { FabWhatsapp } from '@components/global/FabWhatsaap';

const sora = Sora({
  variable: '--font-sora',
  subsets:['latin'],
  weight: ['100', '200', '400', '600', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'Naceja | Portfólio',
    template: '%s | Naceja'
  },
  icons: [
    {
      url: '/favicon.png'
    }
  ],
  description: 'Portfólio pessoal de Eduardo "Naceja" Toriani',
}

interface IRootLayout {
  children: React.ReactNode
}
export default function RootLayout({ children: page }: IRootLayout) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.variable}`}>
        <ToastMessage />
        <Header />
        {page}
        <ContactFormSection />
        <FabBackToTop />
        <FabWhatsapp />
        <Footer />
      </body>
    </html>
  )
}
