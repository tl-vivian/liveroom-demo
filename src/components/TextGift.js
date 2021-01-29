import React from 'react';
import styled from "styled-components";
import Avatar from './Avatar';
const TextGiftWrapper = styled.div`

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