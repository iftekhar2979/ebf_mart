import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface Reel {
  id: number
  videoSrc: string
  caption: string
  borderColor: string
}

interface Props {
  reels: Reel[]
  currentIndex: number
  onClose: () => void
}

const FullscreenViewer = ({ reels, currentIndex, onClose }: Props) => {
  const [index, setIndex] = useState(currentIndex)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
    }
  }, [])

  const handlePrev = () => setIndex((prev) => (prev - 1 + reels.length) % reels.length)
  const handleNext = () => setIndex((prev) => (prev + 1) % reels.length)

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full h-full max-w-3xl max-h-full mx-auto">
        <video
          key={reels[index].id}
          src={reels[index].videoSrc}
          className="w-full h-full object-contain"
          controls
          autoPlay
        />
        <button
          onClick={(e) => {
            e.stopPropagation()
            handlePrev()
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
        >
          ◀
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleNext()
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
        >
          ▶
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default FullscreenViewer
