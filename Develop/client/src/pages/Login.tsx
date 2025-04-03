import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Auth from "../utils/auth";
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token); // Store the token in local storage
      navigate("/board"); // Redirect to the main Kanban board page
    } catch (err) {
      console.error("Failed to login", err);
      setErrorMessage("Invalid username or password"); // Set error message
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {errorMessage && <p className="error">{errorMessage}</p>}{" "}
        {/* Display error message */}
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleChange}
          required // Make it required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required // Make it required
        />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Login;
