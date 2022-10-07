import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password,email,profilePic,completeName,instagram,facebook,twitter,youtube,age } = form;
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
      email,
      profilePic,
      completeName,
      instagram,
      facebook,
      twitter,
      youtube,
      age
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div className="signup-box">
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">

      <div className="usersign-box">
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder=""
          value={username}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="input-username">Username (required)</label>
      </div>

      <div className="usersign-box">
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder=""
          value={password}
          onChange={handleInputChange}
          minLength="8"
          required
        />
        <label htmlFor="input-password">Password (required)</label>
      </div>

      <div className="usersign-box">
        <input
          id="input-completeName"
          type="text"
          name="completeName"
          placeholder=""
          value={completeName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="input-completeName">Complete Name (required)</label>
      </div>

      <div className="usersign-box">
        <input
          id="input-age"
          type="text"
          name="age"
          placeholder=""
          value={age}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="input-age">Age (required)</label>
      </div>

      <div className="usersign-box">
        <input
          id="input-email"
          type="text"
          name="email"
          placeholder=""
          value={email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="input-email">Email (required)</label>
      </div>

      <div className="usersign-box">
        <input
          id="input-ppic"
          type="text"
          name="profilePic"
          placeholder=""
          value={profilePic}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="input-ppic">Profile Pic (required)</label>
      </div>

      <div className="usersign-box">
        <input
          id="input-instagram"
          type="text"
          name="instagram"
          placeholder=""
          value={instagram}
          onChange={handleInputChange}
        />
        <label htmlFor="input-instagram">Instagram</label>
      </div>

      <div className="usersign-box">
        <input
          id="input-youtube"
          type="text"
          name="youtube"
          placeholder=""
          value={youtube}
          onChange={handleInputChange}
        />
        <label htmlFor="input-youtube">Youtube</label>
      </div>

      <div className="usersign-box">  
        <input
          id="input-twitter"
          type="text"
          name="twitter"
          placeholder=""
          value={twitter}
          onChange={handleInputChange}
        />
        <label htmlFor="input-twitter">Twitter</label>
      </div>

      <div className="usersign-box">
        <input
          id="input-facebook"
          type="text"
          name="facebook"
          placeholder=""
          value={facebook}
          onChange={handleInputChange}
        />
        <label htmlFor="input-facebook">Facebook</label>
      </div>
      
      {error && (
        <div className="error-block">
          <p>There was an error submiting the form:</p>
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
