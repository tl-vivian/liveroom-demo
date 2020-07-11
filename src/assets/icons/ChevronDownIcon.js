import React from "react";
import styled from "styled-components";

const ChevronDownIconWrapper = styled.svg`
  width: 20px;
  height: 20px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const ChevronDownIcon = () => (
  <ChevronDownIconWrapper aria-hidden="true">
      <path fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3.5 7.5L10 13 16.5 7.5"/>
  </ChevronDownIconWrapper>
);