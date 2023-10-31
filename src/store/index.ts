import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import favoriteMoviesListSlice from "./slices/favoriteMoviesListSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    favoriteMoviesList: favoriteMoviesListSlice
  }
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
