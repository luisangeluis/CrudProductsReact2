import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
      console.log(res.data.response);
      const products = res.data.response
      dispatch(setProducts(products))
    })
    .catch(error => {
      console.log(error);
    })
}