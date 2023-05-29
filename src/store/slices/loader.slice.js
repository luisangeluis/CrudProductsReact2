const { createSlice } = require("@reduxjs/toolkit");

export const loaderSlice = createSlice({
  name: "loader",
  initialState: null,
  reducers: {
    setLoader: (state, action) => action.payload
  }
})

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;