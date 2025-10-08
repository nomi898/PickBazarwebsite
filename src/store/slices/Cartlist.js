import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../../utils/product';

const initialState = {
    Products: products,
    CartList:[],
  }
export const counterSlice = createSlice({
  name: 'CartList',
  initialState,
  reducers: {
    addToCart:(state,actions)=>{
      const item= actions.payload;
      
      const existingItem = state.CartList.find((prod) => prod.id === item.id);
      // quantity logic 
      existingItem ? existingItem.quantity += 1
       : 
      state.CartList.push({...item, quantity: 1});
      
    },
    removeFromCart:(state,actions)=>{
      const item= actions.payload;
      const existingItem = state.CartList.find((prod) => prod.id === item.id);

      if(existingItem){
       existingItem.quantity > 1 ? (existingItem.quantity -= 1) 
       :
        (state.CartList = state.CartList.filter((prod) => prod.id !== item.id));
    }
  },
  DeletefromCart:(state,actions)=>{
    const item= actions.payload;
    const existingItem = state.CartList.find((prod) => prod.id === item.id);
    if(existingItem){
      state.CartList = state.CartList.filter((prod) => prod.id !== item.id);
    }
  }}});

export const { addToCart,removeFromCart,DeletefromCart } = counterSlice.actions;
export default counterSlice.reducer;