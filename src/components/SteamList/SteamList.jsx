import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./SteamList.css";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../Filter.js/Filter";
import { FileSearchOutlined } from "@ant-design/icons";
import { contexts } from "../../contexts/context";

const SteamList = () => {
  // pagination start

  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([1, 500]);
  const [show, setShow] = useState(false);

  const [page, setPage] = useState(1);
  useEffect(() => {
    getGunData();
  }, []);

  // pagination end

  // search start
  const [searchParams, setsearchParams] = useSearchParams();
  const [searchValue, setsearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  useEffect(() => {
    setsearchParams({
      q: searchValue,
      brand: brand,
      price_gte: price[0],
      price_lte: price[1],
      _limit: 8,
      _page: page,
    });
  }, [searchValue, page, price, brand]);

  useEffect(() => {
    getGunData();
  }, [searchParams]);

  // search end

  const { gun, getGunData, editGun, deleteGun } = useContext(contexts);
  useEffect(() => {
    getGunData();
  }, []);

  return (
    <div className="block-card-a">
      <div
        style={{
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {" "}
        <input
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          type="text"
          placeholder="search"
          className="search"
        />
      </div>

      <div
        style={{
          textAlign: "center",
          margin: "10px auto",
          cursor: "pointer",
          width: "100%",
          maxWidth: "200px",
        }}
        onClick={() => setShow(!show)}
      >
        {show ? (
          <FileSearchOutlined style={{ fontSize: "30px", color: "white" }} />
        ) : (
          <FileSearchOutlined
            style={{ fontSize: "30px", textAlign: "center", color: "red" }}
          />
        )}
      </div>
      {show ? (
        <div className="list-filter">
          <Filter
            brand={brand}
            setBrand={setBrand}
            price={price}
            setPrice={setPrice}
          />
        </div>
      ) : null}
      {/* <div className="products-list">
        {products.length > 0 ? (
          products.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px" }} />
        )}
      </div> */}
      <div className="block-u">
        {gun.map((item) => (
          <Card
            key={item.id}
            className="card-gun-u"
            item={item}

            // sx={{ maxWidth: 345, marginLeft: 70, backgroundColor: "#2f3e4f" }}
          >
            <CardMedia
              component="img"
              alt="img"
              height="200"
              // width="200"
              image={item.image}
            />
            <CardContent className="card-content-u">
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2">{"$" + item.price}</Typography>
            </CardContent>
            <CardActions className="card-content-a">
              <Link to={`/edit/${item.id}`}>
                <Button onClick={() => editGun(item.id)} size="small">
                  Edit
                </Button>
              </Link>
              <Button onClick={() => deleteGun(item.id)} size="small">
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div>
        <button
          className="btn-page"
          disabled={page == 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          prev
        </button>
        <h2
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          {page}
        </h2>

        <button
          className="btn-page"
          disabled={page == page - 1 ? true : false}
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default SteamList;
