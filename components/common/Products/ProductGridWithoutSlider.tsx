// Example Parent Grid Component:

import { fakeProducts } from "@/components/config/products";
import { ProductCard } from "./Card";

// import { ProductCard } from '@/components/ProductCard';
// import { fakeProducts } from '@/data/products'; // Assuming your data file location

export const ProductGridWithoutSlider = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-16 p-4">
      {fakeProducts.map((product, index) => (
        <ProductCard
          key={product.id}
          // Pass all original props
          {...product}
          // *** Crucial for staggering ***
          index={index} 
        />
      ))}
    </div>
  );
};