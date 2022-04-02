import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contexts } from "../../contexts/Context";
import "./SteamList.css";
import { Link, useSearchParams } from "react-router-dom";

const SteamList = () => {
  // pagination start
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
      _limit: 8,
      _page: page,
    });
  }, [searchValue, page]);

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

      <div className="block-u">
        {gun.map((item) => (
          <Card
            key={item.id}
            className="card-gun-u"

            // sx={{ maxWidth: 345, marginLeft: 70, backgroundColor: "#2f3e4f" }}
          >
            <CardMedia
              className="card-media-gun-u"
              component="img"
              alt="green iguana"
              height="200"
              // width="200"
              image={item.image}
            />
            <CardContent className="card-content-u">
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="white">
                {"$" + item.price}
              </Typography>
            </CardContent>
            <CardActions>
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
      <button
        disabled={page == 1 ? true : false}
        onClick={() => setPage(page - 1)}
      >
        prev
      </button>
      {page}
      <button
        disabled={page == page - 1 ? true : false}
        onClick={() => setPage(page + 1)}
      >
        next
      </button>
    </div>
  );
};

export default SteamList;
