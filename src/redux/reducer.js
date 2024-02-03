import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { advertsApi } from "./adverts/adverts";
import { favoritesReducer } from "./favorites/favorites";

const persistConfig = {
  key: "favorites",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const reducer = combineReducers({
  [advertsApi.reducerPath]: advertsApi.reducer,
  favorites: persistedReducer,
});
