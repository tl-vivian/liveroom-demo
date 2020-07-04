import React from 'react';
import styled from 'styled-components';
import {ArrowIcon} from '../assets'

const StyledButton = styled.button`
    border: none;
    height: 40px;
    width: 40px;
    background-color: var(--white25);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
`
export default function IconButton(){
    return(
    <StyledButton>
        <ArrowIcon/>
    </StyledButton>
    )
}