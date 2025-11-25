'use client'
import { motion } from 'framer-motion'

const items = [
  { title: 'Pixel-perfect', desc: 'Match the Figma design exactly.' },
  { title: 'Responsive', desc: 'Mobile-first breakpoints and accessibility.' },
  { title: 'Animated', desc: 'Framer Motion powered animations.' }
]

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Features</h2>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
          {items.map((it, idx) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.12 }} className="p-6 rounded-xl bg-white/60 border">
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
