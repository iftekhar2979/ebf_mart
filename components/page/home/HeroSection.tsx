'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="bg-[#F3F0F1] w-full py-6 md:py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="block text-black">SAVE UP TO</span>
            <span className="block text-pink-600 text-[48px] md:text-[64px] font-extrabold">
              50 % OFF
            </span>
            <span className="block text-black">SUPERMART SHOP</span>
          </h2>

          <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-base md:text-lg">
            Step into a world of exclusive discounts, the latest fashion trends, and fresh
            arrivals – all updated daily from trusted supermarkets and shops near you.
          </p>

          <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg rounded-full px-6 py-3">
            Shop Now
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 text-center md:text-left">
            <div>
              <p className="text-pink-600 font-bold text-xl">100+</p>
              <p className="text-sm text-gray-600">Registered Supermarkets</p>
            </div>
            <div>
              <p className="text-pink-600 font-bold text-xl">2,00+</p>
              <p className="text-sm text-gray-600">High-Quality Products</p>
            </div>
            <div>
              <p className="text-pink-600 font-bold text-xl">1000+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/static/hero-models.jpg" // Update this path as needed
            alt="Fashion models"
            width={500}
            height={500}
            className="max-h-[500px] w-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
