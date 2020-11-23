import React from "react";
import styled from "styled-components";
import ChatMsg from "./ChatMsg";
import IconButton from "./IconButton";
import RoomInfo from "./RoomInfo";
import { ChevronDownIcon } from "../assets";
import { ArrowIcon, ScreenshotIcon, EmojiIcon } from "../assets";
import animatedGiftButton from "../assets/giftButton.webp";
import emojiPanel from "./EmojiPanel";
import EmojiPanel from "./EmojiPanel";

const UI = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ChatroomWrapper = styled.div`
  width: calc(100% - 112px);
  height: 160px;
  /* border: 1px solid #fff; */
  position: relative;
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 30% 100%
  );
`;
const BottomControls = styled.div`
  margin-top: 16px;
  margin-left: -4px;
  margin-right: -4px;
  display: flex;
  > * {
    margin: 4px;
  }
  .chat-input {
    position: relative;
    flex: 1;
  }
  .chat-input button {
    position: absolute;
    right: 0;
    background: none;
  }

  input.chat-input-box {
    height: 40px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid var(--white0);
    background-color: var(--white25);
    color: var(--white);
    padding-left: 12px;
    font-size: 14px;
    text-shadow: var(--text-shadow-for-white);
  }
  .chat-input-box::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--white);
    opacity: 1; /* Firefox */
  }
  .chat-input-box:focus {
    background-color: var(--white25);
    border: 1px solid var(--white50);
  }
`;

class LiveChatUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          user: {
            id: 1,
            name: "A",
            level: "Bronze",
            levelNumber: "10",
          },
          msgContent: "Hi, I'm A",
        },
        {
          user: {
            id: 1,
            name: "A",
            level: "Bronze",
            levelNumber: "10",
          },
          msgContent: "Hi, I'm B",
        },
        {
          user: {
            id: 1,
            name: "A",
            level: "Bronze",
            levelNumber: "10",
          },
          msgContent: "Hi, I'm C",
        },
      ],
      typing: "",
      emojiPanel: true,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.typing) {
      const newMsg = {
        user: {
          id: 4,
          name: "小天使",
          level: "DarkGold",
          levelNumber: "99",
        },
        msgContent: this.state.typing,
      };

      this.setState({ messages: [newMsg, ...this.state.messages], typing: "" });
    }
  };
  render() {
    return (
      <div>
        <UI>
          <div className="top-ui">
            <RoomInfo />
            <IconButton>
              <ChevronDownIcon />
            </IconButton>
          </div>
          <div className="clear-zone"></div>
          <ChatroomWrapper>
            <div className="msgs">
              {this.state.messages.map(function (msg) {
                const { user, msgContent } = msg;
                return <ChatMsg user={user} msgContent={msgContent} key />;
              })}
            </div>
          </ChatroomWrapper>
          <BottomControls>
            <form className="chat-input" onSubmit={this.handleSubmit}>
              <IconButton>
                <ArrowIcon />
              </IconButton>
              <input
                type="text"
                className="chat-input-box"
                placeholder="來聊天吧"
                value={this.state.typing}
                onChange={(e) => this.setState({ typing: e.target.value })}
              />
            </form>
            <IconButton>
              <EmojiIcon />
            </IconButton>
            <IconButton>
              <img src={animatedGiftButton} width="100%" />
            </IconButton>
          </BottomControls>
        </UI>
        <EmojiPanel />
      </div>
    );
  }
}
export default LiveChatUI;
