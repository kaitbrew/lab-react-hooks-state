// In ProductList.jsx
import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: '$1.00', inStock: true },
  { id: 2, name: 'Milk', category: 'Dairy', price: '$2.50', inStock: true },
  { id: 3, name: 'Bread', category: 'Bakery', price: '$3.00', inStock: true }
];

const ProductList = ({ products = [], cart, handleCartToggle }) => {
  return (
    <div>
      <h2>Available Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => {
            const inCart = cart.some(item => item.id === product.id);
            return (
              <ProductCard 
                key={product.id} 
                product={product} 
                inCart={inCart}
                handleCartToggle={handleCartToggle}
              />
            );
          })}
        </div>
      )}
    </div>
  )
}

export default ProductList