import React from 'react';
import styled from "styled-components";


const TabWrapper = styled.li`
 display:flex;
 justify-content:center;
 align-items:center;
 height:100%;
 flex:1;
color:var(--grey2)

`;

export default function Tab(props){
return(
  <TabWrapper className="tab t-title2">
{props.children}
  </TabWrapper>
)
}