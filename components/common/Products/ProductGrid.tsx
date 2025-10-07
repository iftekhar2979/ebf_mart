'use client'

import React from 'react'
import { ProductCard } from './Card' // Adjust path as needed
import { products } from '@/components/config/products'
// import { products } from '@/data/products' // Import your product list

const ProductGrid = () => {
  return (
    <section className="py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">Trending Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            location={product.location}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
