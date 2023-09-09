import { ThemeProvider } from '@/components/navbar/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medhashis Maiti',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar/> 
        {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
