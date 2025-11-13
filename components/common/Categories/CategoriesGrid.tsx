import CategoryCard from "./CategoriesCard";
import { categories } from "./data/categories";

export default function CategoryGrid() {
  return (
    <section className="bg-gray-50 py-10 px-4 rounded-3xl ">
      <h2 className="text-center text-xl sm:text-2xl font-bold text-pink-600 mb-8">
        BROWSE BY PRODUCT CATEGORY
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
