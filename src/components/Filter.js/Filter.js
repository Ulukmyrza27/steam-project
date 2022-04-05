import { Select, Slider } from "antd";
import React, { useContext } from "react";
import { contexts } from "../../contexts/context";

import "./Filter.css";

const Filter = ({ brand, setBrand, price, setPrice }) => {
  const { gun } = useContext(contexts);
  return (
    <div className="filters">
      <Select
        value={brand}
        onChange={(e) => setBrand(e)}
        placeholder="Filter by brand"
        style={{ width: "100%" }}
        allowClear
        mode="multiple"
      >
        {gun.map((item) => (
          <Select.Option key={item.id} value={item.name}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
      <Slider
        style={{ width: "500px" }}
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[1, 500]}
        min={0}
        max={500}
        step={1}
        range
      />
    </div>
  );
};

export default Filter;
