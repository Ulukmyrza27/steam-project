import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { contexts } from "../../contexts/Context";
import "./EditGun.css";

const EditGun = () => {
  const { editGun, getEditGun, upDateGun } = useContext(contexts);
  console.log();
  const navigate = useNavigate();
  const params = useParams();
  const [edit, setEdit] = useState("");

  useEffect(() => {
    getEditGun(params.id);
  }, []);

  useEffect(() => {
    setEdit(editGun);
  }, [editGun]);

  function handleValue(e) {
    let edited = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(edited);
  }

  function save() {
    upDateGun(params.id, edit);
    navigate("/store");
  }

  const [open, setOpen] = useState(true);

  console.log(edit);
  return edit ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="modal-edit">
        <input
          className="input"
          type="text"
          name="product"
          value={edit.name}
          placeholder="Title"
          onChange={handleValue}
        />
        <input
          className="input"
          type="text"
          name="price"
          value={edit.price}
          placeholder="Price"
          onChange={handleValue}
        />
        <input
          className="input"
          type="text"
          name="image"
          value={edit.image}
          placeholder="Image"
          onChange={handleValue}
        />
        <Button
          style={{ width: "100px", left: "35%", marginBottom: "10px" }}
          className="button"
          variant="contained"
          onClick={save}
        >
          Save
        </Button>
      </div>
    </div>
  ) : (
    <Backdrop open={open} onClick={() => setOpen(false)}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default EditGun;
