'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import NewsletterForm from './NewsletterForm'
import ParallaxLayer from './ParallaxLayer'
import Image from 'next/image'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -50])

  return (
    <section className="relative overflow-hidden">
      <ParallaxLayer />
      <div className="max-w-6xl mx-auto px-6 py-28 relative z-10">
        <div className="grid grid-cols-2 gap-10 items-center md:grid-cols-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl font-extrabold mb-4">Convert Figma designs into beautiful, responsive pages.</h1>
            <p className="text-lg mb-6">Pixel-perfect, fast, and accessible — built with Next.js + Tailwind + Framer Motion.</p>
            <div className="flex gap-3 items-center">
              <button className="px-5 py-3 rounded-lg bg-sky-600 text-white hover:scale-105 transform transition">Get started</button>
              <button className="px-5 py-3 rounded-lg border">View docs</button>
            </div>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </motion.div>

          <motion.div style={{ y: y1 }} className="flex justify-center">
            <div className="w-[520px] h-[340px] hidden md:block relative">
              <Image src="/hero.jpg" alt="hero" fill className="object-cover rounded-2xl shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
