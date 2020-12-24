import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Streaming from "./Streaming";
import ToggleButtons from "./ToggleButtons";
import LiveChatUI from "./LiveChatUI";
import WelcomeEffect from "./WelcomeEffect";

const StyledApp = styled.div`
display: flex;
height: 100vh;
overflow:hidden;

main {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: var(--black95);
}

aside {
  flex: 1;
  height: 100%;
  background-color: var(--black);
  padding:1rem;
  color:var(--lightGrey1);
  label{
    margin:16px;
  }

}
`;

const phones = [
  {
    phoneName: "iPhone 8",
    width: "375px",
    height: "667px",
    type:"iphone"
  },
  {
    phoneName: "iPhone 8 Plus",
    width: "414px",
    height: "736px",
    type:"iphone"
  },
  {
    phoneName: "iPhone 11",
    width: "375px",
    height: "812px",
    type:"iphoneX"
  },
  {
    phoneName: "Android",
    width: "360px",
    height: "640px",
    type:"android"
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhone: 0,
      showWelcomeEffect:false,
    };
  }

  handlePhoneSize = (phoneOption) => {
    this.setState({ currentPhone: phoneOption });
  };

  render() {
    return (
      <StyledApp>
        <main>
          <div
            className="phone"
            style={{
              width: phones[this.state.currentPhone].width,
              height: phones[this.state.currentPhone].height,
            }}
          >
            <div className="app">
           
              <Streaming />
              <LiveChatUI type={phones[this.state.currentPhone].type}>
              {this.state.showWelcomeEffect&&<WelcomeEffect level="Diamond"/>}
              </LiveChatUI>
            </div>
          </div>
          <ToggleButtons
            name={"phone-sizes"}
            options={phones.map((phone) => phone.phoneName)}
            handlePhone={this.handlePhoneSize}
            selected={this.state.currentPhone}
          />
        </main>
        <aside>
          <input id="welcome-effect" type="checkbox" onChange={()=>this.setState({showWelcomeEffect:!this.state.showWelcomeEffect})}/>
          <label for="welcome-effect" className="tl-title2">進場特效</label>
        </aside>
      </StyledApp>

    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
