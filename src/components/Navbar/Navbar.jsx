import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div id="trapezoid">
        <Link to={PATHS.HOMEPAGE} className="nav__projectName">
          {CONSTS.CAPITALIZED_APP} 
        </Link>

        <div className="nav__authLinks">
          {props.user ? (
            <>
              <Link to={"/profile"} className="authLink">
                PROFILE
              </Link>
              <Link to={"/games"} className="authLink">
                Games
              </Link>
              <Link className="nav-logoutbtn" onClick={props.handleLogout}>
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link to={"/feautures"} className="authLink">
                Features
              </Link>
              <Link to={"/auth/signup"} className="authLink">
                Sign Up
              </Link>
              <Link to={"/auth/login"} className="authLink">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;