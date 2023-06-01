const { createSlice } = require("@reduxjs/toolkit");

export const loaderSlice = createSlice({
  name: "loader",
  initialState:{
    isLoading:false,
    isError:false,
    message:""
  },
  reducers: {
    setLoader: (state, action) => action.payload
  }
})

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;