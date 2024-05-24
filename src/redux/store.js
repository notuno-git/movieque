import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import moviesReducer from './slice/moviesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
  },
})