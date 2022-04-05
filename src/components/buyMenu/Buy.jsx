import React from "react";
import "./buy.css";

const Buy = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div className="buy-div" style={{ width: "40%", height: "100vh" }}>
        <h1 style={{ color: "white", marginTop: "20px" }}>PERSONAL DETAILS</h1>
        <br />
        <input
          className="input-buy"
          style={{ width: "80%", height: "7%" }}
          type="text"
          placeholder=" First Name"
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
          type="text"
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
        </div>
      </div>
      <div>
        <img
          className="img-jostik"
          src="https://miro.medium.com/max/1200/1*Ovna7BOMTTLWvghLXvHOpg.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Buy;
