'use client';

const { createSlice } = require("@reduxjs/toolkit");

export const themeSlice = createSlice({
  name: "theme",
  initialState: null,
  reducers: {
    setTheme: (state, action) => action.payload
  }

});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

