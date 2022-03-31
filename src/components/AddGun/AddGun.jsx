import React, { useContext, useState } from "react";
import "./AddGun.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { contexts } from "../../contexts/Context";

const AddGun = () => {
  const { postGun } = useContext(contexts);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  function addGun() {
    let newGun = {
      name,
      price,
      image,
    };
    if ((!name, !price, !image)) {
      return alert("Fill in ");
    } else {
      postGun(newGun);
      navigate("/store");
    }

    setImage("");
    setPrice("");
    setName("");
  }

  return (
    <div className="card-gun-a">
      <div className="add-main">
        <div className="add-gun">
          <input
            className="add-inp"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Title"
          />
          <input
            className="add-inp"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text"
            placeholder="Price"
          />
          <input
            className="add-inp"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="Image"
          />
          <button className="add_btn" onClick={() => addGun()}>
            Add Gun
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGun;
