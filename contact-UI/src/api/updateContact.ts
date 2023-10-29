import { Contacts } from "../types/card";

export default async function updateContact(
  id: number,
  updatedContact: Contacts
) {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(updatedContact);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
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
