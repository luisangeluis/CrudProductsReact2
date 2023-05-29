'use client';

import { configureStore } from '@reduxjs/toolkit';
import products from "./slices/products.slice";
import theme from "./slices/theme.slice";
import loader from "./slices/loader.slice";

export default configureStore({
  reducer: {
    products,
    theme,
    loader
  }
})