import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-bg-image">
      <div className="login">
        <input type="  text" placeholder="        Email" />
        <input type="text" placeholder="        Login" />
        <input type="text" placeholder="        Password" />
        <input type="text" placeholder="        Confirm Password" />
        <button className="btn-login">REGISTRATION</button>
      </div>
    </div>
  );
};

export default Login;
