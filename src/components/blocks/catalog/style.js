import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 248px 1fr;
  align-items: start;
  gap: 20px;
  min-height: 288px;
  padding: ${(props) => props.theme.indent};
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid #0000001a;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Image = styled.img`
  display: inline-block;
  grid-column: 1/2;
  width: 100%;
  height: 248px;
  object-fit: contain;
`;

export const Column = styled.div`
  display: grid;
  gap: 15px;
  grid-column: 2 / 3;
`;
