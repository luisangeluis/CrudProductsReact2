'use client';

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoader } from "./loader.slice";

const baseUrl = process.env.API_URL;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isError: false,
    message: "",
    isLoading: false
  },
  reducers: {
    setProducts: (state, action) => action.payload
  }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const getProducts = (message) => (dispatch) => {
  dispatch(setProducts({ isLoading: true }))

  axios.get("https://crud-products-node.onrender.com/api/v1/products")
    .then(res => {
      console.log(res.data.response)
      dispatch(setProducts({ products: res.data.response, isLoading: false, message }))

    })
    .catch(error => {
      console.log(error)
      dispatch(setProducts({ isError: true, isLoading: false, message: `${error.message}` }))
    });
}

export const deleteProduct = (productId) => (dispatch) => {
  dispatch(setProducts({ isError: false, isLoading: true }))

  axios.delete(`${baseUrl}/api/v1/products/${productId}`)
    .then(res => {
      console.log(res.data);
      dispatch(getProducts("Product deleted"));
    })
    .catch((error) => {
      console.log(error);
      dispatch(setProducts({ isError: true, isLoading: false,message:`${error.message}` }))

    });
}

export const createProduct = (data) => (dispatch) => {
  axios.post(`${baseUrl}/api/v1/products`, data)
    .then(res => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));
}


export const editProduct = (productId, data) => (dispatch) => {
  axios.put(`${baseUrl}/api/v1/products/${productId}`, data)
    .then(res => {
      console.log("edited");
    })
    .catch(error => console.log(error));
}