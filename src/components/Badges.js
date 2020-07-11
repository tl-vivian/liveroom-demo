import React from "react";
import styled from "styled-components";
import { levelBadgeSmall } from "../assets";

const StyledLevelBadgeSmall = styled.span`
  display: inline-block;
  height: 20px;
  border-radius: 4px;
  width: 36px;
  position:relative;
`;

const StyledLevelNumber = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: var(--white);
  position:absolute;
  left:16px;
  top:2px;
`;


export const LevelBadgeSmall = (props) => {
  // props with which level and level number
  return (
    <StyledLevelBadgeSmall >
      <img src={levelBadgeSmall[props.level]}/>
      <StyledLevelNumber>{props.levelNumber}</StyledLevelNumber>
    </StyledLevelBadgeSmall>
  );
};
