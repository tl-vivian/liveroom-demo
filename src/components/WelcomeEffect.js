import React from "react";
import { LevelBadge } from "./Badges";
import styled ,{keyframes}from 'styled-components';

const slide = keyframes`
0% {
  left:-359px;
 }
 20% {
  left:0px;
 }
 80% {
  opacity:1;
 }
 100% {
  opacity:0;
 }

`;


const StyledWelcomeEffect = styled.div`
    position:absolute;
    top:100px;
    z-index:100;
    width:360px;
    height:32px;
    display:flex;
    align-items:center;
    padding-left:8px;
    animation: ${slide} 2.5s ease-in-out infinite ;
    background-image:${props=>levelEffectBgColor[props.level]};
    
    :before{
      content:"";
      clip-path: polygon(0 0, 100% 0, 50% 100%, 0% 100%);
      background-color:var(--black25);
      width:64px;
      height:32px;
      position:absolute;
      left:0;
      z-index:-1;
    }
    
`;

const StyledEffectText = styled.p`
  color:var(--white);
  text-shadow:var(--text-shadow-for-white);
  margin-left:4px;
`;

const levelEffectBgColor = {

  Silver:"linear-gradient(130deg, rgba(48,99,159,0.93) 0%, rgba(55,146,186,0.83) 17%, rgba(68,167,171,0.78) 38%, rgba(87,223,192,0.38) 75%, rgba(226,226,226,0.00) 92%, rgba(255,255,255,0.00) 100%)",
  Gold:"linear-gradient(127deg, rgba(200,94,0,0.72) 0%, rgba(253,184,70,0.75) 15%, rgba(255,173,42,0.59) 37%, rgba(204,89,89,0.49) 64%, rgba(255,229,173,0.00) 92%, rgba(255,240,197,0.00) 100%)",
  Diamond:"linear-gradient(103deg, #8E1A4A 17%, rgba(204,55,157,0.54) 47%, rgba(123,153,245,0.48) 74%, rgba(37,26,52,0.00) 93%, rgba(0,0,0,0.00) 100%);",
  DarkGold:"linear-gradient(124deg, rgba(31,5,66,0.89) 0%, rgba(11,6,19,0.93) 8%, rgba(58,18,112,0.69) 15%, rgba(181,51,73,0.55) 37%, rgba(183,54,71,0.54) 39%, rgba(255,175,0,0.42) 62%, rgba(0,0,0,0.00) 90%, rgba(0,0,0,0.00) 100%, rgba(0,0,0,0.00) 100%)"
}



export default function WelcomeEffect(props) {

  return(
      <StyledWelcomeEffect level={props.level} className="welcome-effect">
         <LevelBadge type="chat" level={props.level} levelNumber={12}/>
         <StyledEffectText className="tl-title2">一二三四五六七八九十一二進來了</StyledEffectText>
      </StyledWelcomeEffect>
   
  )
}



