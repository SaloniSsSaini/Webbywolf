"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center text-2xl"
      >
        💬
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-80 p-4 bg-white rounded-2xl shadow-xl absolute bottom-20 right-0"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="font-semibold">Hello — I'm Saloni's Helper</div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 text-sm">
              How can I assist you today?
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
