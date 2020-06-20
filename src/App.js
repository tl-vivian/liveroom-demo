import React from "react";
import ReactDOM from "react-dom";
import * as Icon from "react-feather";
import ChatMsg from "./ChatMsg";

const App = () => {
  return (
    <div className="content">
      <main>
        <div class="phone">
          <div class="app">
            <div class="streaming"></div>
            <div class="shades">
              <div class="top-shade"></div>
              <div class="bottom-shade"></div>
            </div>
            <div class="ui">
              <div class="top-ui">
                <div class="host-info">
                  <div class="avatar40"></div>
                  <div class="host-status">
                    <p class="host-nickname t-caption">Host Nickname</p>
                    <span class="host-live-data t-caption">
                      <Icon.Activity size={12} /> 123456
                    </span>
                  </div>
                </div>
                <button class="icon-button exit-button">
                  <Icon.X />
                </button>
              </div>
              <div class="clear-zone"></div>
              <div class="chatroom">
                <div class="fade-shade"></div>
                <div class="msgs">
                  <ChatMsg />
                  <ChatMsg />
                </div>
              </div>
              <div class="bottom-ui">
                <input type="text" class="chat-input" placeholder="來聊天吧" />
                <button class="icon-button">
                  <Icon.Share2 />
                </button>
                <button class="icon-button">
                  <Icon.Crop />
                </button>
                <button class="icon-button">
                  <Icon.Gift />
                </button>
              </div>
            </div>
          </div>
          <div class="mockup"></div>
        </div>
        <div class="phone-variation"></div>
      </main>
      <aside></aside>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
