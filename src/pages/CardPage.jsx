import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCardProdsThunk } from '../store/slices/cart.slice';
import ItemCart from '../components/cartPage/ItemCart';
import './styles/cartpage.css';

const CardPage = () => {

  const cart = useSelector((store) => store.cartSlice);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCardProdsThunk());
  }, [])
  
  
  //console.log(cart);
  const products = cart.reduce(
    (cv, prod,) => cv+=prod.quantity,0
  );

  const total = cart.reduce(
    (cv, prod,) => cv+= prod.quantity*prod.product.price,0
  );


  return (
    <div className='cartpage'>
      <div className='cartpage_container'>
        {
          cart.map(prod => (
            <ItemCart
              key = {prod.id}
              prod={prod}
            />
          ))
        }
      </div>
      <div>
        <ul>
          <li><span>Products: </span><span>{products}</span></li>
          <li><span>Total: </span><span>$ {total}</span></li>
        </ul>
        <button>Buy all Products</button>
      </div>
    </div>
    
  )
}

export default CardPage
