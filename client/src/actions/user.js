import axios from "axios";

export const registration = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
      {
        email: email,
        password: password,
      }
    );
    alert(response.data.message);
    return response;
  } catch (e) {
    alert(e.response.data.message);
  }
};
