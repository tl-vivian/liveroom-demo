import React ,{useState}from "react";
import styled from "styled-components";
import {BulletinIcon} from "../assets"

const StyledBulletinButton = styled.div`
    height:40px;
    width:64px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    color:var(--white);
    .bulletin-button{
        height:36px;
        width:60px; 
        background-color:var(--black25);
        border-radius:18px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;

const StyledContent = styled.div`
 width:200px;
 padding:16px;
position:absolute;
right:0;
background-color:var(--white90);
border-radius:16px;
margin-top:8px;
`;
const StyledPointer = styled.div`
    border:8px solid var(--white0);
    border-bottom:8px solid var(--white90);
    position:absolute;
    right:16px;
    top:-16px;
    z-index:10;
    height:1px;
    width:16px;
`;

const TriangleIconWrapper = styled.svg`
  width: 10px;
  height: 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  fill:#ffffff;
  transform: ${props=>props.open?"scaleY(-1) translateY(30%)":"translateY(30%)"};

`;

const TriangleIcon = (props) => (
  <TriangleIconWrapper aria-hidden="true"{...props}>
    <path d="M5.96747895,4.80517203 L10.0960786,1.48632697 C10.465789,1.18912897 10.5157406,0.659090487 10.2076486,0.302452887 C10.04209,0.110807452 9.79683948,0 9.53822866,0 L1.28102938,0 C0.799774288,0 0.409639948,0.376339352 0.409639948,0.840577469 C0.409639948,1.09004392 0.524509127,1.32662244 0.723179461,1.48632697 L4.8517791,4.80517203 C5.17493035,5.06494266 5.6443277,5.06494266 5.96747895,4.80517203 Z"></path>
  </TriangleIconWrapper>
);

const BulletinContent = ()=>{
    return(
        <StyledContent>
            <StyledPointer className="pointer"/>
            <div className="bulletin-board t-caption">
            發到確解風別源資有一人房樂北官有好兒居可口。
            人然不的接在戲遊叫認團果代心西命育處大方條上親到其為實也業總教河創面大小一減車溫太開當展節直絕子大？安聽線辦解，件求不，書續是所化運還舉美……參自落愛得預動來現歷有深落不邊入高中事學運。一發大媽北見，是夠爸苦熱我給樣飯事？裡類強……社明生可夜平進況對光入得，的又個，小響開香毒面去入……母到面己！只你了張進，各道待我喜人時不明專能黨年法所斯曾自近出，的媽為們容，苦先實？

            分係個：動今機是顯合兩復的農面於全這組準修性前不他。
            </div>
        </StyledContent>
    )
}

export default function BulletinButton(){
    const [isOpen,setOpen] = useState(false);
    return(
        <div>
        <StyledBulletinButton onClick={()=> setOpen(!isOpen)}>
            <div className="bulletin-button">
                <BulletinIcon/>
                <TriangleIcon open={isOpen}/>
            </div>
            
        </StyledBulletinButton>
        {isOpen&&<BulletinContent/>}
        </div>

        )
}