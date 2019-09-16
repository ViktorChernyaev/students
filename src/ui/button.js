import styled from "styled-components";

export const Button = styled.input`
  display: block;
  width: 100%;
  max-width: 150px;
  padding: 0 15px;
  border: 1px solid #e4e7ea;
  border-radius: 3px;
  box-shadow: none;
  outline: none;
  background-color: #e4e7ea;
  font-size: 14px;
  line-height: 36px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #d6dadf;
  }
`;
