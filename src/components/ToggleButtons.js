import React, { useState } from "react";
import styled from "styled-components";

const StyledToggleButtons = styled.ul`
  display: flex;
`;

const StyledItem = styled.li`
  color: #444444;
  text-align: center;
  margin: 4px;
  input {
    display: none;
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
`;
const Option = (props) => {
 
  return <StyledItem></StyledItem>;
};
export default function ToggleButtons(props) {
    const [selected, setSelected] = useState(0);
  return (
    <StyledToggleButtons className={props.name}>
      {props.options.map(function(option,i){
            if(selected===i){
                return(
            <li>
                <input
                type="radio"
                name={option.name}
                id={option.optionName}
                value={option.value}
                onChange={() => setSelected(i)}
                checked
                />
                <label htmlFor={props.optionName}>{props.optionName}</label>
            </li>
            )
            }else{
                return(
                <li>
                <input
                type="radio"
                name={option.name}
                id={option.optionName}
                value={option.value}
                onChange={() => setSelected(i)}
                />
                <label htmlFor={props.optionName}>{props.optionName}</label>
            </li>
                )
            }
      }
         
    }
   </StyledToggleButtons>
  );
}
