import { createSlice } from "@reduxjs/toolkit";


interface IFavoriteMoviesList {
  userEmail: string | null;
  favoriteMoviesList: string[];
  currentId: string | null;
}

const initialState: IFavoriteMoviesList = {
  userEmail: null,
  favoriteMoviesList: [],
  currentId: null, 
};

const favoriteMoviesListSlice = createSlice({
  name: "favoriteMoviesList",
  initialState,
  reducers: {
    addMovieToFavoriteMoviesList(state, action) {
      state.userEmail = action.payload.email;
      state.currentId = action.payload.currentId;
      state.favoriteMoviesList = [...state.favoriteMoviesList, action.payload.currentId];
    },
    removeMovieFromFavoriteMoviesList(state, action) {
      state.userEmail = action.payload.email;
      state.favoriteMoviesList = state.favoriteMoviesList.filter((item) => item !== state.currentId);
      state.currentId = null;
    }
  }
});

export const { addMovieToFavoriteMoviesList, removeMovieFromFavoriteMoviesList } = favoriteMoviesListSlice.actions;

export default favoriteMoviesListSlice.reducer;
