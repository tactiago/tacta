import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className + ' flex flex-col min-h-screen justify-center items-center overflow-x-hidden'}>
        <Header />
        <main className='flex-1 w-full flex justify-center'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
