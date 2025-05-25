export default function ProductFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8" data-aos="fade-up">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${activeCategory === category.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}