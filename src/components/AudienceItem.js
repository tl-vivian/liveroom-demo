import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { LevelBadge } from "./Badges";
const AudienceItemWrapper = styled.ul`
  display: flex;
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  color: white;
  .avatar {
    margin: 8px;
  }
  .level-badge {
    margin-left: 8px;
  }
  .audience-nickname {
    margin-left: 4px;
  }
`;
const AudienceItemSuperWrapper = styled.li`
 height:140px;
 width:calc(100% / 3);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
 color:white;
.avatar{
    margin:8px;
}
.level-badge{
    margin-top:-4px;
}
.audience-nickname{
    width:80%;
    overflow:hidden;
`;

export function AudienceItem() {
  return (
    <AudienceItemWrapper className="audience-item">
      <Avatar size={48} imgsrc="https://i.pravatar.cc/50" />
      <LevelBadge level="Bronze" levelNumber={30} />
      <p className="audience-nickname tl-body2">NicknameNickname</p>
    </AudienceItemWrapper>
  );
}

export function AudienceItemSuper() {
  return (
    <AudienceItemSuperWrapper className="audience-item">
      <Avatar size={48} imgsrc="https://i.pravatar.cc/50" />
      <LevelBadge level="Bronze" levelNumber={30} />
      <p className="audience-nickname tl-body2">NicknameNickname</p>
    </AudienceItemSuperWrapper>
  );
}
