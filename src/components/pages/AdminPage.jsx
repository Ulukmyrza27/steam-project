import { Col, Row } from "antd";
import React from "react";
import AddGun from "../AddGun/AddGun";
import SteamList from "../SteamList/SteamList";
const AdminPage = () => {
  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <Row>
        <Col span={12}>
          <Col span={22}>
            <AddGun />
          </Col>
        </Col>
        <Col span={12}>
          <Col span={22}>
            <SteamList />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;
