import React from 'react';
import '../css/ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          
          <p className="product-category">{product.category}</p> 
          

        </div>
      ))}
    </div>
  );
};

export default ProductList;