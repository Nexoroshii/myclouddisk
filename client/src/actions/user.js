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
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login = async (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};