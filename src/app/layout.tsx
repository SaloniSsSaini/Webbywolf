import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Preloader from '../components/Preloader'

export const metadata = {
  title: 'WebbyWolf — Landing Assignment',
  description: 'Advanced landing page built with Next.js + TypeScript + Tailwind',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
