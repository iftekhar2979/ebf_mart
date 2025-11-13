'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaStar, FaRegThumbsUp } from 'react-icons/fa'
import Image from 'next/image'

type ProductCardProps = {
  image: string
  title: string
  rating: number
  location: string
  price: number
  status?: string
  shopLogo:string
}

export const ProductCard = ({
  image,
  title,
  rating,
  location,
  price,
  status = 'Trending',
  shopLogo
}: ProductCardProps) => {
  return (
    <Card className="relative w-full max-w-xs rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      {/* Trending Badge */}
      
        <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 flex items-center gap-1">
          <span className="bg-white text-pink-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
            ★
          </span>
          {status}
        </div>
      

      {/* Product Image */}
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-52 object-cover"
      />

      <CardContent className="pt-4 px-4 pb-2">
        {/* Title + Like */}
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <FaRegThumbsUp className="text-pink-600 text-lg cursor-pointer" />
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

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <Image
            src={shopLogo} // Optional: replace with location icon or avatar
            alt="location"
            width={20}
            height={20}
            className="rounded-full"
          />
          <span>{location}</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center px-4 pb-4">
        <span className="text-pink-600 font-bold text-xl">৳ {price}</span>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full text-sm">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}
