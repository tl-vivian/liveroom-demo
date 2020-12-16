import React from 'react';
import styled from "styled-components";
import * as Icon from "react-feather";


const AvatarWrapper = styled.div`
  border-radius:100%;
  background-color:lavender;
`;
export default function Avatar(props){
return(
    <AvatarWrapper className="avatar">
    <div style={{
              width: props.width,
              height: props.height,
            }}></div>
  </AvatarWrapper>
)
}