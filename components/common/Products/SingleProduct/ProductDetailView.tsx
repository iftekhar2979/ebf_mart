// components/ProductDetailView.tsx

'use client';

import * as React from 'react';
import gsap from 'gsap';
import { ProductImageGallery } from './ProductImageGallery';
import { ProductInfoSection } from './ProductInfoSection';
import { ProductVariationSelectors } from './ProductVariationSection';
import { ProductCTA } from './ProductCta';

// --- MOCK DATA STRUCTURE (Keeping it here for context/importing) ---
interface Color { name: string; hex: string; }
interface ProductDetail {
  id: string;
  name: string;
  description: string;
  rating: number;
  mainImageUrl: string;
  thumbnailUrls: string[];
  shopLogo: string;
  colors: Color[];
  sizes: string[];
  stock: number;
  price: number;
}

const mockProduct: ProductDetail = {
  id: 'p1',
  name: 'Nimbler Shirt',
  description: 'Elevate your wardrobe with this timeless men\'s dress shirt, designed for comfort and style. Crafted from high-quality, breathable fabric, it offers a smooth finish and a crisp look perfect for both formal and casual occasions. Available in multiple colors, it features a classic collar, button-down front, and a tailored fit. Ensures a polished appearance all day long. Ideal for office wear, business meetings, and special events.',
  rating: 4.5,
  mainImageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  thumbnailUrls: [
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  shopLogo: '/static/3536452.jpg',
  colors: [
    { name: 'White', hex: '#EBEBEB' },
    { name: 'Navy', hex: '#1C3144' },
    { name: 'Dark Green', hex: '#4A6B5F' },
  ],
  sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  stock: 24,
  price: 40,
};

// --- Main Component ---

export const ProductDetailView: React.FC = () => {
  const product = mockProduct; 
  
  // State for selections (maintained in the parent view)
  const [mainImage, setMainImage] = React.useState(product.mainImageUrl);
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0].hex);
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[2]);
  const [quantity, setQuantity] = React.useState(1);
  
  // Refs for GSAP animation
  const imageGalleryRef = React.useRef<HTMLDivElement>(null);
  const infoSectionRef = React.useRef<HTMLDivElement>(null);

//   // GSAP Entrance Animation
//   React.useEffect(() => {
//     gsap.from([imageGalleryRef.current, infoSectionRef.current], {
//       opacity: 0,
//       y: 30,
//       duration: 0.8,
//       stagger: 0.2,
//       ease: 'power3.out',
//     });
//   }, []);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} x ${product.name} (Size: ${selectedSize}, Color: ${selectedColor}) to cart`);
    // Add complex cart logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Breadcrumbs */}
      <div className="mb-6">
        <span className="text-sm text-gray-500">
          Home &gt; Shop &gt; Men &gt; <span className="font-semibold text-pink-600">T-shirts</span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* --- LEFT COLUMN: Image Gallery --- */}
        <ProductImageGallery
          ref={imageGalleryRef}
          mainImageUrl={mainImage}
          thumbnailUrls={product.thumbnailUrls}
          productName={product.name}
          setMainImage={setMainImage}
        />

        {/* --- RIGHT COLUMN: Product Info & Actions --- */}
        <div ref={infoSectionRef}>
          
          <ProductInfoSection
            name={product.name}
            description={product.description}
            rating={product.rating}
            price={product.price}
            stock={product.stock}
            shopLogo={product.shopLogo}
          />
          
          <ProductVariationSelectors
            colors={product.colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            sizes={product.sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />

          <ProductCTA
            quantity={quantity}
            setQuantity={setQuantity}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};