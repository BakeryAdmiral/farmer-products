import React from "react";
import { List, CheckboxItem, StyledCheckbox, StyledItem } from "./style.js";

function CheckboxList({ selectValues, name, options, onChange }) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };
  return (
    <List>
      {options.map((option) => (
        <CheckboxItem key={option.value}>
          <StyledCheckbox
            name={name}
            labelComponent={StyledItem}
            text={option.title}
            value={option.value}
            onChange={handleChange}
          />
        </CheckboxItem>
      ))}
    </List>
  );
}

export default CheckboxList;
