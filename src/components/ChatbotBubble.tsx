'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatbotBubble() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="w-80 p-4 bg-white rounded-2xl shadow">
            <div className="flex justify-between items-center mb-3">
              <div className="font-semibold">Hello — I'm Saloni's Helper</div>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="text-sm">This is a frontend demo chatbot for the assignment. You can simulate messages here.</div>
            <div className="mt-3">
              <input placeholder="Type a message" className="w-full border px-3 py-2 rounded" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setOpen(s => !s)} className="h-14 w-14 rounded-full bg-sky-500 text-white shadow-lg">
        💬
      </button>
    </div>
  )
}
