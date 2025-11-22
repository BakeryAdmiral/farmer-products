import React, { useState } from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import CheckboxList from "../checkbox-list/checkbox-list.jsx";
import {
  ProductsWrapper,
  Column,
  OrderSummary,
  Label,
  StyledButton,
  Address,
  TotalPrice,
} from "./style.js";

function BuyPanel({ products }) {
  const options = products.map((product) => ({
    title: product.title,
    value: product.id,
  }));
  const [selectType, setSelectType] = useState([]);

  const selectedProducts = selectType.map((id) =>
    products.find((product) => product.id === id)
  );
  const totalPrice = selectedProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );
  const [address, setAddress] = useState("");
  return (
    <Column>
      <ProductsWrapper>
        <Title size={TitleSize.EXTRA_SMALL} as="h2">
          Выберите продукты
        </Title>
        <CheckboxList
          name={"selected-product"}
          options={options}
          selectValues={selectType}
          onChange={setSelectType}
        />
      </ProductsWrapper>
      <OrderSummary>
        <Title size={TitleSize.EXTRA_SMALL} as="h2">
          Сделать заказ
        </Title>
        <Address
          value={address}
          onChange={(evt) => setAddress(evt.target.value)}
          placeholder="Введите адрес доставки"
        />
        <Label>Цена</Label>
        <TotalPrice>{totalPrice} руб.</TotalPrice>
        <StyledButton type="submit" disabled={!(selectType.length && address)}>
          Купить
        </StyledButton>
      </OrderSummary>
    </Column>
  );
}

export default BuyPanel;
