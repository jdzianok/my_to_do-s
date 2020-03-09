import React from "react";
import icon from "../assets/header_icon.svg";

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={icon} alt="arrow" />
      <h1>my to do’s</h1>
    </div>
  );
};

export default Header;
