import React from "react";
import ReactDOM from "react-dom";
import Chatroom from "./Chatroom";
import Streaming from "./Streaming";
import ToggleButtons from "./ToggleButtons";
import RoomInfo from './RoomInfo';
import IconButton from './IconButton'

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
                 <RoomInfo/>
                <IconButton/>
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
