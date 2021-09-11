// import { createReducer } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import * as authOperations from "./authOperarions";

// const initialUserState = { name: null, email: null };

// // const initialUserState = { name: null, email: null, password: null };
// // payload.user? why?
// const user = createReducer(initialUserState, {
//   [authOperations.registerUser.fulfilled]: (_, { payload }) => payload.user,
//   [authOperations.loginUser.fulfilled]: (_, { payload }) => payload.user,
//   [authOperations.logoutUser.fulfilled]: () => initialUserState,
// });

// export default combineReducers({
//   user,
// });
