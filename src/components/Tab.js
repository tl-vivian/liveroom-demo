import React from "react";
import styled from "styled-components";

const TabWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  color: ${(props) => (props.active ? "var(--white)" : "var(--grey3)")};
  border-bottom: ${(props) =>
    props.active ? "2px solid var(--white)" : "1px solid transparent"};
`;

export default function Tab(props) {
  return (
    <TabWrapper className="tab t-title2" {...props}>
      {props.children}
    </TabWrapper>
  );
}
