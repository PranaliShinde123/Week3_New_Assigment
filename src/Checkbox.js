import React from "react";
import "./styles.css";
import { useState } from "react";
import "./checkbox.css";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="App">
      <div className="title">Checkbox</div>

      <div className="checkBoxContainer">
        <div className="checkbox">
          <input
            type="checkbox"
            id="Yes"
            name="Yes"
            value="Yes"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Yes
        </div>

        <div className="checkbox">
          <input type="checkbox" id="No" name="No" value="No" />
          No
        </div>

        <div className="checkbox">
          <input type="checkbox" id="neutral" name="netural" value="Neutral" />
          Netural
        </div>
      </div>
    </div>
  );
}
