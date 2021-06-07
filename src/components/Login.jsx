import React from "react";
import "./Login.css";
import "boxicons";
import { auth, provider } from "../firebase";
import logo from "../search_logo.png";

const Login = () => {
  const loginHandler = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <div className="login">
      <h2>instaglam</h2>
      <button className="login__btn" onClick={loginHandler}>
        Sign in with
        <img src={logo} alt="Glogo" className="login__glogo" />
      </button>
    </div>
  );
};

export default Login;
