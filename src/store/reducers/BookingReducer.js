import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    selectedSeats: [],
    price: 0,
    movieId: "",
    movieDetailsId: "",
  },
  reducers: {
    selectSeatFunc: (state, action) => {
      state.selectedSeats.push(action.payload);
      state.price = state.selectedSeats.length * 150;
    },

    removeSeatFunc: (state, action) => {
      const removeIndex = state.selectedSeats.indexOf(action.payload);
      state.selectedSeats.splice(removeIndex, 1);
      state.price = state.selectedSeats.length * 150;
    },

    setMovieIdFunc: (state, action) => {
      console.log(action.payload);
      state.movieId = action.payload;
    },

    setMovieDetailsIdFunc: (state, action) => {
      state.movieId = action.payload;
    },
  },
});

// exoporting reducer for store
export const bookingReducer = bookingSlice.reducer;

// exoporting actions for dispatch where we want
export const {
  selectSeatFunc,
  removeSeatFunc,
  setMovieIdFunc,
  setMovieDetailsIdFunc,
} = bookingSlice.actions;
