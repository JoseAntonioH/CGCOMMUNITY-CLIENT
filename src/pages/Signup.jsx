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
          id="input-completeName"
          type="text"
          name="completeName"
          placeholder=""
          value={completeName}
          onChange={handleInputChange}
          
        />
        <label htmlFor="input-completeName">Complete Name</label>
      </div>

      <div className="usersign-box">
        
        <input
          id="input-email"
          type="text"
          name="age"
          placeholder=""
          value={age}
          onChange={handleInputChange}
        />
        <label htmlFor="input-completeName">Age</label>
      </div>


      <div className="usersign-box">
        
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder=""
          value={username}
          onChange={handleInputChange}
          
        />
        <label htmlFor="input-username">Username</label>
      </div>

      <div className="usersign-box">
        
        <input
          id="input-email"
          type="text"
          name="email"
          placeholder=""
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="input-completeName">Email</label>
      </div>

      <div className="usersign-box">
        
        <input
          id="input-email"
          type="text"
          name="profilePic"
          placeholder=""
          value={profilePic}
          onChange={handleInputChange}
        />
        <label htmlFor="input-completeName">Profile Pic</label>
      </div>

      <div className="usersign-box">
        
        <input
          id="input-email"
          type="text"
          name="instagram"
          placeholder=""
          value={instagram}
          onChange={handleInputChange}
        />
        <label htmlFor="input-completeName">Instagram</label>
      </div>

      <div className="usersign-box">
        <input
          id="input-email"
          type="text"
          name="youtube"
          placeholder=""
          value={youtube}
          onChange={handleInputChange}
        />
        <label htmlFor="input-completeName">Youtube</label>
      </div>
      <div className="usersign-box">
        
        <input
          id="input-email"
          type="text"
          name="twitter"
          placeholder=""
          value={twitter}
          onChange={handleInputChange}
        />
        <label htmlFor="input-completeName">Twitter</label>
      </div>

      <div className="usersign-box">
        <input
          id="input-email"
          type="text"
          name="facebook"
          placeholder=""
          value={facebook}
          onChange={handleInputChange}
        />
        <label htmlFor="input-completeName">Facebook</label>
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
        />
        <label htmlFor="input-password">Password</label>
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
