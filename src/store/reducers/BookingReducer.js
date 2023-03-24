
const { createSlice} = require("@reduxjs/toolkit")

const initialState = {
    selectedSeats:[],
    price:0
}

const bookingSlice = createSlice({
    name: "Booking",
    initialState: initialState,
    reducers:{

        selectFunc : (state,action) => {
            initialState.selectedSeats.push(action.payload)
        }

    }
})

export const bookingReducer = bookingSlice.reducer;