import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./authOperarions";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isBeingLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.loginUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logoutUser.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshUser.pending](state) {
      state.isBeingLoggedIn = true;
    },
    [authOperations.refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isBeingLoggedIn = false;
    },
    [authOperations.refreshUser.rejected](state) {
      state.isBeingLoggedIn = false;
    },
  },
});
export default authSlice.reducer;
