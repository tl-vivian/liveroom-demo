import React from "react";
import { LevelBadge } from "./Badges";

export default function ChatMsg(props) {
  const { user, msgContent } = props;
  return (
    <span className="msg t-body2">
      <LevelBadge
        type="chat"
        level={user.level}
        levelNumber={user.levelNumber}
      />
      <span className="t-bold2 msg-nickname">{user.name}:</span>
      <span className="t-bold2">{msgContent}</span>
    </span>
  );
}
