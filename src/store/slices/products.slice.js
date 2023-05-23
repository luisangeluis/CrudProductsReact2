'use client';

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = process.env.API_URL;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    message: "",
    isError: false
  },
  reducers: {
    setProducts: (state, action) => action.payload
  }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const getProducts = () => (dispatch) => {
  console.log("getProducts");
  axios.get("https://crud-products-node.onrender.com/api/v1/products")
    .then(res => {
      const products = res.data.response;
      console.log(res);
      dispatch(setProducts({ products: products, message: "", isError: false }))
    })
    .catch(error => console.log(error));
}


export const createProduct = (data) => (dispatch) => {
  axios.post(`${baseUrl}/api/v1/products`, data)
    .then(res => {
      // dispatch(getProducts());
    })
    .catch((error) => console.log(error));
}

export const deleteProduct = (productId) => (dispatch) => {
  axios.delete(`${baseUrl}/api/v1/products/${productId}`)
    .then(res => {
      dispatch(getProducts());
    })
    .catch((error) => console.log(error));
}

export const editProduct = (productId, data) => (dispatch) => {
  axios.put(`${baseUrl}/api/v1/products/${productId}`, data)
    .then(res => {
      // dispatch(getProducts());
    })
    .catch(error => console.log(error));
}