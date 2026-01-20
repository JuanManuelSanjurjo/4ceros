import React, { useState, useEffect } from "react";

const MenuComponent = ({ menuItems, uniqueCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter menu items based on selected category
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
    console.log(selectedCategory);
  }, []);

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
          All
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
          <div key={index} className="menu-card card-hover">
            <img
              src={item?.imageUrl || "https://placehold.co/600x400"}
              alt={item?.name}
              className="menu-image"
            />
            <div className="menu-content">
              <div className="flex justify-between items-start mb-2">
                <h3 className="menu-name">{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <span className="menu-category">{item.category}</span>
              <p className="menu-description">{item.description}</p>
              <button
                className="btn btn-primary mt-4 w-full"
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedItem.name}
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img
                    src={
                      selectedItem.imageUrl || "https://placehold.co/600x400"
                    }
                    alt={selectedItem.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-yellow-600 font-semibold mb-2">
                    {selectedItem.category}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {selectedItem.description}
                  </p>
                  <p className="text-xl font-bold text-black">
                    {selectedItem.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
