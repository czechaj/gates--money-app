import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    firstMoney: 100000000000,
    items: [],
    totalPrice: 0,
  },
  reducers: {
    buyItem: (state, action) => {
      if (state.firstMoney - action.payload.price < 0)
        return alert("Bill Gates doesn't like to be in debt ");
      const itemInBox = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInBox) {
        itemInBox.piece += 1;
        state.totalPrice += itemInBox.price;
        state.firstMoney -= itemInBox.price;
      } else {
        state.items.push(action.payload);
        state.firstMoney -= action.payload.price;
        state.totalPrice += action.payload.price;
      }
    },
    sellItem: (state, action) => {
      const itemInBox = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInBox) {
        itemInBox.piece === 1 &&
          (state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          ));
        itemInBox.piece -= 1;
        state.totalPrice -= itemInBox.price;
        state.firstMoney += itemInBox.price;
      }
    },
  },
});

export const selectMoney = (state) => state.money.firstMoney;
export const selectItems = (state) => state.money.items;
export const selectTotalPrice = (state) => state.money.totalPrice;

export const { buyItem, sellItem } = moneySlice.actions;
export default moneySlice.reducer;
