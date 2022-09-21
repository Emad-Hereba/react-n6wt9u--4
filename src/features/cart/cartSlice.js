import {createSlice} from '@reduxjs/toolkit';
import cartItems from '../../carItems'

const intialState={
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
name: 'cart',
intialState,
});
export default cartSlice.reducer;
//console.log(createSlice)