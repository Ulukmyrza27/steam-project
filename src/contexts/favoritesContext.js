import React, { useReducer } from "react";

import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";

import { CASE_GET_FAV } from "../helpers/cases";

export const favoritesContext = React.createContext();

const INIT_STATE = {
  fav: {},
  favLength: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_FAV:
      return {
        ...state,
        fav: action.payload,
        favLength: action.payload.products?.length,
      };
    default:
      return state;
  }
};

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addProductToFav(product) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let isProductInFav = fav?.products?.some(
      (item) => item.item.id === product.id
    );
    if (isProductInFav) {
      fav.products = fav?.products.filter(
        (item) => item.item.id !== product.id
      );
    } else {
      fav?.products.push(newProduct);
    }
    fav.totalPrice = calcTotalPrice(fav.products);
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  }
  function getFav() {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      // alert(true)
      fav = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("fav", JSON.stringify(fav));
    }
    console.log(fav);
    fav.totalPrice = calcTotalPrice(fav.products);
    dispatch({
      type: CASE_GET_FAV,
      payload: fav,
    });
  }
  function deleteFromFav(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
        totalPrice: 0,
      };
    }
    fav.products = fav.products.filter((item) => item.item.id !== id);
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  }

  function checkItemInFav(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
        totalPrice: 0,
      };
    }
    let isProductInFav = fav?.products?.some((item) => item.item.id == id);
    return isProductInFav;
  }

  function changeProductCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let fav = JSON.parse(localStorage.getItem("fav"));
    fav.products = fav.products.map((item) => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    fav.totalPrice = calcTotalPrice(fav.products);
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  }
  return (
    <favoritesContext.Provider
      value={{
        fav: state.fav,
        favLength: state.favLength,
        addProductToFav,
        getFav,
        deleteFromFav,
        checkItemInFav,
        changeProductCount,
      }}
    >
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
