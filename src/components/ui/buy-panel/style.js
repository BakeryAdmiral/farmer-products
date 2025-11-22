import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const Column = styled.div`
  display: grid;
  gap: 18px;
`;

export const ProductsWrapper = styled.div`
  padding: 24px 16px 12px 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid #0000001a;
`;

export const OrderSummary = styled.div`
  padding: 24px 20px 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid #0000001a;
`;

export const Address = styled.input`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 20px;
  padding: 14px 12px;

  box-sizing: border-box;

  &::placeholder {
    font-family: Inter;
    font-size: 14px;
    line-height: 150%;

    color: ${(props) => props.theme.fontColorBlack};
  }
`;

export const Label = styled.p`
  font-size: 14px;
  line-height: 150%;

  margin: 0;
  margin-bottom: 8px;
  padding: 0;
`;

export const TotalPrice = styled.p``;

export const StyledButton = styled(Button)`
  width: 100%;
`;
