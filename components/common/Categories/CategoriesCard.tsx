"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Category } from "./data/categories";

gsap.registerPlugin(ScrollTrigger);

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Entrance animation
    gsap.fromTo(
      el,
      { opacity: 0, y: 50, scale: 2 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      }
    );
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.className =
        "absolute bg-white rounded-full mix-blend-overlay pointer-events-none";
      ripple.style.width = ripple.style.height = "100px";
      ripple.style.left = `${e.nativeEvent.offsetX - 50}px`;
      ripple.style.top = `${e.nativeEvent.offsetY - 50}px`;
      ripple.style.opacity = "0.3";
      ripple.style.transform = "scale(0)";
      ripple.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";

      card.appendChild(ripple);

      gsap.to(ripple, {
        scale: 3,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <Link href={category.link}>
      <Card
        ref={cardRef}
        className="group hover:shadow-lg transition-all duration-300 rounded-2xl border border-gray-100 bg-white hover:-translate-y-2 hover:border-pink-300 relative overflow-hidden"
      >
        <CardContent className="flex flex-col items-center justify-center p-6 space-y-3 w-full max-w-[342px] aspect-[342/226] cursor-pointer">
          <div className="relative w-24 h-24">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <p className="text-gray-800 font-semibold text-sm sm:text-base group-hover:text-pink-600 transition-colors duration-300">
            {category.name}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
