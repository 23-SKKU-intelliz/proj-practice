import styled from "styled-components";

export const StyledNeumorphismButton = styled.button`
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background-color: #f1f1f1;
  border: 0;
  width: fit-content;
  padding: 5px;

  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7),
      inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }
`;
