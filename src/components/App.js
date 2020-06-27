import React from "react";
import ReactDOM, { render } from "react-dom";
import * as Icon from "react-feather";
import Chatroom from "./Chatroom";
import Streaming from "./Streaming";
import ToggleButtons from "./ToggleButtons";

const phones = [
  {
    phoneName:"iPhone 8",
    width:"375px",
    height:"667px"
  },
  {
    phoneName:"iPhone 8 Plus",
    width:"414px",
    height:"736px"
  },
  {
    phoneName:"Android",
    width:"360px",
    height:"640px"
  }
]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhone: 0,
    };
    
  }
 
  handlePhoneSize = (phoneOption)=>{
    this.setState({currentPhone:phoneOption});
  }
  
  render() {
    return (
      <div className="content">
        <main>
          <div className="phone" 
              style={{width:phones[this.state.currentPhone].width,height:phones[this.state.currentPhone].height}} > 
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
            name={"phone-sizes"}
            options={phones.map((phone)=>phone.phoneName)}
            handlePhone={this.handlePhoneSize}
            selected={this.state.currentPhone}
          />
        </main>
        <aside></aside>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
