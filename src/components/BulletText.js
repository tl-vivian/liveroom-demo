import React from 'react';
import styled,{keyframes} from "styled-components";
import Avatar from './Avatar';

const movein = keyframes`
0% {
  transform:translateX(100%);
 }
 100% {
  transform:translateX(-100%);
 }
`;
const BulletTextWrapper = styled.div`
    position:absolute;
    height:48px;
    right:0px;
    display:inline-flex;
    align-items: center;
    justify-content:flex-start;
    flex-wrap:nowrap;
    background-image: linear-gradient(119deg,  rgba(100,71,189,0.75) 0%,rgba(225,89,89,0.75) 75%,rgba(225,89,89,0) 100%);
    border-radius: 24px 0px 0px 24px;
    color:var(--white);
    text-shadow:var(--text-shadow-for-white);
    transform:translateX(100%);
    >*{
      margin:4px;
    }

   
    animation: ${movein} 15s linear ;
`;
const BulletTextNickname = styled.p`

`;
const BulletTextContent = styled.p`
`;

class BulletText extends React.Component {
  constructor(props) {
    super(props);
 
  }
  componentDidMount(){
    this.passWidthNumber();
  }
  passWidthNumber=()=>{
    console.log(this.container.offsetWidth);
    return this.container.offsetWidth;
  }
  render() {
    return(
      <BulletTextWrapper ref={el => (this.container = el)} className="bullet-text" onAnimationEnd={()=>this.props.destroyBulletText(this.props.target)}>
          <Avatar size={32} imgsrc="https://i.pravatar.cc/50"/>
          <BulletTextNickname className="nickname tl-title3">Nickname:</BulletTextNickname>
          <BulletTextContent className="content tl-caption">{this.props.content}</BulletTextContent>
        {console.log("bulletText",this)}
      </BulletTextWrapper>
    )
  }
}

export default BulletText;