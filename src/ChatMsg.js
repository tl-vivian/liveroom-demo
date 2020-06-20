import React from "react";
import { Hexagon } from "react-feather";

export default function ChatMsg(props) {
  return (
    <span className="msg t-body2">
      <span className="msg-lv-badge t-level-badge-number">
        <Hexagon size={12} />
        {props.level}
      </span>
      <span className="t-title2 msg-nickname">{props.name}:</span>
      <span>{props.msgContent}</span>
    </span>
  );
}
