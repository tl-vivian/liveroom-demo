import React from "react";
import { LevelBadge } from "./Badges";
import styled from 'styled-components';

const StyledWelcomeEffect = styled.div`
    position:absolute;
    top:100px;
    z-index:100;
    width:360px;
    height:32px;
    background-image:linear-gradient(130deg, rgba(48,99,159,0.93) 0%, rgba(55,146,186,0.83) 17%, rgba(68,167,171,0.78) 38%, rgba(87,223,192,0.38) 75%, rgba(226,226,226,0.00) 92%, rgba(255,255,255,0.00) 100%);
`;


export default function WelcomeEffect(props) {

  return(
      <StyledWelcomeEffect className="welcome-effect">
         <LevelBadge level="Bronze" levelNumber={12}/>
      </StyledWelcomeEffect>
   
  )
}
