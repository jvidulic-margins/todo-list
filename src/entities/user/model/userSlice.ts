import { createSlice } from "@reduxjs/toolkit";
import { sessionApi } from "entities/session";
import { userApi } from "../api/userApi";
import { type User } from "./types";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addMatcher(
      sessionApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data?.data || null;
      }
    );
    build.addMatcher(
      userApi.endpoints.me.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data?.data || null;
      }
    );
    build.addMatcher(sessionApi.endpoints.logout.matchFulfilled, (state) => {
      state.user = null;
    });
  },
});

export const userReducer = userSlice.reducer;
