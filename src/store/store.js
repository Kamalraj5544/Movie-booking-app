import { configureStore,combineReducers } from "@reduxjs/toolkit";

import { bookingReducer } from "./reducers/BookingReducer";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { movieReducer } from "./reducers/MovieReducer";

const persistConfig = {
    key:"root",
    storage,
}

const rootReducer = combineReducers({
    booking : bookingReducer,
    movie : movieReducer
})

const persistedReducer= persistReducer(persistConfig,rootReducer);


 export const store = configureStore({
    reducer: {
        persistedReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store);