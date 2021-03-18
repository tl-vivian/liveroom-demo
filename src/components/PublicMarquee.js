import React from "react";
import {marqueeImg} from '../assets';
import styled ,{keyframes}from 'styled-components';

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

const expand = keyframes`
    from{
        transform: scaleX(0);
        opacity:0;
    }
    20%{
        transform: scaleX(1);
        opacity:0;
    }
    25%{
        opacity:1;
    }
    to{
        transform: scaleX(1)
    }
`;

const StyledPublicMarquee = styled.div`
    height:72px;
    width:360px;
    position:absolute;
    left:50%;
    transform:translate(-50%,-150%);
    .marquee-content{
        width:242px;
        color:var(--white);

        text-shadow:var(--text-shadow-for-white);
        display:flex;
        position:absolute;
        z-index:10;
        bottom:24px;
        left:59px;
        right:59px;
        overflow:hidden;
        animation:${expand} 4.8s ease-out;
        display:flex;
        span{
            flex-shrink:0;
            animation: ${marquee} 10s 2s linear;
        }
    }
`;



export default function PublicMarquee(props) {
  
  return (
    <StyledPublicMarquee className="PublicMarquee" {...props}>
        <div className="marquee-content t-title1">
            <span>恭喜小魚兒收到小魚兒的頭號粉絲的心想事成，太棒了～</span>
        </div>
        <img src={marqueeImg.public} height={72} width={360}/>
    </StyledPublicMarquee>
  );
}
