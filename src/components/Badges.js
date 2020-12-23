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
  color: ${props=>props.type==="chat"?levelNumberColor[props.level]:"var(--white)"};
  position:absolute;
  left:16px;
  top:1px;
  text-shadow:var(--text-shadow-for-white);
`;

const levelNumberColor = {
  Bronze:"#CFFCF1",
  Silver:"#CFF1FC",
  Gold:"#FCEFCF",
  Diamond:"#FCCFE5",
  DarkGold:"#E2CFFC"
}


export const LevelBadge = (props) => {
  // props with which level and level number

  if(props.type==="chat"){
    return (
      <StyledLevelBadge >
        <img src={levelBadgeChatroom[props.level]}/>
        <StyledLevelNumber {...props}>{props.levelNumber}</StyledLevelNumber>
      </StyledLevelBadge>
    );
  }else{
    return (
      <StyledLevelBadge>
        <img src={levelBadge[props.level]}/>
        <StyledLevelNumber>{props.levelNumber}</StyledLevelNumber>
      </StyledLevelBadge>
    );

  }
  
};
