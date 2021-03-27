import React from "react";
import styled, { keyframes } from "styled-components";
import Avatar from "./Avatar";
import IconButton from "./IconButton";
import { FireIcon, StarIcon, DiamondIcon } from "../assets";
import AvatarImage from "../assets/img2.png";

const RoomInfoWrapper = styled.div`
  // *{
  //   outline:1px solid red;
  // }
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 22px;
  background-color: var(--black25);
  color: var(--white);
  text-shadow: var(--black50) 0px 0px 3px;

  .host-status {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 8px;
    gap: 4px;
  }

  .icon-button {
    background-color: transparent;
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

const flip = keyframes`
0% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
}
10% {
  -webkit-transform: translateY(-100%);
          transform: translateY(-100%);
}
50%{
  -webkit-transform: translateY(-100%);
          transform: translateY(-100%);
}
60%{
  -webkit-transform: translateY(-200%);
          transform: translateY(-200%);
}

100%
{
  -webkit-transform: translateY(-200%);
          transform: translateY(-200%);
}
`;

const HostnameMarquee = styled.span`
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  height: 16px;
  width: 72px;
  align-items: center;
  .host-nickname {
    animation: ${marquee} 20s linear infinite;
    min-width: 100px;
  }
`;
const HostLiveDataWrapper = styled.div`
  height: 16px;
  overflow-y: hidden;
  .host-live-data {
    display: flex;
    align-items: center;
    animation: ${flip} 6s linear infinite;
  }
`;

export default function RoomInfo() {
  return (
    <RoomInfoWrapper className="host-info">
      <Avatar size={48} imgsrc={AvatarImage} />
      <div className="host-status">
        <HostnameMarquee className="room-info-marquee">
          <p className="host-nickname t-caption">Host Nickname</p>
          <p className="host-nickname t-caption">Host Nickname</p>
        </HostnameMarquee>
        <HostLiveDataWrapper>
          <span className="host-live-data live-popularity t-caption">
            <FireIcon /> 222,222
          </span>
          <span className="host-live-data live-income t-caption">
            <DiamondIcon /> 111,111
          </span>
          <span className="host-live-data live-popularity t-caption">
            <FireIcon /> 222,222
          </span>
        </HostLiveDataWrapper>
      </div>
      <IconButton bgcolor="transparent" color="#eeeeee">
        <StarIcon />
      </IconButton>
    </RoomInfoWrapper>
  );
}
