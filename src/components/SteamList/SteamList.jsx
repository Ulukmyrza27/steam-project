import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contexts } from "../../contexts/Context";
import "./SteamList.css";
const SteamList = () => {
  const { gun, getGunData, editGun, deleteGun } = useContext(contexts);
  useEffect(() => {
    getGunData();
  }, []);
  return (
    <div className="block-u">
      {gun.map((item) => (
        <Card
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
            <Typography variant="body2" color="text.secondary">
              {"$" + item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => editGun(item.id)} size="small">
              Edit
            </Button>
            <Button onClick={() => deleteGun(item.id)} size="small">
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default SteamList;
