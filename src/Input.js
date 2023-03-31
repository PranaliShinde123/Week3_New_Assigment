import React from "react";
import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Input(props) {
  const inputstyle = {
    padding: "12px 20px",
    margin: "8px 0",
    background: "#e3e3e3e",
    borderRadius: "4px 4px 0 0",
    boxSizing: "border-box",
    fontSize: 16,
    fontFamily: "Roboto-Regular"
  };

  const labelStyle = {
    marginleft: 15,
    fontsize: 16,
    fontFamily: "Roboto-Regular",
    color: "#555"
  };

  const {
    type = "text",
    password = "password",
    email = "email",
    label = "Name",
    labelPassword = "Password",
    labelEmail = "Email"
  } = props;
  const [focused, setFocused] = useState(false);
  const [FilledIn, setFilledIn] = useState(false);
  const checkfocusedadnfill =
    (focused && FilledIn) || (focused && !FilledIn) || (!focused && FilledIn);
  return (
    <div className="App">
      <div className="title">Code SandBox</div>

      <div>
        <motion.label
          style={labelStyle}
          intial={{ y: 22 }}
          animate={{
            y: checkfocusedadnfill ? 8 : 22,
            scale: focused ? 0.75 : 1
          }}
        >
          {label}
        </motion.label>
        <div>
          <input
            type={type}
            style={inputstyle}
            name="text"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) =>
              e.target.value !== "" ? setFilledIn(true) : setFilledIn(false)
            }
          />
        </div>
      </div>

      <div>
        <motion.labelPassword
          style={labelStyle}
          intial={{ y: 22 }}
          animate={{
            y: focused ? 8 : 22,
            scale: focused ? 0.75 : 1
          }}
        >
          {labelPassword}
        </motion.labelPassword>
        <div>
          <input
            type={password}
            style={inputstyle}
            name="password"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>
      </div>

      <div>
        <motion.labelEmail
          style={labelStyle}
          intial={{ y: 22 }}
          animate={{
            y: focused ? 8 : 22,
            scale: focused ? 0.75 : 1
          }}
        >
          {labelEmail}
        </motion.labelEmail>
        <div>
          <input
            type={email}
            style={inputstyle}
            name="password"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>
      </div>
    </div>
  );
}
