// slices/moviesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  movies: [],
  status: 'idle',
  error: null,
};

// Define a thunk to fetch movie data from the API
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  // const response = await axios.get('https://abir82-bollywood-recommendations.p.rapidapi.com/movies');
  const response = await axios.get('https://dummyapi.online/api/movies');
  return response.data;
});

// export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
//   const response = await axios.get('https://abir82-bollywood-recommendations.p.rapidapi.com/movies', {
//     headers: {
//       'X-RapidAPI-Key': '5dd8459c33mshe30aebc329c454dp1036c5jsn880929268bf4',
//       'X-RapidAPI-Host': 'abir82-bollywood-recommendations.p.rapidapi.com'
//     }
//   });
//   return response.data;
// });

// Create a slice
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the action creators
export const moviesActions = moviesSlice.actions;

// Export the reducer
export default moviesSlice.reducer;
