import axios from "axios";
import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    // Make a POST request to the login route
    const response = await axios.post("/api/auth/login", userInfo);
    return response.data; // Return the response data which should include the token
  } catch (error) {
    console.error("Login failed", error); // Log the error for debugging
    throw new Error("Failed to login"); // Optionally throw an error to handle it in the calling function
  }
};

export { login };
