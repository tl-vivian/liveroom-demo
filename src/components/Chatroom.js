import React from "react";
import ChatMsg from "./ChatMsg";
import * as Icon from "react-feather";

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          user:
          {
            id: 1,
            name: "A",
            level: "Bronze",
            levelNumber: "10"
          },
          msgContent: "Hi, I'm A",
        },
        {
          user:
          {
            id: 1,
            name: "A",
            level: "Bronze",
            levelNumber: "10"
          },
          msgContent: "Hi, I'm B",
        },
        {
          user:
          {
            id: 1,
            name: "A",
            level: "Bronze",
            levelNumber: "10"
          },
          msgContent: "Hi, I'm C",
        },
      ],
      typing: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.typing) {
      const newMsg = {
        user:{       
          id: 4,
          name: "小天使",
          level: "DarkGold",
          levelNumber:"99"
        },
        msgContent: this.state.typing,
      };

      this.setState({ messages: [newMsg, ...this.state.messages], typing: "" });
    }
  };
  render() {
    return (
      <div className="bottom">
        <div className="chatroom">
          <div className="msgs">
            {this.state.messages.map(function (msg) {
              const { user,msgContent } = msg;
              return (
                <ChatMsg
                  user={user}
                  msgContent={msgContent}
                  key
                />
              );
            })}
          </div>
        </div>
        <div className="bottom-ui">
          <form className="chat-input" onSubmit={this.handleSubmit}>
            <button className="icon-button" type="submit">
              <Icon.ArrowRight />
            </button>
            <input
              type="text"
              className="chat-input-box"
              placeholder="來聊天吧"
              value={this.state.typing}
              onChange={(e) => this.setState({ typing: e.target.value })}
            />
          </form>
          <button className="icon-button">
            <Icon.Gift />
          </button>
        </div>
      </div>
    );
  }
}
export default Chatroom;
