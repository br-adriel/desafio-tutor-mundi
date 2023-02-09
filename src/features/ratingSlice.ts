import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const ratingSlice = createSlice({
  name: 'rating',
  initialState: {
    starsStatus: [0, 0, 0, 0, 0],
    untouched: true,
  },
  reducers: {
    rate: (state, action) => {
      state.untouched = false;
      state.starsStatus = action.payload;
    },
  },
});

export const { rate } = ratingSlice.actions;

export const selectRating = (state: RootState) => state.rating;

export default ratingSlice.reducer;
