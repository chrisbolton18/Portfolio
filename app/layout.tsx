import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chris Bolton Portfolio',
  description: 'Personal portfolio of Chris Bolton, Computer Science student at University of Windsor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

