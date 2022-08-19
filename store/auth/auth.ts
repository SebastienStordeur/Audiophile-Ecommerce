import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: SliceState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      //localstore token
      localStorage.setItem("token", action.payload); //payload.token
      //localstore date
      //store the token
      state.token = action.payload; //.token
      state.isAuthenticated = true;
      //store data user
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("expiration date");
      return (state = initialState);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
