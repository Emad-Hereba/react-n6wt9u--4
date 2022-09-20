import {createSlice} from '@reduxjs/toolkit';

const intialState={
  cartItems: [],
  amount: 0,
  total: 4,
  isLoading: true,
};
const cartSlice = createSlice({
name: 'cart',
intialState,
});
export default cartSlice.reducer;
//console.log(createSlice)