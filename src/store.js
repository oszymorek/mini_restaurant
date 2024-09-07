import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartRedcer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartRedcer,
  },
});

export default store;
