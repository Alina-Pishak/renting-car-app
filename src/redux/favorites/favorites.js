import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== payload
      );
    },
  },
});

export const favoritesReducer = slice.reducer;
export const { addFavorites, removeFavorite } = slice.actions;
