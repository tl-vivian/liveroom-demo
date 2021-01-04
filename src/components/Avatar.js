import React from 'react';
import styled from "styled-components";
import * as Icon from "react-feather";


const AvatarWrapper = styled.div`
  border-radius:100%;
  background-image:url(${props=>props.imgsrc});
  background-size:cover;
`;
export default function Avatar(props){
return(
    <AvatarWrapper className="avatar" {...props}>
    <div {...props} style={{
              width: props.width,
              height: props.height,
            }}></div>
  </AvatarWrapper>
)
}