import { message } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./buy.css";

const Buy = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  function oplata() {
    if (firstName.length == "") {
      return setTimeout(() => message.warning("заполните поле!"));
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="buy-div" style={{ width: "80%", height: "100vh" }}>
        <h1 style={{ color: "white", marginTop: "20px" }}>PERSONAL DETAILS</h1>
        <br />
        <input
          className="input-buy"
          style={{ width: "80%", height: "7%" }}
          type="text"
          placeholder=" First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          className="input-buy"
          style={{ width: "80%", height: "7%" }}
          type="text"
          placeholder="Last Name"
        />
        <br />
        <input
          className="input-buy"
          style={{ width: "80%", height: "7%" }}
          type="number"
          placeholder="Number"
        />
        <br />
        <input
          className="input-buy"
          style={{ width: "80%", height: "7%" }}
          type="text"
          placeholder="Address"
        />
        <div style={{ width: "80%", marginTop: "19px" }}>
          <input type="checkbox" />
          <p style={{ color: "white" }}>
            я прочитал(a) <a href="">Политика конфиденциальности</a> и согласен
            с условиями
          </p>
        </div>
        <div style={{ width: "80%", margin: "20px" }}>
          <Link to="/oplata">
            {" "}
            <button
              style={{
                width: "150px",
                height: "50px",
                color: "white",
                backgroundColor: "orange",
              }}
            >
              buy{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buy;
