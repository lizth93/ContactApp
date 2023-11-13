// import Cookies from "js-cookie";

import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { Contacts } from "../types/card";

export const fetchContacts = createAsyncThunk<Contacts[], void>(
  "contacts/fetchContacts",
  async () => {
    try {
      const token = Cookies.get("lwaToken");

      if (!token) {
        console.error("Token not found");
        throw new Error("Token not found");
      }

      const headers = new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });

      const requestOptions = {
        method: "GET",
        headers: headers,
      };

      const response = await fetch(
        "https://localhost:7068/api/Contact",
        requestOptions
      );

      if (response.ok) {
        const data: Contacts[] = await response.json();
        return data;
      } else {
        console.error("Error:", response.statusText);
        throw new Error(`Failed to fetch contacts: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
);
