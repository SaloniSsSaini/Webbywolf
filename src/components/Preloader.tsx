'use client'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 600)
    return () => clearTimeout(t)
  }, [])

  if (loaded) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="h-16 w-16 rounded-full border-4 border-sky-300 animate-spin mx-auto mb-4" />
        <div className="text-sm">Loading…</div>
      </div>
    </div>
  )
}
