import React from "react";
import { marqueeImg } from "../assets";
import styled, { keyframes } from "styled-components";

const marquee = keyframes`
    0%{
        transform: translateX(0);
    }
    10% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    }
    40% {
    -webkit-transform: translateX(calc(242px - 100%));
            transform: translateX(calc(242px - 100%));
    }
    50%{
        transform: translateX(calc(242px - 100%));
    }
    100%{
        transform: translateX(calc(242px - 100%));
    }

`;

const showText = keyframes`

    0%{
        opacity:0;
    }
    5% {
        
        opacity:0;
    }
    10% {
        opacity:1;
       
    }
    100%{
        opacity:1;
    }
`;
const appear = keyframes`
    0%{
        transform: translate(-50%,-150%) scale(0);
    }
    5% {
        transform:translate(-50%,-150%) scale(1);
    }
    48% {
        transform: translate(-50%,-150%) scale(1);
        opacity:1;
    }
    50%{
        transform: translate(-50%,-150%) scale(0);
        opacity:0;
    }
    100%{
        transform: translate(-50%,-150%) scale(0);
        opacity:0;
    }
`;

const StyledPublicMarquee = styled.div`
  height: 72px;
  width: 360px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -150%);
  animation: ${appear} ${(props) => props.duration * 2}s ease-out infinite;
  .marquee-content {
    width: 242px;
    color: var(--white);
    text-shadow: var(--text-shadow-for-white);
    display: flex;
    position: absolute;
    z-index: 10;
    bottom: 24px;
    left: 59px;
    right: 59px;
    overflow: hidden;
    animation: ${showText} ${(props) => props.duration * 2}s ease-out;
    display: flex;
    span {
      flex-shrink: 0;
      animation: ${marquee} ${(props) => props.duration * 2}s linear infinite;
    }
  }
`;

export default function PublicMarquee(props) {
  return (
    <StyledPublicMarquee className="PublicMarquee" {...props}>
      <div className="marquee-content t-title1">
        <span>恭喜小魚兒收到小魚兒的頭號粉絲的心想事成，太棒了～</span>
      </div>
      <img src={marqueeImg.public} height={72} width={360} />
    </StyledPublicMarquee>
  );
}
