import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Streaming from "./Streaming";
import ToggleButtons from "./ToggleButtons";
import LiveChatUI from "./LiveChatUI";
import WelcomeEffect from "./WelcomeEffect";
import Marquee from "./Marquee";
import PublicMarquee from "./PublicMarquee";
import BulletText from "./BulletText";


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
  display:flex;
  flex-direction:column;
  summary{
    margin-bottom:16px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    input{
      position:absolute;
      right:0;
    }
  }
  .option-input{
    display:flex;
    align-items:baseline;
    justify-content:space-between;
    margin:8px 0;
    label{
      color:var(--grey2);
      flex-shrink:0;
      margin-right:4px;
    }
    input{
      flex:1 1 10px;
      background-color:var(--grey1);
      border-radius:4px;
      color:var(--roseBrown);
      padding:4px 8px;
      text-align:center;
      font-weight:bold;
    }
  }
}
`;
const BulletTextArea = styled.div`
  position:absolute;
  bottom:32px;
  left:-16px;
  right:-16px;
  height:56px;
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
      marquee:{
        show:true,
        duration:5,
        content:"恭喜婕兒達成 20 萬熱度，一起歡呼吧～"
      },
      bulletText:{
        show:true,
        content:"彈幕～彈幕～彈幕～"
      },
      publicMarquee:{
        show:true,
        duration:10,
      },
      gift:{
        show:true,
      },
      comboGift:{
        show:true,
      },
      npc:{
        show:true,
      }
    };
  }

  handlePhoneSize = (phoneOption) => {
    this.setState({ currentPhone: phoneOption });
  };

  handleMarqueeDuration = (event)=>{
  this.setState({marquee:{...this.state.marquee, duration:event.target.value}});
  }
  handlePublicMarqueeDuration = (event)=>{
    this.setState({publicMarquee:{...this.state.publicMarquee, duration:event.target.value}});
    }
  handleMarqueeContent = (event)=>{
  this.setState({marquee:{...this.state.marquee, content:event.target.value}});
  }
  handleBulletTextContent=(event)=>{
    this.setState({bulletText:{...this.state.bulletText,content:event.target.value}})
  }

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
              {this.state.publicMarquee.show&&<PublicMarquee duration={this.state.publicMarquee.duration}/>}
              {this.state.showWelcomeEffect&&<WelcomeEffect level="Diamond"/>}
              {this.state.marquee.show&&<Marquee duration={this.state.marquee.duration} content={this.state.marquee.content}/>}
              <BulletTextArea className="bullet-text-area">
              {this.state.bulletText.show&&<BulletText content={this.state.bulletText.content}/>}           
              </BulletTextArea>
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
      
            <details className="control-options welcome-effect-options" open>
              <summary>進場特效<input id="welcome-effect" type="checkbox" checked onChange={()=>this.setState({showWelcomeEffect:!this.state.showWelcomeEffect})}/></summary>
            </details>
            <details className="control-options marquee-effect-options" open>
              <summary>跑馬燈<input id="marquee-effect" type="checkbox" checked onChange={()=>this.setState({marquee:{...this.state.marquee,show:!this.state.marquee.show}})}/></summary>
    
              <div className="option-input">
                <label className="t-body2" htmlFor="marquee-duration">長度(s)</label>
                <input id="marquee-duration" type="text" value={this.state.marquee.duration} onChange={this.handleMarqueeDuration}/>
              </div>
              <div className="option-input">
                <label className="t-body2" htmlFor="marquee-content">內容</label>
                <input id="marquee-content" type="text" value={this.state.marquee.content} onChange={this.handleMarqueeContent}/>
              </div>
            </details>
            <details className="control-options bullet-text-options" open>
              <summary>彈幕<input id="bullet-text-effect" type="checkbox" checked onChange={()=>this.setState({bulletText:{...this.state.bulletText,show:!this.state.bulletText.show}})}/></summary>
              <div className="option-input">
                <label className="t-body2" htmlFor="bullet-text-content">內容</label>
                <input id="bullet-text-content" type="text" value={this.state.bulletText.content} onChange={this.handleBulletTextContent}/>
                <input id="bullet-text" type="button" onChange={()=>this.setState({showWelcomeEffect:!this.state.showWelcomeEffect})}/>
              </div>
            </details>
            <details className="control-options public-marquee-options" open>
              <summary>全域跑馬燈<input id="public-marquee-effect" type="checkbox" checked onChange={()=>this.setState({publicMarquee:{...this.state.publicMarquee,show:!this.state.publicMarquee.show}})}/></summary>
              <div className="option-input">
              <label className="t-body2" htmlFor="public-marquee-duration">長度(s)</label>
              <input id="public-marquee-duration" type="text" value={this.state.publicMarquee.duration} onChange={this.handlePublicMarqueeDuration}/>
              </div>
              
            </details>

        </aside>
      </StyledApp>

    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
