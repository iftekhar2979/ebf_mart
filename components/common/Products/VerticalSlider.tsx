"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductCard } from "./Card";

interface Product {
  id: string;
  image: string;
  title: string;
  rating: number;
  location: string;
  price: number;
  shopLogo:string;
  status: string;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductSlider({ products }: ProductListProps) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        slidesPerView={3} // Show 3 cards at a time
        spaceBetween={20} // Space between slides
        navigation
        pagination={{ clickable: true }}
        mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel]}
        className="py-8"
           breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 24 }, // 👈 4 on large screens
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center ">
            <ProductCard
              image={product.image}
              title={product.title}
              rating={product.rating}
              location={product.location}
              price={product.price}
              shopLogo={product.shopLogo}
              status={product.status}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
