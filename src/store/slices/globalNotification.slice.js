const { createSlice } = require("@reduxjs/toolkit");

const globalNotificationSlice = createSlice({
  name:"globalNotification",
  initialState:"",
  reducers:{
    setGlobalNotification:(state,action)=>action.payload
  }
});

export const {setGlobalNotification} = globalNotificationSlice.actions;
export default globalNotificationSlice.reducer;