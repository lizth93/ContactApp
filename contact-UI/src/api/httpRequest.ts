import Cookies from "js-cookie";
import { RequestOptions } from "../types/api";

const API_BASE_URL = "https://localhost:7068/api";

export default async function httpRequest(
  url: string,
  options: RequestOptions
) {
  try {
    const token = Cookies.get("lwaToken");

    if (!token) {
      window.location.href = "/home";
      return null;
    }

    const headers = new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });

    const requestOptions: RequestOptions = {
      ...options,
      headers,
    };

    const response = await fetch(`${API_BASE_URL}/${url}`, requestOptions);

    if (!response.ok && response.status === 401) {
      Cookies.remove("lwaToken");
      window.location.href = "/home";
      throw new Error(response.statusText);
    }

    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.error("Error in the request:", error);
    throw error;
  }
}
