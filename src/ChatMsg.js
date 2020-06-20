import React from "react";
import { Hexagon } from "react-feather";

export default function ChatMsg() {
  return (
    <span className="msg t-body2">
      <span className="msg-lv-badge t-level-badge-number">
        <Hexagon size={12} />
        99
      </span>
      <span className="msg-lv-badge t-level-badge-number">
        <Hexagon size={12} />
        99
      </span>
      <span className="t-title2 msg-nickname">Nickname:</span>
      <span>from component</span>
    </span>
  );
}
