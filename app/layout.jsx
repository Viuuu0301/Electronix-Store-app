import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Electronix Store',
  description: 'Electronix Store web-app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto bg-gradient-to-r from-[#48dcd0] via-[#3b9cb7] to-[#a16cbf] text-white">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
