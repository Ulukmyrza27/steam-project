import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { favoritesContext } from "../../contexts/favoritesContext";
import FavItem from "./FavItem";

const Favorites = () => {
  const { getFav, fav } = useContext(favoritesContext);
  useEffect(() => {
    getFav();
  }, []);
  console.log(fav);
  return (
    <div className="container">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={fav?.products}
        footer={<h2 style={{ color: "white" }}>Total: {fav?.totalPrice}$</h2>}
        renderItem={(item) => <FavItem item={item} />}
      />
    </div>
  );
};

export default Favorites;
