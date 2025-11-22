import React from "react";
import Catalog from "/src/components/blocks/catalog/catalog";
import BuyPanel from "../../ui/buy-panel/buy-panel";
import { FormWrapper } from "./style.js";

function BuyPage({ products }) {
  return (
    <FormWrapper>
      <BuyPanel products={products} />
      <Catalog products={products} />
    </FormWrapper>
  );
}

export default BuyPage;
