import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  position: absolute
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
`;

const Svg = styled.svg`
  width: 50px;
  transform-origin: center;
  animation: ${rotate} 2s linear infinite;

  circle {
    fill: none;
    stroke: #bbb;
    stroke-width: 3;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

export const Spinner = () => {
  return (
    <Wrapper>
      <Svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" />
      </Svg>
    </Wrapper>
  );
};
