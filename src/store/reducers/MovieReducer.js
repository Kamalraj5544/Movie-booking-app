import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState:{
        movies:[],
    },
    reducers:{
        setMovies : (state,action) => {
            state.movies = action.payload;
        }
    }
})

export const movieReducer = movieSlice.reducer

export const { setMovies } =  movieSlice.actions