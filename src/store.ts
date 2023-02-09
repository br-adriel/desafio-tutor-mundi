import { configureStore } from '@reduxjs/toolkit';
import ratingReducer from './features/ratingSlice';

const store = configureStore({
  reducer: {
    rating: ratingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
