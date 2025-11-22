import styled from "styled-components";
import Checkbox from "../checkbox/checkbox";
import Tick from "/src/assets/tick.svg";

export const StyledItem = styled.span`
  font-size: 18px;
  line-height: 150%;
`;

export const List = styled.ul`
  padding: 0;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const CheckboxItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 56px;
`;

export const StyledCheckbox = styled(Checkbox)`
  appearance: none;
  position: absolute;
  right: 0;
  top: calc(50% - 12px);
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.backgroundColorGray};
  border: 1px solid #333333;

  &:checked {
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${(props) => props.theme.buttonColor};
    background-image: url(${Tick});
  }
`;
