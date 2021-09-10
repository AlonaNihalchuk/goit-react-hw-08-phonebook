import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContactOperacion = createAsyncThunk(
  "contacts/fetch",
  async () => {
    const { data } = await axios.get("http://localhost:7777/contacts");
    return data;
  }
);

export const addContactOperacion = createAsyncThunk(
  "contacts/add",
  async (contact) => {
    const { data } = await axios.post(
      "http://localhost:7777/contacts",
      contact
    );
    return data;
  }
);

export const deleteContactOperacion = createAsyncThunk(
  "contacts/delete",
  async (id) => {
    await axios.delete(`http://localhost:7777/contacts/${id}`);
    return id;
  }
);
