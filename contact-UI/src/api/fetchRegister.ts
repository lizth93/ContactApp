import Cookies from "js-cookie";
import { User } from "../types/general";

const API_BASE_URL = "https://localhost:7068/api";

export default async function fetchRegister(user: User) {
  try {
    const response = await fetch(`${API_BASE_URL}/Auth/Register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      console.log("User registered successfully!");
      Cookies.remove("lwaToken");
      window.location.href = "/login";
    } else {
      console.error("Registration failed");
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
}
