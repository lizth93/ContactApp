import Cookies from "js-cookie";

export default async function fetchContact() {
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

    const requestOptions = {
      method: "GET",
      headers: headers
    };

    const response = await fetch("https://localhost:7068/api/Contact", requestOptions);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("error");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
