import React from "react";
import styled ,{keyframes}from 'styled-components';

const slidein = keyframes`
0% {
    left:-359px;
    width:0;
   }
   20% {
    left:0px;
   }
   50%{
    width:calc(100% - 84px);
   }
 
   100% {
   
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
    display:flex;
    align-items:center;
    padding:4px 8px;
    border-radius:4px;
    top:80px;
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
