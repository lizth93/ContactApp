import Cookies from "js-cookie";
import { Contacts } from "../types/card";

export default async function addContact(addContact: Contacts) {
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


    const raw = JSON.stringify(addContact);

    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: raw,
    };

    const response = await fetch("https://localhost:7068/api/Contact", requestOptions)

    if (response.ok) {
      const result = await response.text();
      console.log(result);
    } else {
      console.error("Error adding the contact");
    }
  } catch (error) {
    console.error("Error in the POST request:", error);
    throw error;
  }
}
