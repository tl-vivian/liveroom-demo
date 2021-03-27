import React from 'react';
import styled,{keyframes} from "styled-components";

const StyledBulletTracks = styled.div`
    background-color:${props=>props.status?"rgba(0,204,0,0.5)":"rgba(204,0,0,0.5)"};
    height:56px;
    left:-16px;
    right:-16px;
    bottom:${props=>(props.order-1)*56+32}px;
    position:absolute;
    
`;

export default function BulletTracks(props){
    return(
        <StyledBulletTracks {...props}>
            {props.order}
            {props.children}
        </StyledBulletTracks>
    )
}


