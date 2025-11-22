import React, { useState } from "react";
import Description from "../../ui/description/description.jsx";
import {
  StyledProperty,
  StyledButton,
  StyledTitle,
  Content,
  TitleList,
  Price,
} from "./style.js";

function Tabs({ description, specification, structure, price, weight }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: "Описание",
      content: (
        <>
          <Description text={description}></Description>
          <Price active>
            {price} руб. / {weight} гр.
          </Price>
        </>
      ),
    },
    {
      title: "Характеристики",
      content: (
        <>
          {specification &&
            specification.length &&
            specification.map((item) => (
              <StyledProperty>
                <b>{item.property + " "}</b>
                {item.value}
              </StyledProperty>
            ))}
        </>
      ),
    },
    {
      title: "Свойства",
      content: (
        <>
          {structure &&
            structure.length &&
            structure.map((item) => (
              <StyledProperty>
                <b>{item.property}</b>
                {item.value}
              </StyledProperty>
            ))}
        </>
      ),
    },
  ];
  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((tab, index) => {
            if (index === activeTab) {
              return (
                <StyledButton active>
                  <StyledTitle as="h3">{tab.title}</StyledTitle>
                </StyledButton>
              );
            }
            return (
              <StyledButton onClick={() => setActiveTab(index)}>
                <StyledTitle as="h3">{tab.title}</StyledTitle>
              </StyledButton>
            );
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </div>
  );
}

export default Tabs;
