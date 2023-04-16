import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0, //gheymate kole kharidha
  totalQuantity: 0, //tedad kole ajnas
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => 
        item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce((total, item) => 
        total + Number(item.price) * Number(item.quantity)
      );
      console.log(state.cartItems)
      console.log(state.totalAmount)
      console.log(newItem)
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
