import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contacts } from "../types/card";
import { RequestOptions } from "../types/api";
import httpRequest from "./httpRequest";

export const fetchContacts = createAsyncThunk<Contacts[], void>(
  "contacts/fetchContacts",
  async () => {
    const options: RequestOptions = {
      method: "GET",
    };

    const response = await httpRequest("", options);

    if (response) {
      return JSON.parse(response) as Contacts[];
    }
    return [];
  }
);
