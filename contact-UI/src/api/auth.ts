import Cookies from 'js-cookie';
export default async function getAuth(
  username: string,
  password: string
) {
    const loginRequest = {
        username, password
    }
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(loginRequest);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch(
      "https://localhost:7068/api/Auth/Login/",
      requestOptions
    );

    if (!response.ok && response.status === 401) {
        Cookies.remove('lwaToken');
        return false
    }

    const data = await response.json();

    Cookies.set('lwaToken', data.jwtToken);
    return true;

  } catch (error) {
    console.error("Error in the POST request:", error);
    throw error;
  }
}
