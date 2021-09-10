import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";
import {
  addContactOperacion,
  deleteContactOperacion,
  fetchContactOperacion,
} from "./operations";

const items = createReducer([], {
  [addContactOperacion.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContactOperacion.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [fetchContactOperacion.fulfilled]: (_, { payload }) => payload,
});

const itemsError = createReducer(null, {
  [addContactOperacion.rejected]: (_, { payload }) => payload,
  [addContactOperacion.pending]: () => null,

  [deleteContactOperacion.rejected]: (_, { payload }) => payload,
  [deleteContactOperacion.pending]: () => null,

  [fetchContactOperacion.rejected]: (_, { payload }) => payload,
  [fetchContactOperacion.pending]: () => null,
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  itemsError,
});
