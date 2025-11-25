'use client'
import { motion } from 'framer-motion'

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring' }} className="fixed inset-0 z-50 bg-white md:hidden">
      <div className="p-6">
        <button onClick={onClose} className="mb-6">Close</button>
        <nav className="flex flex-col gap-4">
          <a href="#features" onClick={onClose}>Features</a>
          <a href="#testimonials" onClick={onClose}>Testimonials</a>
          <a href="#contact" onClick={onClose}>Contact</a>
        </nav>
      </div>
    </motion.div>
  )
}
