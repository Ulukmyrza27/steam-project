import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contexts } from "../../contexts/Context";

const SteamList = () => {
  const { gun, getGunData, editGun, deleteGun } = useContext(contexts);
  useEffect(() => {
    getGunData();
  }, []);
  return (
    <div className="block">
      {gun.map((item) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={item.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}
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
