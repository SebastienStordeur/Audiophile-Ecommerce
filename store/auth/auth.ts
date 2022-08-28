import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  isAuthenticated: boolean;
  user: {
    id: string | null;
    displayableName: string | null;
    email: string | null;
  };
};

const initialState: SliceState = {
  isAuthenticated: false,
  user: {
    id: null,
    displayableName: null,
    email: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<any>) {
      const payload = action.payload;

      localStorage.setItem("token", payload.token); //payload.token
      //localstore date
      state.isAuthenticated = true;
      state.user.id = payload.id;
      state.user.displayableName = payload.displayName;
      state.user.email = payload.email;
    },
    checkIfTokenExists(state) {
      state.isAuthenticated = true;
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
