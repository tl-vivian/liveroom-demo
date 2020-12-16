import React from 'react';
import styled from "styled-components";
import Avatar from './Avatar';
import IconButton from './IconButton';
import {FireIcon,HeartPlusIcon} from '../assets';
import * as Icon from "react-feather";


const RoomInfoWrapper = styled.div`
  position:absolute;
  top:0;
  left:0;
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
    margin-left:8px;
    gap:4px;
  }
  .host-live-data {
    display: flex;
    align-items: center;

  }
  
  .host-live-data svg.feather {
    height: 12px;
    width: 12px;
  }
  .icon-button{
    background-color:transparent;
  }
`;
export default function RoomInfo(){
return(
    <RoomInfoWrapper className="host-info">
    <Avatar width={48} height={48} />
    <div className="host-status">
      <p className="host-nickname t-caption">Host Nickname</p>
      <span className="host-live-data t-caption">
        <FireIcon/> 123456
      </span>
    </div>
    <IconButton bgcolor="transparent" color="#fd856d"><HeartPlusIcon/></IconButton>
  </RoomInfoWrapper>
)
}