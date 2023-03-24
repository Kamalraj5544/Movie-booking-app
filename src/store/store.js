import { configureStore } from "@reduxjs/toolkit";

import { bookingReducer } from "./reducers/BookingReducer";


const store = configureStore({
    reducer: {
        bookingReducer
    }
})