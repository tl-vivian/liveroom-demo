import React from "react";
import styled, { keyframes } from "styled-components";
import Avatar from "./Avatar";
import {patterns} from '../assets'

const movein = keyframes`
0% {
  transform:translateX(100%);
 }
 100% {
  transform:translateX(calc(-100% - 400px));
 }
`;
const bgColor = [
  "linear-gradient(90deg, #00BB75 0%, rgba(114,188,35,0.50) 80%, rgba(114,188,35,0.00) 100%)",
  "linear-gradient(90deg, #00B1C4 0%, rgba(0,123,219,0.50) 80%, rgba(0,123,219,0.00) 100%)",
  "linear-gradient(90deg, #FFB600 0%, rgba(255,116,116,0.50) 80%, rgba(255,116,116,0.00) 100%)",
  "linear-gradient(90deg, #FB507E 1%, rgba(223,67,67,0.50) 80%, rgba(223,67,67,0.00) 100%)",
  "linear-gradient(90deg, #7F43DF 1%, rgba(212,77,57,0.50) 80%, rgba(212,77,57,0.00) 100%)",
];

function randomColorIndex(){return Math.floor(Math.random() * bgColor.length)};

const BulletTextWrapper = styled.div`
  height: 56px;
  left:0;
  display:inline-flex;
  justify-content:flex-start;
  align-items:center;
  background-image: url("${patterns.primeBullet}");
  border-radius: 24px 0px 0px 24px;
  color: var(--white);
  text-shadow: var(--text-shadow-for-white);

  // transform: translateX(100%);
  animation: ${movein} 10s linear;

  .avatar{
    margin-left:24px;
  }
  .texts{
    margin:6px 16px 10px 4px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
  }
  .tail{
    position:absolute;
    right:-108px;
  }
`;

const BulletTextNickname = styled.p`
  height:20px;
`;
const BulletTextContent = styled.p`
  height:20px;
  width:auto;
`;

const BulletBase = styled.div`
  position:absolute;
  background:${props=>props.bg};
  height:44px;
  left:20px;
  right:0;
  top:6px;
  bottom:6px;
  z-index:-1;
  border-radius:22px;
`;

class BulletText extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.passWidthNumber();
  }
  passWidthNumber = () => {
    console.log(this.container.offsetWidth);
    this.props.changeTrackStatus(this.props.target,this.container.offsetWidth);
  };
  render() {
    return (
      <BulletTextWrapper
        ref={(el) => (this.container = el)}
        className="bullet-text"
        onAnimationEnd={() => this.props.destroyBulletText(this.props.target)}
      >
        <Avatar size={32} imgsrc="https://i.pravatar.cc/50" />
        <div className="texts">
          <BulletTextNickname className="nickname tl-title3">
            Nickname:
          </BulletTextNickname>
          <BulletTextContent className="content tl-caption">
            {this.props.content}
          </BulletTextContent>
        </div>
        {console.log("bulletText", this)}
        <img className="tail" src={patterns.starry} width={140}/>
        <BulletBase bg={bgColor[randomColorIndex()]}/>

      </BulletTextWrapper>
    );
  }
}

export default BulletText;
