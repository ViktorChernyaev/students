import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { StudentsPage } from "features/students";

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

export const Application: React.FC = () => {
  return (
    <>
      <Global />
      <StudentsPage />
    </>
  );
};
