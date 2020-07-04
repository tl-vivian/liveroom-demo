import React from 'react';
import * as Icon from "react-feather";

export default function RoomInfo(){
return(
    <div className="host-info">
    <div className="avatar40"></div>
    <div className="host-status">
      <p className="host-nickname t-caption">Host Nickname</p>
      <span className="host-live-data t-caption">
        <Icon.Activity size={12} /> 123456
      </span>
    </div>
  </div>
)
}