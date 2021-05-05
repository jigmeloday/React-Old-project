import React from "react";
import "./cus-button.style.scss";
const CusButton = ({ children, isGoogle, inverted, ...otherButtonProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogle ? "google-sign-in" : ""
    } custom-button`}
    {...otherButtonProps}
  >
    {children}
  </button>
);
export default CusButton;
