import React, { useReducer } from "react";
import axios from "axios";
// import { CASE_EDIT_GUNS, CASE_GET_GUN_DATA } from "../helpers/cases";
// import { API } from "../helpers/consts";

export const contexts = React.createContext();
const API = "http://localhost:8001/guns";
const INIT_STATE = {
  gun: [],
  gunEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_GUN_DATA":
      return { ...state, gun: action.payload };
    case "EDIT_GUNS":
      return { ...state, gunEdit: action.payload };
    default:
      return state;
  }
};
async function postGun(newObj) {
  await axios.post(API, newObj);
  getGun();
}
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getGun = async () => {
    let { data } = await axios(API);
    dispatch({
      type: "GET_GUN",
      payload: data,
    });
  };

  const deleteGun = async (id) => {
    await axios.delete(`${API}/${id}`);
    getGunData();
  };
  const editGuns = async (id) => {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "EDIT_GUNS",
      payload: data,
    });
  };

  return (
    <contexts.Provider
      value={{
        gun: state.gun,
        gunEdit: state.gunEdit,
        postGun,
        getGunData,
        deleteGun,
        editGuns,
      }}
    >
      {children}
    </contexts.Provider>
  );
};

export default ContextProvider;
