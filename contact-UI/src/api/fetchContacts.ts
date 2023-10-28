export default async function fetchContact() {
  try {
    const response = await fetch("https://localhost:7068/api/Contact");

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
