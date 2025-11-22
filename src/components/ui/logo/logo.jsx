import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { Text, StyledLogo } from "./styles";
import { AppRoute } from "/src/const";

// Логотип сайта с названием
function Logo() {
  return (
    <StyledLogo to={AppRoute.MAIN}>
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
