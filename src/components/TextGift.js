import React from 'react';
import styled from "styled-components";
import Avatar from './Avatar';
const TextGiftWrapper = styled.div`
    height:48px;
    display:inline-block;
    background-image: linear-gradient(119deg, rgba(225,89,89,0.75) 0%, rgba(100,71,189,0.75) 100%);
    border-radius: 4px 4px 4px 4px 0 0 0;
`;

const TextGiftNickname = styled.p`

`;
const TextGiftContent = styled.p`

`;
export default function TextGift(props){
return(
  <TextGiftWrapper className="text-gift">
      <Avatar size={32} imgsrc="https://i.pravatar.cc/50"/>
      <TextGiftNickname className="nickname tl-title3">Nickname</TextGiftNickname>
      <TextGiftContent className="content tl-caption">{props.content}</TextGiftContent>
  </TextGiftWrapper>
)
}