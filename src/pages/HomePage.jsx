import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice';
import ProdCard from '../components/homePage/ProdCard';
import './styles/homepage.css';
import FilterPrice from '../components/homePage/FilterPrice';
import FilterSelect from '../components/homePage/FilterSelect';

const HomePage = () => {

  const [inputValue, setInputValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [inputPrice, setinputPrice] = useState({
    min: 0,
    max: Infinity,
  });
  
  const [menu, setMenu] = useState(false);
  const products = useSelector((store) => store.products);

  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const textInput = useRef();

  const handleChange = () => {
    setInputValue(textInput.current.value.trim().toLowerCase());
  }
  
  const cbFilter = (prod) => {
    const name = prod.title.toLowerCase().includes(inputValue);
    const price = prod.price <= +inputPrice.max && +prod.price >= +inputPrice.min;
    const category = categoryValue === '' ? true : prod.categoryId === +categoryValue;
    return name && price && category;
  }

  const handleMenu = () => {
    setMenu(!menu)
  }
  
  return (
    <div className='homepage'>
      
      <div className={`home__filters ${menu && 'active'}`}>
        <button onClick={handleMenu}>X</button>
        <FilterPrice
          setinputPrice = {setinputPrice}
        />
        <FilterSelect 
          setCategoryValue = {setCategoryValue}
        />
      </div>
      <div>
          <input ref={textInput} onChange={handleChange} type="text" />
          <button>🔍</button>
      </div>
      <button className={menu && 'active'} onClick={handleMenu}>Menu</button>
      <div className='homepage__container'>
        {
          products?.filter(cbFilter).map((prod) => 
            (
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

export default HomePage
