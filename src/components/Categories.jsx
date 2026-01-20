export default function Categories({
  uniqueCategories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-12">
      <button
        className={`category-tab ${
          selectedCategory === "all"
            ? "active bg-black text-white"
            : "inactive bg-gray-200 text-gray-700"
        }`}
        onClick={() => setSelectedCategory("all")}
      >
        Todo
      </button>
      {uniqueCategories.map((category) => (
        <button
          key={category}
          className={`category-tab ${
            selectedCategory === category
              ? "active bg-black text-white"
              : "inactive bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
