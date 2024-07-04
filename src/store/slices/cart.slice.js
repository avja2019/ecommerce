import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bearerToken from "../../utils/bearerToken";
const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1';

    const cart =  createSlice({
        name: 'cart',
        initialState: [],
        reducers: {
            setCart: (_state, action) => action.payload,
            addCart: (state, {payload}) => {state.push(payload)},
        }
    } );

    export const {setCart, addCart} = cart.actions;

    export default cart.reducer;


    export const getCardProdsThunk = () => (dispatch) => {
        const url = `${urlBase}/cart`;
        axios.get(url, bearerToken())
            .then(res => {
                dispatch(setCart(res.data))    
                console.log(res.data); 
            } )
            .catch(err => console.log(err));
    }

    export  const postProductsThunk = (data) => (dispatch) => {
        const url = `${urlBase}/cart`;
        axios.post(url, data, bearerToken())
            .then(res => {
                dispatch(addCart(res.data))
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }