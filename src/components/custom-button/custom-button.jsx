// CustomButton.js
import React from "react";
import "./custom-button.scss";
import { Link } from "react-router-dom";

const CustomButton = ({ label }) => {
  return (
    <Link className="custom-button">
      {label}
      <span>&gt;</span>
    </Link>
  );
};

export default CustomButton;
