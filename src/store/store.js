import { configureStore } from "@reduxjs/toolkit";

import { bookingReducer } from "./reducers/BookingReducer";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key:"root",
    storage,
}
const persistorReducer= persistReducer(persistConfig,bookingReducer);


 export const store = configureStore({
    reducer: {
        persistorReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store);