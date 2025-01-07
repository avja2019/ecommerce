
import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import ProdCard from '../homePage/ProdCard';
import './styles/prodSimilar.css'

const ProdSimilar = ({product}) => {

  //console.log(product);
  
  const [items, getItems] = useFetch();

  


  useEffect(() => {
    const path = `/products?categoryId=${product.categoryId}`;
    getItems(path);
  }, []);
  
  const cbfilter = (prod) => {
    return prod.id !== product.id;
  }
  

  return (
    <div className='prodSimilar'>
      <h2 className='prodSimilar__title'>Discover similar items</h2>
      <div className='homepage__container'>
        {
          items?.filter(cbfilter).map(prod => (
            <ProdCard
                key= {prod.id}
                prod= {prod}
              />
          ))
        }
      </div>  
    </div>
  )
}

export default ProdSimilar