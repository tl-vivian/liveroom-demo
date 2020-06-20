import React from "react";
import ReactDOM, { render } from "react-dom";
import * as Icon from "react-feather";
import Chatroom from "./Chatroom";
import Streaming from "./Streaming";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <main>
          <div className="phone">
            <div className="app">
              <Streaming />
              <div className="ui">
                <div className="top-ui">
                  <div className="host-info">
                    <div className="avatar40"></div>
                    <div className="host-status">
                      <p className="host-nickname t-caption">Host Nickname</p>
                      <span className="host-live-data t-caption">
                        <Icon.Activity size={12} /> 123456
                      </span>
                    </div>
                  </div>
                  <button className="icon-button exit-button">
                    <Icon.X />
                  </button>
                </div>
                <div className="clear-zone"></div>
                <Chatroom />
              </div>
            </div>
          </div>
        </main>
        <aside></aside>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
