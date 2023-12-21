import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { AppProvider } from '@/components/AppContext'

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
          <AppProvider>
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  )
}
