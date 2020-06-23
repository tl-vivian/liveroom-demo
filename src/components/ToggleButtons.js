import React, { useState } from "react";
import styled from "styled-components";

const StyledToggleButtons = styled.ul`
  display: flex;
  li {
    color: #444444;
    text-align: center;
    margin: 4px;
    input {
      // display: none;
    }
    label {
      display: block;
      flex: 1;
      min-width: 100px;
      height: 100%;
      padding: 8px;
      background-color: white;
      border-radius: 21px;
      border: 1px solid #444444;
    }
    input:checked + label {
      background-color: #444444;
      color: white;
      border: 1px solid transparent;
      border-radius: 21px;
    }
  }
`;

export default function ToggleButtons(props) {
  const [selected, setSelected] = useState(0);
  console.log(props);
  return (
    <StyledToggleButtons className={props.name}>
      {props.options.map(function (option, i) {
        return (
          <li>
            <input
              type="radio"
              name={props.name}
              id={option}
              value={option}
              onChange={() => setSelected(i)}
              checked={selected === i}
            />
            <label htmlFor={option}>{option}</label>
          </li>
        );
      })}
    </StyledToggleButtons>
  );
}
