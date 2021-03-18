import React from "react";
import {marqueeImg} from "../assets";
import styled ,{keyframes}from 'styled-components';

const slidein = keyframes`
  0% {
    transform: translateX(-100%);
  }
  10% {
    transform: translateX(0);
  }
  50%{
    transform: translateX(0);
  }
  60% {
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(-100%);
  }
`;
const marquee = keyframes`
0% {
  transform: translateX(0);
}
20% {
  transform: translateX(0);
}
40%{
  transform: translateX(calc(232px - 100%));
}
50% {
  transform: translateX(calc(232px - 100%));
}
100%{
  transform: translateX(calc(232px - 100%));
}
`;

const StyledMarquee = styled.div`
    height:28px;
    width:284px;
    color:var(--white);
    text-shadow:var(--text-shadow-for-white);
    position:absolute;
    left:-16px;
    top:-34px;
    z-index:20;
    animation:${slidein} 10s ease-in-out infinite ;
    .marquee-content{
      position:absolute;
      top:2px;
      left:44px;
      right:8px;
      display:flex;
      overflow:hidden;
        span{
            flex-shrink:0;
            animation: ${marquee} 10s linear infinite;
        }
    }

    .animation-celebrate{
      height:40px;
      width:40px;
      position:absolute;
      top:-6px;
      left:4px;
      z-index:30;
    }
`;


export default function Marquee(props) {
  
  return (
    <StyledMarquee className="marquee" {...props}>
      <img className="animation-celebrate" src={marqueeImg.achievementCelebrate}/>
      <img src={marqueeImg.achievement}/>
      <span className="marquee-content">
          <span>{props.content}</span>
      </span>
    </StyledMarquee>
  );
}
