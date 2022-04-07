import React from "react";
import AddGun from "../AddGun/AddGun";
import SteamList from "../SteamList/SteamList";
const AdminPage = () => {
  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <AddGun />
      <SteamList />
    </div>
  );
};

export default AdminPage;
