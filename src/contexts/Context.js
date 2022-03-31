import React, { useReducer } from "react";
import axios from "axios";
// import { CASE_EDIT_GUNS, CASE_GET_GUN_DATA } from "../helpers/cases";
// import { API } from "../helpers/consts";

export const contexts = React.createContext();
const API = "http://localhost:8002/guns";
const INIT_STATE = {
  gun: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_GUN_DATA":
      return { ...state, gun: action.payload };

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getGunData = async () => {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET_GUN_DATA",
      payload: data,
    });
  };

  async function postGun(newObj) {
    await axios.post(API, newObj);
    getGunData();
  }
  async function deleteGun(id) {
    await axios.delete(`${API}/${id}`);
    getGunData();
  }
  return (
    <contexts.Provider
      value={{
        gun: state.gun,
        gunEdit: state.gunEdit,
        postGun,
        getGunData,
        deleteGun,
      }}
    >
      {children}
    </contexts.Provider>
  );
};

export default ContextProvider;
