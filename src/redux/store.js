import { configureStore } from "@reduxjs/toolkit";
import { advertsApi } from "./adverts/adverts";
import { reducer } from "./reducer";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(advertsApi.middleware),
});

export const persistor = persistStore(store);
