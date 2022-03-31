import React from "react";

const EditGun = () => {
  return <div>"Edit Gun"</div>;
};

export default EditGun;

// import React, { useState } from "react";
// import { useEffect }"Edit Gun" from "react";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { contexts } from "../../contexts/Context";

// const EditGuns = () => {
//   const { gunEdit, saveGun } = useContext(contexts);
//   const [newEditGun, setNewEditGun] = useState(gunEdit);
//   const navigate = useNavigate();
//   useEffect(() => setNewEditGun(gunEdit), [gunEdit]);

//   function handleEditInput(e) {
//     let newGun = {
//       ...newEditGun,
//       task: e.target.value,
//     };
//     setNewEditGun(newGun);
//   }

//   function save() {
//     saveGun(newEditGun);
//     navigate("/");
//   }
//   return (
//     <div>
//       {newEditGun ? (
//         <>
//           <input
//             onChange={handleEditInput}
//             value={newEditGun.task}
//             type="text"
//           />
//           <button onClick={save}>Save</button>
//         </>
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
//   );
// };

// export default EditGuns;
