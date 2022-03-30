import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contexts } from "../../contexts/Context";

const SteamList = () => {
  const { gun, getGunData, deleteGuns, editGuns } = useContext(contexts);
  useEffect(() => {
    getGunData();
  }, []);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.nicepng.com/png/detail/350-3507636_i-was-replaying-the-singleplayer-out-of-bordem.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          mas;lda
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Desc
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default SteamList;
