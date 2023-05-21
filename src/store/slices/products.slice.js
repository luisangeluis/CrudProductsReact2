'use client';

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = process.env.API_URL;

export const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProducts: (state, action) => action.payload
  }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const getProducts = () => (dispatch) => {
  return axios.get("https://crud-products-node.onrender.com/api/v1/products")
    .then(res => {
      const products = res.data.response
      dispatch(setProducts(products))
    })
    .catch(error => console.log(error));
}

export const createProduct = (data) => (dispatch) => {
  return axios.post(`${baseUrl}/api/v1/products`, data)
    .then(res => {
      dispatch(getProducts());
    })
    .catch((error) => console.log(error));
}

export const deleteProduct = (productId) => (dispatch) => {
  return axios.delete(`${baseUrl}/api/v1/products/${productId}`)
    .then(res => {
      dispatch(getProducts());
    })
    .catch((error) => console.log(error));
}

export const editProduct=(productId,data)=>(dispatch)=>{
  return axios.put(`${baseUrl}/api/v1/products/${productId}`,data)
    .then(res=>{
      dispatch(getProducts());
    })
    .catch(error=>console.log(error));
}