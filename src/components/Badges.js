import React from "react";
import styled from "styled-components";
import { levelBadge } from "../assets";

const styledLevelBadgeSmall = styled.span`
  display: inline-block;
  background: url(${levelBadge.BronzeSmall});
  height: 20px;
  border-radius: 4px;
  width: 36px;
`;

const styledLevelNumber = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: var(--white);
`;
export const levelBadgeSmall = (props) => {
  // props with which level and level number
  return (
    <styledLevelBadgeSmall>
      <Hexagon size={12} />
      <styledLevelNumber>{props.levelNumber}</styledLevelNumber>
    </styledLevelBadgeSmall>
  );
};
