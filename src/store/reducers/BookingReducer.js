import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedSeats:[],
    price:0
}

const bookingSlice = createSlice({
    name: "Booking",
    initialState: initialState,
    reducers:{
        
        selectSeatFunc : (state,action) => {
            state.selectedSeats.push(action.payload)
            state.price = state.selectedSeats.length*150;
        },
        
        removeSeatFunc : (state,action) => {
            const removeIndex = state.selectedSeats.indexOf(action.payload);
            state.selectedSeats.splice(removeIndex, 1);
            state.price = state.selectedSeats.length*150;
        }

    }
})

// exoporting reducer for store 
export const bookingReducer = bookingSlice.reducer;

// exoporting actions for dispatch  where we want
export const {selectSeatFunc,removeSeatFunc} = bookingSlice.actions;

// exoporting selector for retrieving state
export const bookingSelector = (state) => state.bookingReducer