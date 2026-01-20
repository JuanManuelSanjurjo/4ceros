import React, { useState, useEffect } from "react";
import SkeletonMenu from "./SkeletonMenu.jsx";
import FoodModal from "./FoodModal.jsx";

const MenuComponent = ({ menuItems, uniqueCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonMenu />;
  }

  return (
    <div className="mt-12">
      {/* Category Tabs - Static, always visible */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
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

      {/* Menu Items - Filtered based on selected category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className={`menu-card card-hovern ${!item.stock ? "hidden" : item.stock < 1 ? "grayscale" : ""}`}
          >
            <img
              src={item?.imageUrl || "https://placehold.co/600x400"}
              alt={item?.name}
              className={`menu-image`}
            />
            <div className="menu-content">
              <div className="flex justify-between items-start mb-2">
                <h3 className="menu-name">{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <span className="menu-category">{item.category}</span>
              <p className="menu-description">{item.description}</p>
              <button
                className="btn btn-primary mt-4 w-full py-3 font-semibold"
                onClick={() => openModal(item)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying item details */}
      {selectedItem && (
        <FoodModal selectedItem={selectedItem} closeModal={closeModal} />
      )}
    </div>
  );
};

export default MenuComponent;
