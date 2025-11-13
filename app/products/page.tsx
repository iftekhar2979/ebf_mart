// app/filter/page.tsx

'use client';

import * as React from 'react';
import { SlidersHorizontal, Shirt, Sparkles } from 'lucide-react'; // Using Shirt for category, Sparkles for trending icon
import gsap from 'gsap';

// // --- Import Reusable Components & Data ---
// import { Breadcrumbs } from '@/components/ui/breadcrumbs';
// import { ProductCard } from '@/components/ProductCard'; // Your animated ProductCard
// import { FilterSection } from '@/components/FilterSection';
// import { PriceRangeSlider } from '@/components/PriceRangeSlider';
// import { fakeProducts, Product } from '@/data/supermarket-products'; // Your product data
import { Button } from '@/components/ui/button'; // shadcn/ui Button
import { fakeProducts } from '@/components/config/products';
import { Breadcrumbs } from '@/components/ui/Breadcumbs';
import { FilterSection } from '@/components/page/products/FilterSection';
import { PriceRangeSlider } from '@/components/page/products/PriceRangeSlider';
import { ProductCard } from '@/components/common/Products/Card';
import { AppPromoBanner } from '@/components/common/banner/AppPromoBanner';
import { promoData } from '@/components/common/banner/data/promoData';
// ----------------------------------------

// Breadcrumbs data
const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Filter', href: '/filter' },
];

// Filter category data
const categoryFilters = [
  { label: 'All', value: 'all' },
  { label: 'Pant', value: 'pant' },
  { label: 'Shirt', value: 'shirt' },
  { label: 'Shoe', value: 'shoe' },
  { label: 'Dress', value: 'dress' },
  { label: 'Accessories', value: 'accessories' },
];

export default function FilterPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [priceRange, setPriceRange] = React.useState({ min: 60, max: 200 }); // Initial price range from image
  const pageRef = React.useRef<HTMLDivElement>(null);

  // GSAP Page Entrance Animation
//   React.useEffect(() => {
//     if (pageRef.current) {
//       gsap.from(pageRef.current, { 
//         opacity: 0, 
//         y: 20, 
//         duration: 0.8, 
//         ease: 'power3.out' 
//       });
//     }
//   }, []);

  const handleCategorySelect = (value: string) => {
    setSelectedCategory(value);
    console.log(`Selected category: ${value}`);
    // In a real app, you'd trigger a data fetch/filter here
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
    console.log(`Price range: ${min} - ${max}`);
    // In a real app, you'd trigger a data fetch/filter here
  };

  const applyFilters = () => {
    console.log('Applying filters:', { selectedCategory, priceRange });
    // Trigger actual filtering/API call here
  };

  // Filter products based on selected category and price (for demonstration)
//   const filteredProducts = fakeProducts.filter(product => {
//     const matchesCategory = selectedCategory === 'all' || 
//                             product.title.toLowerCase().includes(selectedCategory); // Simple match for demo
//     const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
//     return matchesCategory && matchesPrice;
//   });
//   console.log(filteredProducts)

  return (
    <div ref={pageRef} className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />

        {/* Main content grid: Sidebar + Products */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Filter Sidebar */}
          <aside className="md:col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-fit sticky top-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <SlidersHorizontal className="h-6 w-6 mr-3 text-pink-600" />
                Filters
              </h2>
              <Button variant="ghost" className="text-gray-500 text-sm hover:text-pink-600 p-0 h-auto">
                Clear All
              </Button>
            </div>

            {/* Category Filter Section */}
            <FilterSection
              title="Category"
              items={categoryFilters}
              onSelect={handleCategorySelect}
              selectedItem={selectedCategory}
              icon={Sparkles} // Using Sparkles as a placeholder icon for category section title
            />

            {/* Price Range Filter */}
            <PriceRangeSlider
              min={0}
              max={500}
              initialMin={priceRange.min}
              initialMax={priceRange.max}
              onChange={handlePriceRangeChange}
            />

            {/* Apply Filter Button */}
            <Button 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-full mt-6"
              onClick={applyFilters}
            >
              Apply Filter
            </Button>
          </aside>

          {/* Product Grid */}
          <main className="md:col-span-3 lg:col-span-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{fakeProducts.length} Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
              {fakeProducts.length > 0 ? (
                fakeProducts.map((product, index) => (
                  <ProductCard key={product.id} {...product} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 p-8 bg-gray-50 rounded-lg">
                  No products found matching your filters.
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      <div className="mx-16 my-10">
      
                <AppPromoBanner
              imageUrl={promoData.imageUrl}
              title={promoData.title}
              subtitle={promoData.subtitle}
              ctaLabel={promoData.ctaLabel}
              ctaLink={promoData.ctaLink}
            />
            </div>
    </div>
  );
}