import React from 'react';
import styled from "styled-components";
import {AudienceItem,AudienceItemSuper} from "./AudienceItem";

const AudienceWrapper = styled.div`
.audience-super{
    display:flex;
    flex-wrap:wrap;
    padding:8px;
}
flex:1;
overflow-y:scroll;
::-webkit-scrollbar {
    display: none;
  }
`;

const AudienceList = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:start;
  overflow-y:scroll;
`;
export default function Audience(props){
return(
  <AudienceWrapper className="audience">
      <div className="audience-super">
        <AudienceItemSuper/>
        <AudienceItemSuper/>
        <AudienceItemSuper/>
        <AudienceItemSuper/>
        <AudienceItemSuper/>
        <AudienceItemSuper/>
      </div>
    <AudienceList>
        <AudienceItem/>
        <AudienceItem/>
        <AudienceItem/>
        <AudienceItem/>
        <AudienceItem/>
    </AudienceList>
  </AudienceWrapper>
)
}