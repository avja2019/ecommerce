import React from 'react'
import './styles/prodDetail.css'

const ProdDetail = ({product}) => {
  console.log("hola",product);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="prod-detail">
      <h1 className="prod-title">{product.title}</h1>
      <p className="prod-description">{product.description}</p>
      
      <p className="prod-info">
        <strong>Brand:</strong> {product.brand}
      </p>
      <p className="prod-info">
        <strong>Category:</strong> {product.category.name}
      </p>
      <p className="prod-price">Price: ${product.price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}

export default ProdDetail
