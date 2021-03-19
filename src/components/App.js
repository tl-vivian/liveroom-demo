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
      welcomeEffect:{
        show:false,
      },
      marquee:{
        show:false,
        duration:5,
        content:"恭喜婕兒達成 20 萬熱度，一起歡呼吧～"
      },
      bulletText:{
        show:true,
        content:"",
        inputContent:"",
        queue:null,
      },
      publicMarquee:{
        show:false,
        duration:10,
      },
      gift:{
        show:false,
      },
      comboGift:{
        show:false,
      },
      npc:{
        show:false,
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
    this.setState({bulletText:{...this.state.bulletText,inputContent:event.target.value}})
  }
  handleBulletSubmit=(event)=>{
    event.preventDefault();
    const {bulletText} = this.state;
    const bullet = this.createBulletText(bulletText.inputContent)
    this.setState({bulletText:{...bulletText,content:bulletText.inputContent,inputContent:"",queue:bullet}})
  }

  createBulletText=(bulletContent)=>{
    return <BulletText content={bulletContent}/>
  }

  render() {
    const {currentPhone,marquee,publicMarquee,welcomeEffect,bulletText} = this.state;
    return (
      <StyledApp>
        <main>
          <div
            className="phone"
            style={{
              width: phones[currentPhone].width,
              height: phones[currentPhone].height,
            }}
          >
            <div className="app">
           
              <Streaming />
              <LiveChatUI type={phones[currentPhone].type}>
              {publicMarquee.show&&<PublicMarquee duration={publicMarquee.duration}/>}
              {welcomeEffect.show&&<WelcomeEffect level="Diamond"/>}
              {marquee.show&&<Marquee duration={marquee.duration} content={marquee.content}/>}
              <BulletTextArea className="bullet-text-area">
              {bulletText.show&&bulletText.queue}           
              </BulletTextArea>
              </LiveChatUI>
            </div>
          </div>
          <ToggleButtons
            name={"phone-sizes"}
            options={phones.map((phone) => phone.phoneName)}
            handlePhone={this.handlePhoneSize}
            selected={currentPhone}
          />
        </main>
        <aside>
      
            <details className="control-options welcome-effect-options" open>
              <summary>進場特效
                <input id="welcome-effect" 
                       type="checkbox" 
                       checked={welcomeEffect.show}
                       onChange={()=>this.setState({welcomeEffect:{...welcomeEffect,show:!welcomeEffect.show}})
                       }/>
              </summary>
            </details>
            <details className="control-options marquee-effect-options" open>
              <summary>跑馬燈
                <input id="marquee-effect" 
                        type="checkbox" 
                        checked={marquee.show} 
                        onChange={()=>this.setState({marquee:{...marquee,show:!marquee.show}})}
                />
              </summary>
    
              <div className="option-input">
                <label className="t-body2" htmlFor="marquee-duration">長度(s)</label>
                <input id="marquee-duration" type="text" value={marquee.duration} onChange={this.handleMarqueeDuration}/>
              </div>
              <div className="option-input">
                <label className="t-body2" htmlFor="marquee-content">內容</label>
                <input id="marquee-content" type="text" value={marquee.content} onChange={this.handleMarqueeContent}/>
              </div>
            </details>
            
            <details className="control-options public-marquee-options" open>
              <summary>全域跑馬燈
                <input id="public-marquee-effect" 
                       type="checkbox" 
                       checked ={publicMarquee.show}
                       onChange={()=>this.setState({publicMarquee:{...publicMarquee,show:!publicMarquee.show}})}/>
              </summary>
              <div className="option-input">
              <label className="t-body2" htmlFor="public-marquee-duration">長度(s)</label>
              <input id="public-marquee-duration" type="text" value={publicMarquee.duration} onChange={this.handlePublicMarqueeDuration}/>
              </div>
              
            </details>

            <details className="control-options bullet-text-options" open>
              <summary>彈幕
                <input id="bullet-text-effect" 
                        type="checkbox" 
                        checked={bulletText.show}
                        onChange={()=>this.setState({bulletText:{...bulletText,show:!bulletText.show}})}
                />
              </summary>
              <div className="option-input">
                <form onSubmit={this.handleBulletSubmit}>
                  <label className="t-body2" htmlFor="bullet-text-content">內容</label>
                  <input id="bullet-text-content" type="text" value={bulletText.inputContent} onChange={this.handleBulletTextContent}/>
                  <input type="submit" value="Submit"/>
                </form>
              </div>
            </details>

        </aside>
      </StyledApp>

    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
