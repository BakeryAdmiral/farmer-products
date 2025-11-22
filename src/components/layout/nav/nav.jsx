import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";
import { StyledButton } from "./style";

const Buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    ),
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить билет
      </Button>
    ),
  },
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      {Buttons.filter((button) => button.to !== pageUrl).map(
        (button) => button.button
      )}
    </nav>
  );
}

export default Nav;
