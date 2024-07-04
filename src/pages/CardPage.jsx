import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCardProdsThunk } from '../store/slices/cart.slice';
import ItemCart from '../components/cartPage/ItemCart';

const CardPage = () => {

  const cart = useSelector((store) => store.cartSlice);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCardProdsThunk());
  }, [])
  
  
  //console.log(cart);

  return (
    <div>
      {
        cart.map(prod => (
          <ItemCart
            key = {prod.id}
            prod={prod}
          />
        ))
      }
    </div>
  )
}

export default CardPage
