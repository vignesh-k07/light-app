import React from "react";
import "./Header.css";
import lightLogo from "../sun.svg";

export const Header = () => {
  return (
    <div className="navbar">
      <img src={lightLogo} className="bulbLogo" alt="" />
      <h3 className="title">
        Light App
      </h3>
    </div>
  );
};

export default Header;
