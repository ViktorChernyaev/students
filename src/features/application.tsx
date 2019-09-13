import React from "react";
import { createGlobalStyle } from "styled-components";
import { Students } from "features/students/index";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
    margin: 0;
  }
`;

export const Application = () => {
  return (
    <>
      <Global />
      <Students />
    </>
  );
};
