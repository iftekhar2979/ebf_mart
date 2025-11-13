// components/ViewAllButton.tsx
import Link from "next/link";

export default function ViewAllButton({link}:{link:string}) {
  return (
    <Link
      href={link}
      className="inline-block border  border-pink-400 text-pink-500 hover:bg-pink-50 font-medium px-6 py-2 rounded-full transition-all duration-200"
    >
      View All
    </Link>
  );
}
