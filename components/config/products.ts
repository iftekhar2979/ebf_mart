// data/supermarket-products.ts

export interface Product {
  id: number;
  image: string; // Your original field: '/static/1.jpg'
  title: string; // Your original field: 'Nimbler shirt', etc.
  rating: number; // Your original field
  location: string; // Your original field
  shopLogo: string; // Your original field
  price: number; // Your original field (used as the current discounted price)
  status: string; // Your original field
  
  // *** NEW FIELDS ADDED for VISUAL DESIGN ***
  discount: number; // e.g., 25 (for 25% Discount)
  originalPrice: number; // The struck-through price
}

export const supermarketDetails = {
    name: "Savar New Market",
    location: "Savar, Dhaka Bangladesh",
    hours: "Monday to Sunday from 09:00h to 22:00h",
    logoUrl: "/static/3536452.jpg", // Using your static logo path
}

// --- FAKE DATA (Restoring your titles and images, adding discount fields) ---

// Assuming the single price field is the final, discounted price
// I calculate the originalPrice assuming a 25% discount to match the visual (40 / 0.75 = ~53.33, rounded to 55)
// OR, I use the price difference shown in the image (40 vs 45), which is 11.1% off.

export const fakeProducts: Product[] = [
  // Row 1
  {
    id: 1,
    image: '/static/1.jpg',
    title: 'Nimbler shirt',
    rating: 4.5,
    location: 'Savar New Market',
    shopLogo: supermarketDetails.logoUrl,
    price: 40,
    status: 'Trending',
    discount: 11, // ~11% (40 vs 45)
    originalPrice: 45,
  },
  {
    id: 2,
    image: '/static/2.jpg',
    title: 'Formal White Shirt',
    rating: 4.2,
    location: 'Bashundhara City',
    shopLogo: supermarketDetails.logoUrl,
    price: 55,
    status: 'Trending',
    discount: 20,
    originalPrice: 69,
  },
  {
    id: 3,
    image: '/static/3.jpg',
    title: 'Slim Fit Shirt',
    rating: 4.7,
    location: 'Dhanmondi Plaza',
    shopLogo: supermarketDetails.logoUrl,
    price: 48,
    status: 'Trending',
    discount: 15,
    originalPrice: 56,
  },
  {
    id: 4,
    image: '/static/4.jpg',
    title: 'Casual Denim Tee',
    rating: 4.3,
    location: 'Savar New Market',
    shopLogo: supermarketDetails.logoUrl,
    price: 32,
    status: 'Trending',
    discount: 25,
    originalPrice: 42,
  },
  
  // Row 2 (Repeating to match the 8-item grid visual)
  {
    id: 5,
    image: '/static/1.jpg',
    title: 'Nimbler shirt',
    rating: 4.5,
    location: 'Savar New Market',
    shopLogo: supermarketDetails.logoUrl,
    price: 40,
    status: 'Trending',
    discount: 11,
    originalPrice: 45,
  },
  {
    id: 6,
    image: '/static/2.jpg',
    title: 'Formal White Shirt',
    rating: 4.2,
    location: 'Bashundhara City',
    shopLogo: supermarketDetails.logoUrl,
    price: 55,
    status: 'Trending',
    discount: 20,
    originalPrice: 69,
  },
  {
    id: 7,
    image: '/static/3.jpg',
    title: 'Slim Fit Shirt',
    rating: 4.7,
    location: 'Dhanmondi Plaza',
    shopLogo: supermarketDetails.logoUrl,
    price: 48,
    status: 'Trending',
    discount: 15,
    originalPrice: 56,
  },
  {
    id: 8,
    image: '/static/4.jpg',
    title: 'Casual Denim Tee',
    rating: 4.3,
    location: 'Savar New Market',
    shopLogo: supermarketDetails.logoUrl,
    price: 32,
    status: 'Trending',
    discount: 25,
    originalPrice: 42,
  },
];