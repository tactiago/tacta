import Header from '@/components/header'
import '@/app/globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { fontCinzel } from '@/theme/fonts'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: '#TacTa2024',
  description: 'Casamento Thais & Tiago',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <meta property="og:title" content="Casamento TACTA 💙 | 12/05/2024" />
        <meta property="og:description" content="Conheça os detalhes do grande dia, presenteie e aposte para onde irão!" />
        <meta property="og:url" content="https://tacta-one.vercel.app/" />
        <meta property="og:image" content="https://tacta-one.vercel.app/_next/image?url=%2FSegura.jpg&w=256&q=75" />
      </head>

      <body className={fontCinzel.className + ' flex flex-col min-h-screen justify-center items-center overflow-x-hidden'}>
        <Header />
        <main className='flex-1 w-full flex justify-center'>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
