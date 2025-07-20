import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";
import { sampleProducts } from "./components/ProductList"

const allCategories = [
  "All",
  ...new Set(sampleProducts.map((product) => product.category)),
];

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);
  // TODO: Implement state for cart management
  const [cart, setCart] = useState([]);
  // TODO: Implement state for category filtering
  const [category, setCategory] = useState("All");

  // Filtered Products functionality
  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category);

  const productsToShow = filteredProducts.length > 0 ? filteredProducts : [];
  // Add/remove cart functionality
  const handleCartToggle = (product) => {
    setCart((previous) =>
      previous.find((item) => item.id === product.id)
        ? previous.filter((item) => item.id !== product.id)
        : [...previous, product]
    );
  };

  // Category Change functionality
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Theme
  const appClass = darkMode ? "dark-mode" : "light-mode";

  return (
    <div
      className={appClass}
      style={{
        backgroundColor: darkMode ? "#242424" : "#fff",
        color: darkMode ? "#fff" : "#213547",
        minHeight: "100vh",
        transition: "background 0.2s, color 0.2s",
      }}
    >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* TODO: Implement category filter dropdown */}

      <label htmlFor="category">Filter by Category: </label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        {allCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Display initial sample products */}
      <ProductList
        products={productsToShow}
        cart={cart}
        handleCartToggle={handleCartToggle}
      />

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;