'use client'
import { useEffect, useRef } from 'react'

export default function ParallaxLayer() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      ref.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none -z-10">
      <div className="absolute -left-20 top-10 w-96 h-96 rounded-full bg-gradient-to-tr from-sky-200 to-indigo-100 opacity-70 blur-3xl" />
    </div>
  )
}
