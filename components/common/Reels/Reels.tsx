'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import clsx from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FullscreenViewer from './FullScreenViewer'

gsap.registerPlugin(ScrollTrigger)

interface Reel {
  id: number
  videoSrc: string
  caption: string
  borderColor: string
}

const reelsData: Reel[] = [
  {
    id: 1,
    videoSrc: '/static/reels.mp4',
    caption: 'Public market Center',
    borderColor: 'border-pink-500',
  },
  {
    id: 2,
    videoSrc: '/static/reels.mp4',
    caption: 'Fresh Grocery Deals',
    borderColor: 'border-orange-400',
  },
  {
    id: 3,
    videoSrc: '/static/reels.mp4',
    caption: 'Supermart Aisle',
    borderColor: 'border-black',
  },
  {
    id: 4,
    videoSrc: '/static/reels.mp4',
    caption: 'Supermart Aisle',
    borderColor: 'border-black',
  },
]

const ReelsSection = () => {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Animate items as they scroll into view
  useEffect(() => {
    videoRefs.current.forEach((ref, i) => {
      if (!ref) return
      gsap.fromTo(
        ref.parentElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ref.parentElement,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          duration: 0.8,
          ease: 'power3.out',
        }
      )
    })
  }, [])

  // Auto-play/pause on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.6 }
    )

    videoRefs.current.forEach((v) => v && observer.observe(v))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-center text-pink-600 font-extrabold text-2xl md:text-3xl mb-8">
        EXPLORE REELS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {reelsData.map((reel, index) => (
          <div
            key={reel.id}
            className={clsx(
              'relative w-full h-[400px] overflow-hidden rounded-[35%] border-4',
              reel.borderColor
            )}
            onClick={() => setFullscreenIndex(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={reel.videoSrc}
              className="w-full h-full object-cover"
              muted
              playsInline
              controls={false}
            />
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-sm text-white bg-black/50 px-3 py-1 rounded-full z-20">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Fullscreen modal view */}
      {fullscreenIndex !== null && (
        <FullscreenViewer
          reels={reelsData}
          currentIndex={fullscreenIndex}
          onClose={() => setFullscreenIndex(null)}
        />
      )}
    </section>
  )
}

export default ReelsSection
