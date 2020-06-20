import React from "react";
import ReactDOM from "react-dom";
import * as Icon from "react-feather";

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
                  <span class="msg t-body2">
                    <span class="msg-lv-badge t-level-badge-number">
                      <Icon.Hexagon size={12} />
                      99
                    </span>
                    <span class="msg-lv-badge t-level-badge-number">
                      <Icon.Hexagon size={12} />
                    </span>
                    <span class="t-title2 msg-nickname">Nickname:</span>
                    <span>
                      first msg 12345678912345697/1234
                      5678912345697/12345678912345697/12345678 912345697 /12 34
                      56789 12345697 /1234567891
                    </span>
                  </span>
                  <span class="msg t-body2">
                    <span class="msg-lv-badge t-level-badge-number">
                      <Icon.Hexagon size={12} />
                      123
                    </span>
                    <span class="msg-lv-badge t-level-badge-number">
                      <Icon.Hexagon size={12} />
                      99
                    </span>
                    <span class="t-title2">Nickname:</span>
                    <span>2 msg 1234567891</span>
                  </span>
                  <span class="msg t-body2">
                    <span class="msg-lv-badge t-level-badge-number">
                      <Icon.Hexagon size={12} />
                      99
                    </span>
                    <span class="msg-lv-badge t-level-badge-number">
                      <Icon.Hexagon size={12} />
                      99
                    </span>
                    <span class="t-title2">Nickname:</span>
                    <span>3 msg1234567891</span>
                  </span>
                  <span class="msg t-body2">
                    <span class="msg-lv-badge t-level-badge-number">
                      <Icon.Hexagon size={12} />
                      99
                    </span>
                    <span class="msg-lv-badge t-level-badge-number">
                      <Icon.Hexagon size={12} />
                      99
                    </span>
                    <span class="t-title2">Nickname:</span>
                    <span>4 msg 1234567891</span>
                  </span>
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
