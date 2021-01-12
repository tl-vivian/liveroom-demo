import React from 'react';
import styled from "styled-components";


const TabsWrapper = styled.div`
  border-radius:100%;
  background-image:url(${props=>props.imgsrc});
  background-size:cover;
`;
export default function Tabs(props){
return(
    <TabsWrapper className="tabs" {...props}>
    <div {...props} style={{
              width: props.width,
              height: props.height,
            }}></div>
  </TabsWrapper>
)
}