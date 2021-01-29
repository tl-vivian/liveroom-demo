import React from "react";
import styled ,{keyframes}from 'styled-components';

const slidein = keyframes`
  0% {
    width:0;
   }
   20% {
    width:calc(100% - 84px);
   }
   100%{
    width:calc(100% - 84px);
   }

`;
const marquee = keyframes`
from {
  -webkit-transform: translateX(0);
          transform: translateX(0);
}
to {
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
}
`;

const StyledMarquee = styled.div`
    height:28px;
    width:calc(100% - 84px);
    background-color:var(--yellow);
    color:var(--white);
    text-shadow:var(--text-shadow-for-white);
    position:absolute;
    left:0px;
    top:-34px;
    display:flex;
    align-items:center;
    border-radius:4px;
  
    z-index:20;
    overflow:hidden;
    transform-origin:top left;
    animation:${slidein} ${props=>props.duration}s ease-in-out infinite alternate;
    .marquee-content{
        display:flex;
        span{
            flex-shrink:0;
            animation: ${marquee} 20s linear infinite;
        }
    }
`;


export default function Marquee(props) {
  
  return (
    <StyledMarquee className="marquee" {...props}>
      <span className="marquee-content">
          <span>{props.content}</span>
          <span>{props.content}</span>
      </span>
    </StyledMarquee>
  );
}
