import React, { useEffect } from 'react'
import ProdSlider from '../components/prodInfo/ProdSlider'
import ProdSimilar from '../components/prodInfo/ProdSimilar'
import ProdDetail from '../components/prodInfo/ProdDetail'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import './styles/prodInfo.css'

const ProdInfo = () => {

  const {id}= useParams();

  //console.log(id);

  //const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products/1';
  
  const dispatch = useDispatch();
  
  const products = useSelector(store => store.products)

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);


  const product =  products?.filter(prod => prod.id===+id)[0];
  

  return (
    <div className='prodInfo'>
      <ProdSlider
        product = {product}
      />
      <ProdDetail
       product = {product}
      />
      <ProdSimilar 
       product = {product}
      />
    </div>
  )
}

export default ProdInfo
