// import React, { useReducer } from "react";
// import axios from "axios";
// import { CASE_EDIT_GUNS, CASE_GET_GUN_DATA } from "../helpers/cases";
// import { API } from "../helpers/consts";

// export const contexts = React.createContext();

// const INIT_STATE = {
//   gun: [],
//   gunEdit: null,
// };

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case CASE_GET_GUN_DATA:
//       return { ...state, gun: action.payload };
//     case CASE_EDIT_GUNS:
//       return { ...state, gunEdit: action.payload };
//     default:
//       return state;
//   }
// };

// const ContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   const getGunData = async () => {
//     let { data } = await axios(API);
//     dispatch({
//       type: "GET_GUN_DATA",
//       payload: data,
//     });
//   };
//   const addGuns = async (newGun) => {
//     await axios.post(API, newGun);
//     getGunData();
//   };
//   const deleteGun = async (id) => {
//     await axios.delete(`${API}/${id}`);
//     getGunData();
//   };
//   const editGuns = async (id) => {
//     let { data } = await axios.get(`${API}/${id}`);
//     dispatch({
//       type: "EDIT_GUNS",
//       payload: data,
//     });
//   };
//   async function saveGun(newGun) {
//     await axios.patch(`${API}/${newGun.id}`, newCar);
//     getGunData();
//   }
//   return (
//     <contexts.Provider
//       value={{
//         gun: state.gun,
//         gunEdit: state.gunEdit,
//         getGunData,
//         addGuns,
//         deleteGun,
//         editGuns,
//         saveGun,
//       }}
//     >
//       {children}
//     </contexts.Provider>
//   );
// };

// export default ContextProvider;
