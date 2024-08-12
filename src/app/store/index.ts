import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "shared/api";
import { rootReducer } from "./rootReducer";
import { errorMiddleware } from "./errorMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, errorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
