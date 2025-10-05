import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../../utils/product';

const initialState = {
    Products: products,
  }
export const counterSlice = createSlice({
  name: 'CartList',
  initialState,
  reducers: {
    addToCart:(state,actions)=>{},
  },
});

export const { addToCart } = counterSlice.actions;
export default counterSlice.reducer;