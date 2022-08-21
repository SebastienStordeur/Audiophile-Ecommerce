import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  
};

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
