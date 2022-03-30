import React, { useContext, useState } from "react";

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
    }
    navigate("/list");
    postGun(newGun);
    setImage("");
    setPrice("");
    setName("");
  }

  return (
    <div className="">
      <img className="photo" src="" alt="image" />
      <div className="add-main">
        <div
          className="add-gun"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            height: "150px",
          }}
        >
          <input
            style={{ marginTop: "10px" }}
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text"
            placeholder="Price"
          />
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="Image"
          />
          <Stack direction="row" spacing={2}>
            <Button onClick={() => addGun()} color="warning">
              Add Gun
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default AddGun;
