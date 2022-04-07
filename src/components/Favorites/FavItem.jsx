import React, { useContext } from "react";
import { List, InputNumber, Button, message, Popconfirm } from "antd";
import { favoritesContext } from "../../contexts/favoritesContext";
import { Link } from "react-router-dom";

const FavItem = ({ item }) => {
  // console.log(item);
  const { deleteFromFav, changeProductCount } = useContext(favoritesContext);
  function confirmDelete(id) {
    deleteFromFav(id);
    message.success("Removed from your favorites!");
  }

  function cancelDelete(e) {
    message.error("Canceled");
  }
  return (
    <List.Item
      key={item.id}
      extra={<img width={272} alt="img" src={item.item.image} />}
    >
      <List.Item.Meta
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ color: "white" }}>{item.item.name}</h3>
            </div>
          </div>
        }
        description={
          <>
            <div>{item.item.description}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "20px",
              }}
            >
              <div>
                <h4 style={{ color: "white" }}>Price</h4>
                <h3 style={{ color: "white" }}>{"$" + item.item.price}</h3>
              </div>
            </div>
            <Popconfirm
              title="Are you sure to delete this product from favorites?"
              onConfirm={() => confirmDelete(item.item.id)}
              onCancel={cancelDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button>Remove from favorites</Button>
            </Popconfirm>
          </>
        }
      />
    </List.Item>
  );
};

export default FavItem;
