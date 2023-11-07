import Cookies from "js-cookie";
import { Contacts } from "../types/card";

export default async function updateContact(
  id: number,
  updatedContact: Contacts
) {
  try {
    const token = Cookies.get('lwaToken');

    if (!token) {
      console.error("Token not found");
      return null;
    }

    const headers = new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });

    var raw = JSON.stringify(updatedContact);

    var requestOptions = {
      method: "PUT",
      headers: headers,
      body: raw,
    };

    const response = await fetch(
      "https://localhost:7068/api/Contact/" + id,
      requestOptions
    );

    if (response.ok) {
      const result = await response.text();
      console.log(result);
    } else {
      console.error("Error updating the contact");
    }
  } catch (error) {
    console.error("Error in the PUT request:", error);
    throw error;
  }
}
