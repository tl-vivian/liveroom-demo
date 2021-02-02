import React from 'react';
import styled,{keyframes} from "styled-components";
import Avatar from './Avatar';

const movein = keyframes`
0% {
  transform:translateX(0);
 }
 100% {
  transform:translateX(-200%);
 }
`;
const TextGiftWrapper = styled.div`
    position:absolute;
    height:48px;
    display:inline-flex;
    align-items: center;
    justify-content:flex-start;
    flex-wrap:nowrap;
    background-image: linear-gradient(119deg,  rgba(100,71,189,0.75) 0%,rgba(225,89,89,0.75) 75%,rgba(225,89,89,0) 100%);
    border-radius: 24px 0px 0px 24px;
    color:var(--white);
    text-shadow:var(--text-shadow-for-white);

    >*{
      margin:4px;
    }

    right:0;
    animation: ${movein} 5s linear infinite;
`;

const TextGiftNickname = styled.p`

`;
const TextGiftContent = styled.p`
`;
export default function TextGift(props){
return(
  <TextGiftWrapper className="text-gift">
      <Avatar size={32} imgsrc="https://i.pravatar.cc/50"/>
      <TextGiftNickname className="nickname tl-title3">Nickname:</TextGiftNickname>
      <TextGiftContent className="content tl-caption">{props.content}</TextGiftContent>
  </TextGiftWrapper>
)
}