import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { StudentsPage } from "features/students";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    margin: 0;
    overflow-x: hidden;
    background-color: #e4e5e6;
    color: #23282c;
    font-family: "Roboto", sans-serif;
  }
`;

export const Application: React.FC = () => {
  return (
    <>
      <Global />
      <StudentsPage />
    </>
  );
};
