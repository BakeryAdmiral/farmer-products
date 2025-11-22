import styled from "styled-components";

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 355px 1fr;
  align-items: start;
  padding: 40px 0;
  gap: 20px;

  background-color: ${(props) => props.theme.backgroundColorGray};
`;
