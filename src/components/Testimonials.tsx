'use client'
import { motion } from 'framer-motion'

const data = [
  { name: 'Amit', text: 'Amazing work — pixel perfect!' },
  { name: 'Riya', text: 'Fast, responsive and beautiful.' },
  { name: 'John', text: 'Impressed with animations and UX.' }
]

export default function Testimonials() {
  return (
    <div className="overflow-hidden">
      <motion.div className="flex gap-6" drag="x" dragConstraints={{ left: -200, right: 0 }} whileTap={{ cursor: 'grabbing' }}>
        {data.map((d, i) => (
          <motion.div key={i} className="min-w-[260px] p-6 bg-white rounded-2xl shadow" whileHover={{ scale: 1.03 }}>
            <p className="mb-3">“{d.text}”</p>
            <div className="text-sm font-semibold">{d.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
