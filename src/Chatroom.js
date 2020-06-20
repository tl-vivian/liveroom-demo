import React from "react";
import ChatMsg from "./ChatMsg";
import * as Icon from "react-feather";

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: 1, name: "A", level: "10", msgContent: "Hi, I'm A" },
        { id: 2, name: "B", level: "20", msgContent: "Hi, I'm B" },
        { id: 3, name: "C", level: "30", msgContent: "Hi, I'm C" },
      ],
      typing: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.typing) {
      const newMsg = {
        id: 4,
        name: "小天使",
        level: "30",
        msgContent: this.state.typing,
      };

      this.setState({ messages: [newMsg, ...this.state.messages], typing: "" });
    }
  };
  render() {
    return (
      <div className="bottom">
        <div className="chatroom">
          <div className="fade-shade"></div>
          <div className="msgs">
            {this.state.messages.map(function (msg) {
              const { name, level, msgContent, id } = msg;
              return (
                <ChatMsg
                  name={name}
                  level={level}
                  msgContent={msgContent}
                  key={id}
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
