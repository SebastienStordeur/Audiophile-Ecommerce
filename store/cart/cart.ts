import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  items: {
    id: string;
    price: number;
    quantity: number;
    totalPrice: number;
    name: string;
  }[];
  totalQuantity: number;
  totalPrice: number;
};

const initialState: SliceState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<any>) {
      console.log(action.payload.quantity);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          name: newItem.name,
        });
      } else {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItemFromCart(state, action: PayloadAction<any>) {
      const id = action.payload;
      const existingItem: any = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    resetCart(state) {
      return (state = initialState);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
