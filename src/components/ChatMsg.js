import React from "react";
import { LevelBadgeChatroom } from "./Badges";

export default function ChatMsg(props) {
  console.log("chatmessage",props)
  const {user,msgContent} = props;
  return (
    <span className="msg t-body2">
      <LevelBadgeChatroom level={user.level} levelNumber={user.levelNumber} />
      <span className="t-bold2 msg-nickname">{user.name}:</span>
      <span className="t-bold2">{msgContent}</span>
    </span>
  );
}
