import React from "react";
import { CustomButtonContainer } from "./cus-button.style";
const CusButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
export default CusButton;
