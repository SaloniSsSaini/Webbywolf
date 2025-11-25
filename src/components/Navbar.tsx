'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full z-40 transition-all ${scrolled ? 'backdrop-blur bg-white/60 border-b' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 bg-sky-500 rounded flex items-center justify-center text-white font-bold">W</div>
          <span className="font-semibold">WEBBYWOLF</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button aria-label="open mobile menu" onClick={() => setOpen(true)} className="p-2 rounded-md border">
            ☰
          </button>
        </div>
      </div>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  )
}
