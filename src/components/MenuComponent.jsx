import React, { useState, useEffect, useMemo } from "react";
import SkeletonCategories from "./SkeletonCategories.jsx";
import ModalSelectedDish from "./ModalSelectedDish.jsx";
import MenuItems from "./MenuItems.jsx";
import Categories from "./Categories.jsx";
import { fallbackData } from "../fallback-data/fallbackData";

const MenuComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuItems, setMenuItems] = useState(fallbackData.menu);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbw804ugMBiaBvneFHoiJ81Wr3desk36lHPerIhkRRjbEnwCQoe7hmXntaI3kXyHEK294w/exec",
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setMenuItems(data.menu);

        const categories = [...new Set(data.menu.map((item) => item.category))];
        setUniqueCategories(categories);
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return menuItems;
    }
    return menuItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, menuItems]);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const selectCategoryScrollTop = (category) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // if (isLoading) return <SkeletonMenu />;

  if (hasError) return <ErrorMenuFetch />;

  return (
    <div className="mt-7">
      {/* Loading  for updated data */}
      {isLoading && <SkeletonCategories />}
      {/* Category Tabs - Static, always visible */}
      {!isLoading && (
        <Categories
          uniqueCategories={uniqueCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={selectCategoryScrollTop}
        />
      )}
      {/* Menu Items - Filtered based on selected category */}
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MenuItems openModal={openModal} filteredItems={filteredItems} />
      </div>
      {/* Modal for displaying item details */}
      {selectedItem && (
        <ModalSelectedDish
          selectedItem={selectedItem}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default MenuComponent;
