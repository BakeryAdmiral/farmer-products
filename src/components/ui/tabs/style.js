import styled from "styled-components";
import Button from "/src/components/ui/button/button";
import Title from "/src/components/ui/title/title";

export const StyledTitle = styled(Title)`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  min-height: 37px;
  min-width: auto;
  padding: 8px 12px;

  color: ${(props) => (props.active ? "#FFFFFF" : "#333333")};
  background-color: ${(props) => (props.active ? "#88AA4D" : "#F6F6F6")};
  border: 1px solid #0000001a;
  box-sizing: border-box;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:hover {
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => props.theme.panelBackgroundColor};
  }
`;

export const TitleList = styled.div`
  display: inline-flex;
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 150%;

  margin-top: ${(props) => props.theme.indent};
`;

export const Price = styled.div`
  display: ${(props) => (props.active ? "inline-block" : "none")};

  font-weight: 700;
  font-size: 14px;
  line-height: 150%;

  margin: 0;
  margin-top: 14px;
  padding: 0;
  padding: 4px 8px;
  box-sizing: border-box;

  background-color: #d8ecfe;
`;

export const StyledProperty = styled.div`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
