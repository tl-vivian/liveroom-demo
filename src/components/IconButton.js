import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    height: 40px;
    width: 40px;
    background-color: ${props => props.bgcolor ? props.bgcolor:"var(--white25)" };
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.color ? props.color : "var(--white)"};;
`
export default function IconButton(props){
    return(
    <Button {...props}>
       {props.children}
    </Button>
    )
}