import React, { useReducer } from "react";
import axios from "axios";
// import { CASE_EDIT_GUNS, CASE_GET_GUN_DATA } from "../helpers/cases";
// import { API } from "../helpers/consts";

export const contexts = React.createContext();
const API = "http://localhost:8002/guns";
const INIT_STATE = {
  gun: [],
  editGun: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_GUN_DATA":
      return { ...state, gun: action.payload };
    case "GET_GUNS":
      return { ...state, editGun: action.payload.data };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getGunData = async () => {
    let { data } = await axios.get(API + window.location.search);
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

  async function getEditGun(id) {
    let { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_GUNS",
      payload: data,
    });
  }

  async function upDateGun(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getGunData();
  }

  return (
    <contexts.Provider
      value={{
        gun: state.gun,
        pages: state.pages,
        editGun: state.editGun,
        postGun,
        getGunData,
        deleteGun,
        getEditGun,
        upDateGun,
      }}
    >
      {children}
    </contexts.Provider>
  );
};

export default ContextProvider;
