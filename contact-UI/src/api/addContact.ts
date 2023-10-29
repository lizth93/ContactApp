import { Contacts } from "../types/card";

export default async function addContact(addContact: Contacts) {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(addContact);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch(
      "https://localhost:7068/api/Contact/",
      requestOptions
    );

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
