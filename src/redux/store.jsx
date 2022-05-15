import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "./amount/moneySlice";

export const store = configureStore({
  reducer: {
    money: moneySlice,
  },
});
