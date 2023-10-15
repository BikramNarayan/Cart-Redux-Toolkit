import createReducer from "./slice/cartSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    cart: createReducer,
  },
  devTools: true,
});
