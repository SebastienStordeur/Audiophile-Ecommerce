import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  token: string | null;
  isAuthenticated: boolean;
  user: {
    displayableName: string | null;
    email: string | null;
  }
};

const initialState: SliceState = {
  token: null,
  isAuthenticated: false,
    user: {
      displayableName: null, 
      email: null
    }
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

      //store name, email in redux storagetrue
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
