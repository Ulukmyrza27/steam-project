import React, { useEffect, useState } from "react";

const EditGun = () => {
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    getGuns(params.id);
  }, []);
  function handleValue(e) {
    let edited = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(edited);
  }

  return (
    <div className="edit-gun">
      <input
        className="input"
        type="text"
        name="product"
        value={edit.product}
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
    </div>
  );
};

export default EditGun;
