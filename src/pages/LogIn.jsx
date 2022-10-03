import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div className="login-box">
      <h1>Log In</h1>
      <form onSubmit={handleFormSubmission} className="signup__form">
        
        <div className="user-box">
        
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder=""
          value={username}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="input-username">Username</label>

        </div>

        <div className="user-box">
        
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder=""
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />
        <label htmlFor="input-password">Password</label>

        </div>

        {error && (
          <div className="error-block">
            <p>{error.message}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
          Submit
        </button>
      </form>
    </div>
  );
}
