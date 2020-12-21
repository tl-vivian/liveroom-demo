import React from "react";
import styled from "styled-components";
import { levelBadgeChatroom,levelBadge } from "../assets";

const StyledLevelBadge = styled.span`
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
  top:1px;
`;


export const LevelBadgeChatroom = (props) => {
  // props with which level and level number
  return (
    <StyledLevelBadge >
      <img src={levelBadgeChatroom[props.level]}/>
      <StyledLevelNumber>{props.levelNumber}</StyledLevelNumber>
    </StyledLevelBadge>
  );
};

export const LevelBadge = (props) => {
  // props with which level and level number
  return (
    <StyledLevelBadge >
      <img src={levelBadge[props.level]}/>
      <StyledLevelNumber>{props.levelNumber}</StyledLevelNumber>
    </StyledLevelBadge>
  );
};
