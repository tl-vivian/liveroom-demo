import React from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`
  border-radius: 100%;
  background-image: url(${(props) => props.imgsrc});
  background-size: cover;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
`;
export default function Avatar(props) {
  return (
    <AvatarWrapper className="avatar" {...props}>
      <div {...props}></div>
    </AvatarWrapper>
  );
}
