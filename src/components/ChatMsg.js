import React from "react";
import { Hexagon } from "react-feather";
import { levelBadge } from "./Badges";

export default function ChatMsg(props) {
  return (
    <span className="msg t-body2">
      {/* <span className="msg-lv-badge t-level-badge-number">
        <Hexagon size={12} />
        {props.level}
      </span> */}
      <levelBadge level={props} />
      <span className="t-bold2 msg-nickname">{props.name}:</span>
      <span className="t-bold2">{props.msgContent}</span>
    </span>
  );
}
