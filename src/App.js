import React from "react";
import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Input from "./Input";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Switch from "react-switch";

export default function App(props) {
  const [IsActive, setIsActive] = useState(false);
  const toggleSwitch = () => {
    IsActive === false ? setIsActive(true) : setIsActive(false);
  };

  return (
    <div className="App">
      <Input />
      <div className="title">Country</div>
      <div className="radiobutton">
        <Radio value="India" groupName="Country" defaultChecked={true} />
        <Radio value="US" groupName="Country" />
        <Radio value="Canada" groupName="Country" />
      </div>
      <Checkbox></Checkbox>
      <div className="title">Switch</div>
      <div className="switchContainer">
        <span>Yes</span> <Switch onChange={toggleSwitch} checked={IsActive} />{" "}
        <span>No</span>
      </div>
    </div>
  );
}
