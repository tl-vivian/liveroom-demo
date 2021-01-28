import React from 'react';
import styled from "styled-components";


const TabsWrapper = styled.ul`
 display:flex;
 height:40px;
`;


export default function Tabs(props){
return(
  <TabsWrapper className="tabs">
    {props.children}
  </TabsWrapper>
)
}