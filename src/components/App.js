import React from "react";
import ReactDOM, { render } from "react-dom";
import * as Icon from "react-feather";
import Chatroom from "./Chatroom";
import Streaming from "./Streaming";
import ToggleButtons from "./ToggleButtons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhone: 1,
    };
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
          <ToggleButtons
            name={"phone-variation"}
            options={["iphone 8", "iphone 8 plus", "android"]}
          />
        </main>
        <aside></aside>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
