import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './slices/Cartlist'
export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },

})