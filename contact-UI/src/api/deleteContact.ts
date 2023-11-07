import Cookies from "js-cookie";

export default async function deleteContact(
  id: number,
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

    var requestOptions = {
      method: "DELETE",
      headers: headers,
    };

    const response = await fetch(
      "https://localhost:7068/api/Contact/" + id,
      requestOptions
    );

    if (response.ok) {
        return await response.text();

    } else {
      console.error("Error deleting the contact");
    }
  } catch (error) {
    console.error("Error in the DELETE request:", error);
    throw error;
  }
}
