import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      // console.log(credentials);
      return data;
    } catch (error) {
      //   return error.message;
    }
  }
);
export const loginUser = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    //   return error.message;
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  try {
    const { data } = await axios.post("/users/logout");
    token.unset();
    return data;
  } catch (error) {
    //   return error.message;
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // console.log(thunkAPI.getState());
    // console.log(persistedToken);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      // console.log(data);
      return data;
    } catch (error) {}
  }
);
// export default registerUser;
