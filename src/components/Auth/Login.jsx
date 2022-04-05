import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-bg-image">
      <div className="login">
        <input
          className="login-inp"
          type="  text"
          placeholder="        Email"
        />
        <input className="login-inp" type="text" placeholder="        Login" />
        <input
          className="login-inp"
          type="text"
          placeholder="        Password"
        />
        <input
          className="login-inp"
          type="text"
          placeholder="        Confirm Password"
        />
        <button className="btn-login">REGISTRATION</button>
      </div>
    </div>
  );
};

export default Login;
