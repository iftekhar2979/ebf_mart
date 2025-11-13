export interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Shirt",
    image: "/static/shits.png",
    link: "/category/shirt",
  },
  {
    id: 2,
    name: "Pant",
    image: "/static/pants.jpg",
    link: "/category/pant",
  },
  {
    id: 3,
    name: "Dress",
    image: "/static/dress.png",
    link: "/category/dress",
  },
  {
    id: 4,
    name: "Shoes",
    image: "/static/shoe.png",
    link: "/category/shoes",
  },
  {
    id: 5,
    name: "Accessories",
    image: "/static/accessory.png",
    link: "/category/accessories",
  },
  {
    id: 6,
    name: "All",
    image: "/static/Frame (1).png",
    link: "/category/all",
  },
];
