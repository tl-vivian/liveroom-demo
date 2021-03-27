import React from "react";
import styled from "styled-components";
import ChatMsg from "./ChatMsg";
import IconButton from "./IconButton";
import RoomInfo from "./RoomInfo";
import RoomTopic from "./RoomTopic";
import Tab from "./Tab";
import Tabs from "./Tabs";
import Audience from "./Audience";
import BulletinButton from "./BulletinButton";
import {
  UserIcon,
  ShareIcon,
  XIcon,
  ArrowIcon,
  ScreenshotIcon,
} from "../assets";
import animatedGiftButton from "../assets/giftButton.webp";

const UIWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  position: absolute;
  scroll-snap-type: x mandatory;
  .ui-none {
    background-color: none;
  }
  .ui-ranking {
    background: linear-gradient(
      180deg,
      rgba(34, 34, 34, 0.95) 27%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const PageContainer = styled.div`
  height: 100%;
  width: 300%;
  display: flex;
`;
const Page = styled.div`
  height: 100%;
  width: 33.333333%;
  z-index: 10;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: ${(props) => (props.type == "iphoneX" ? "44px" : "24px")};
  padding-bottom: ${(props) => (props.type == "iphoneX" ? "50px" : "16px")};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-snap-align: center;
  // overflow-x:hidden;
`;
const TopControls = styled.div`
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  .host-info {
    position: absolute;
  }
`;
const SecondControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ClearZone = styled.div`
  flex: 1;
  width: 100%;
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
const Messages = styled.div`
  height: 100%;
  max-width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
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
    this.pages = React.createRef();
    this.viewBox = React.createRef();
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
      isDown: false,
      startX: 0,
      startY: 0,
      dx: 0,
      offset: {},
      scrollLeft: 375,
    };
  }
  componentDidMount() {
    let rect = this.pages.current.getBoundingClientRect();
    this.pages.current.scrollLeft = this.state.scrollLeft;
    this.setState({ offset: { x: rect.x, y: rect.y } });
    // 目前這樣寫的話，再改了 phone type 的時候 offset 數字會不對
    // 應該要在修改 phone type 的時候更新這個數字
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
  handleMouse = (e) => {
    if (e.type === "mousedown") {
      this.setState({
        isDown: true,
        startX: e.clientX - this.state.offset.x,
        startY: e.clientY - this.state.offset.y,
        scrollLeft: this.pages.current.scrollLeft,
      });
    } else {
      this.setState({ isDown: false });
    }
  };

  handleMouseMove = (e) => {
    if (this.state.isDown) {
      const currentX = e.clientX - this.state.offset.x;
      const currentY = e.clientY - this.state.offset.y;
      const dx = currentX - this.state.startX;
      this.pages.current.scrollLeft = this.state.scrollLeft - dx;
      console.log(currentX, currentY, dx);
    }
  };
  handleChangePage = () => {
    
  };
  render() {
    return (
      <UIWrapper className="UI" ref={this.pages}>
        <PageContainer
          {...this.props}
          onMouseDown={this.handleMouse}
          onMouseUp={this.handleMouse}
          onMouseMove={this.handleMouseMove}
        >
          <Page className="ui-none"></Page>
          <Page className="UI ui-main" {...this.props}>
            <TopControls className="top-controls">
              <RoomInfo />
              <IconButton bgcolor="var(--black25)">
                <UserIcon />
              </IconButton>
              <IconButton bgcolor="var(--black25)">
                <ShareIcon />
              </IconButton>
              <IconButton bgcolor="var(--black25)">
                <XIcon />
              </IconButton>
            </TopControls>
            <SecondControls className="second-controls">
              <RoomTopic />
              <BulletinButton />
            </SecondControls>
            <ClearZone className="clear-zone">{this.props.children}</ClearZone>
            <ChatroomWrapper>
              <Messages>
                {this.state.messages.map(function (msg, index) {
                  const { user, msgContent } = msg;
                  return (
                    <ChatMsg user={user} msgContent={msgContent} key={index} />
                  );
                })}
              </Messages>
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
                <ScreenshotIcon />
              </IconButton>
              <IconButton>
                <img src={animatedGiftButton} width="100%" />
              </IconButton>
            </BottomControls>
          </Page>
          <Page className="ui-ranking">
            <Tabs>
              <Tab active>陪伴區</Tab>
              <Tab>送禮榜</Tab>
              <Tab>收禮榜</Tab>
            </Tabs>
            <Audience />
          </Page>
        </PageContainer>
      </UIWrapper>
    );
  }
}
export default LiveChatUI;
