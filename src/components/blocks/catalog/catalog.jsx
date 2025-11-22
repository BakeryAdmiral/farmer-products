import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Wrapper, Image, Column } from "./style.js";
import Tabs from "../../ui/tabs/tabs.jsx";

function Catalog({ products }) {
  return products && products.length ? (
    <div>
      {products.map((product) => (
        <Wrapper key={product.id}>
          <Image src={product.image} />
          <Column>
            <Title size={TitleSize.SMALL} as="h2">
              {product.title}
            </Title>
            <Tabs {...product}></Tabs>
          </Column>
        </Wrapper>
      ))}
    </div>
  ) : null;
}

export default Catalog;
