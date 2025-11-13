// data/supermarkets.ts

export interface Supermarket {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  isFavorite: boolean;
}

export const fakeSupermarkets: Supermarket[] = [
  {
    id: "s1",
    name: "Savar New Market",
    location: "Savar, Dhaka, Bangladesh",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: true,
  },
  {
    id: "s2",
    name: "Gulshan Super Shop",
    location: "Gulshan, Dhaka, Bangladesh",
    imageUrl: "/static/Sign up.png",
    isFavorite: false,
  },
  {
    id: "s3",
    name: "Bashundhara Hypermarket",
    location: "Bashundhara R/A, Dhaka, Bangladesh",
    imageUrl: "https://images.unsplash.com/photo-1583922606661-0822ed0bd916?q=80&w=777&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: true,
  },
  {
    id: "s4",
    name: "Mirpur Local Store",
    location: "Mirpur 10, Dhaka, Bangladesh",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
  {
    id: "s5",
    name: "Uttara Express Mart",
    location: "Uttara Sector 7, Dhaka, Bangladesh",
    imageUrl: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: true,
  },
  {
    id: "s6",
    name: "Dhanmondi Mega Shop",
    location: "Dhanmondi, Dhaka, Bangladesh",
    imageUrl: "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    isFavorite: true,
  },
  {
    id: "s7",
    name: "Mohakhali Bazaar",
    location: "Mohakhali, Dhaka, Bangladesh",
    imageUrl: "https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=578&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
  {
    id: "s8",
    name: "Tejgaon Family Mart",
    location: "Tejgaon, Dhaka, Bangladesh",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: true,
  },
];