import Header from '@/components/header'
import '@/app/globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { fontCinzel } from '@/theme/fonts'

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
      <body className={fontCinzel.className + ' flex flex-col min-h-screen justify-center items-center overflow-x-hidden'}>
        <Header />
        <main className='flex-1 w-full flex justify-center'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
