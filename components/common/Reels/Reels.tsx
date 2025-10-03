'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import clsx from 'clsx'

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
]

const ReelsSection = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const currentReel = reelsData[currentReelIndex]

  const handleVideoEnded = () => {
    setIsLoading(true)
    const nextIndex = (currentReelIndex + 1) % reelsData.length
    setCurrentReelIndex(nextIndex)
  }

  const handleVideoLoaded = () => {
    setIsLoading(false)
    videoRef.current?.play()
  }

  useEffect(() => {
    setIsLoading(true)
  }, [currentReelIndex])

  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-center text-pink-600 font-extrabold text-2xl md:text-3xl mb-8">
        EXPLORE REELS
      </h2>

      <div className="flex justify-center">
        <div
          className={clsx(
            'w-72 h-[420px] relative rounded-[35%] overflow-hidden border-4 transition-all duration-300',
            currentReel.borderColor
          )}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10 bg-opacity-80">
              <FaSpinner className="animate-spin text-pink-500 text-4xl" />
            </div>
          )}

          <video
            key={currentReel.id}
            ref={videoRef}
            src={currentReel.videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            onLoadedData={handleVideoLoaded}
            playsInline
          />

          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-sm text-white bg-black/50 px-3 py-1 rounded-full z-20">
            {currentReel.caption}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ReelsSection
