import React from "react";
import styled from "styled-components";


const StreamingWrapper = styled.div`
  height: 100%;
  width:100%;
  position:absolute;
`;
export default function Streaming() {
  return (
    <StreamingWrapper>
      <div className="streaming"></div>
      <div className="shades">
        <div className="top-shade"></div>
        <div className="bottom-shade"></div>
      </div>
    </StreamingWrapper>

  );
}
