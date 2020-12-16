import React from "react";
import styled from "styled-components";

const StyledToggleButtons = styled.ul`
  display: flex;
  margin:0.2rem;
  li {
    color: var(--secondary3);
    text-align: center;
    margin: 4px;

    input {
      display: none;
    }
    label {
      display: block;
      flex: 1;
      min-width: 64px;
      height: 100%;
      padding: 2px 8px;
      background-color: white;
      border-radius: 21px;
      border: 1px solid var(--white);
      font-size:14px;
    }
    input:checked + label {
      background-color: var(--secondary3);
      color: white;
      border: 1px solid transparent;
      border-radius: 21px;
    }
  }
`;

export default function ToggleButtons(props) {
  return (
    <StyledToggleButtons className={props.name}>
      {props.options.map(function (option, i) {
        return (
          <li key={i}>
            <input
              type="radio"
              name={props.name}
              id={option}
              value={option}
              onChange={() => props.handlePhone(i)}
              checked={props.selected ===i}
            />
            <label htmlFor={option}>{option}</label>
          </li>
        );
      })}
    </StyledToggleButtons>
  );
}
