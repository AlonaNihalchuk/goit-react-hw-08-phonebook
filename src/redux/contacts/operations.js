import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContactOperacion = createAsyncThunk(
  "contacts/fetch",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

export const addContactOperacion = createAsyncThunk(
  "contacts/add",
  async (contact) => {
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);

export const deleteContactOperacion = createAsyncThunk(
  "contacts/delete",
  async (id) => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);
