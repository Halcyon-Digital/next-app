import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/product/product-slice';
import photoReducer from './features/photos/photo-slice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    photo: photoReducer,
  },
});
