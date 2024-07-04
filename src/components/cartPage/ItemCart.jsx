import React from 'react';
import './styles/itemCart.css';

const ItemCart = ({ prod }) => {

    const handleDelete = () => {

    }

    return (
      <article className="cart-item">
        <img src={prod.product.images[0].url} alt="product image" className="cart-item-image" />
        <div className="cart-item-info">
          <h3 className="cart-item-title">{prod.product.title}</h3>
          <div className="cart-item-quantity">
            <button className="cart-item-quantity-button">-</button>
            <input type="number" value={prod.quantity} className="cart-item-quantity-input" />
            <button className="cart-item-quantity-button">+</button>
          </div>
          <button onClick={handleDelete}  className="cart-item-remove">Delete</button>
          <p className="cart-item-price">Total: ${prod.product.price}</p>
          
        </div>
      </article>
    );
  };

export default ItemCart
