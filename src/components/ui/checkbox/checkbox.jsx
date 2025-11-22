import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
`;

function Checkbox({ labelComponent, name, value, text, onChange, ...props }) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <input
        name={name}
        value={value}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent>{text}</LabelComponent>
    </Label>
  );
}

export default Checkbox;
