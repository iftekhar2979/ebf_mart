// components/ProductCard.tsx

'use client'

import * as React from 'react' // Import React for hooks and ref
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaStar, FaRegThumbsUp } from 'react-icons/fa'
import Image from 'next/image'

// --- GSAP Import ---
import gsap from 'gsap'
import Link from 'next/link'
// -------------------

type ProductCardProps = {
  image: string
  title: string
  rating: number
  location: string
  price: number
  status?: string
  shopLogo: string
  // *** NEW: Index for staggered animation ***
  index: number 
}

export const ProductCard = ({
  image,
  title,
  rating,
  location,
  price,
  status = 'Trending',
  shopLogo,
  index, // Destructure index
}: ProductCardProps) => {
  
  // 1. Create a ref for the Card element
  const cardRef = React.useRef<HTMLDivElement>(null)

  // 2. Implement GSAP Animation in useEffect
  // React.useEffect(() => {
  //   if (cardRef.current) {
  //     // GSAP Animation: Fade in from slightly below
  //     gsap.from(cardRef.current, { 
  //       opacity: 0, 
  //       y: 50, 
  //       duration: 0.6, 
  //       delay: index * 0.1, // Staggered delay based on index
  //       ease: 'power3.out',
  //     })
  //   }
  // }, [index]) // Rerun if index changes (though unlikely in a static grid)

  return (
    <Card 
      ref={cardRef} // 3. Attach the ref to the element you want to animate
      className="relative w-full max-w-xs rounded-xl overflow-hidden border border-gray-200 shadow-sm 
                 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]" // Added hover effect for extra polish
    >
      {/* Trending Badge */}
      <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 flex items-center gap-1">
        <span className="bg-white text-pink-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
          ★
        </span>
        {status}
      </div>
      
      {/* Like Button (Top Right) */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/70 hover:bg-white z-10 text-pink-600"
        aria-label="Like product"
        onClick={(e) => { e.stopPropagation(); console.log(`Liked product: ${title}`); }}
      >
        <FaRegThumbsUp className="text-lg" />
      </Button>

      {/* Product Image */}
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-52 object-cover"
      />

      <CardContent className="pt-4 px-4 pb-2">
        {/* Title */}
        <div className="flex justify-between items-center mb-1">
          <Link href={`/products/${index}`} className="text-lg font-semibold text-gray-800">{title}</Link>
        </div>

        {/* Rating */}
        <div className="flex items-center text-sm text-pink-600 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.floor(rating) ? 'text-pink-600' : 'text-gray-300'}
            />
          ))}
          <span className="ml-2 text-gray-600 font-medium">{rating.toFixed(1)}/5</span>
        </div>

        {/* Location (Shop Logo and Name) */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
             <Image
                src={shopLogo}
                alt={location}
                fill // Use fill for better optimization with fixed-size container
                style={{ objectFit: 'cover' }}
             />
          </div>
          <span>{location}</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center px-4 pb-4">
        <span className="text-pink-600 font-bold text-xl">৳ {price}</span>
        <Button 
          className="bg-pink-600 hover:bg-pink-700 text-white rounded-full text-sm"
          onClick={(e) => { e.stopPropagation(); console.log(`Added ${title} to cart`); }}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}