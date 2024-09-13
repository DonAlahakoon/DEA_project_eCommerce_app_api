import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartFromLocalStorage: (state, action) => {
      return [...state, ...action.payload];
    },
    checkoutCart: (state, action) => {
      return [];
    },
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      return state.filter((farmproducts) => action.payload !== farmproducts.id);
    },
    increaseQty: (state, action) => {
      return state.map((farmproducts) =>
        farmproducts.id === action.payload ? { ...farmproducts, qty: farmproducts.qty + 1 } : farmproducts
      );
    },
    decreaseQty: (state, action) => {
      return state.map((farmproducts) =>
        farmproducts.id === action.payload ? { ...farmproducts, qty: farmproducts.qty - 1 } : farmproducts
      );
    },
  },
});

export const {
  setCartFromLocalStorage,
  checkoutCart,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = CartSlice.actions;
export default CartSlice.reducer;
