import React from "react";
import { ButtonContainer } from "./ButtonSyles";

const Button = ({ primary, link, click, children }) => {

  return (
    <>
      <ButtonContainer onClick={click} primary={primary} to={link}>{children}</ButtonContainer>
    </>
  );
};

export default Button;
