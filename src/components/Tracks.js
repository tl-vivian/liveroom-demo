import React ,{useEffect, useState} from 'react';
import styled from "styled-components";

import BulletText from "./BulletText";

const StyledBulletTrack = styled.div`
    // background-color:${props=>props.status?"rgba(0,0,204,0.5)":"rgba(204,0,0,0.5)"};
    height:56px;
    
`;
const StyledBulletTracks = styled.div`
    position:relative;
    display:flex;
    flex-direction:column-reverse;
    left:-16px;
    right:-16px;
    bottom:32px;
    position:absolute;
`;

function BulletTrack(props){
    return(
        <StyledBulletTrack {...props} className="bullet-track">
            {props.children}
        </StyledBulletTrack>
    )
}


export default function BulletTracks(props){
    const [track0,setTrack0]=useState({status:true,bullets:[]});
    const [track1,setTrack1]=useState({status:true,bullets:[]});
    const [track2,setTrack2]=useState({status:true,bullets:[]});
    const [queue,setQueue]=useState([]);
    const tracks = [track0,track1,track2];
    const setTracks = [setTrack0,setTrack1,setTrack2];

    useEffect(
      ()=>{
        placeBulletText(props.content)
      },
      [props.content]
    )
    function createBulletText(bulletContent, targetTrack){
      return (
        <BulletText
          content={bulletContent}
          key={new Date().getTime()}
          target={targetTrack}
          destroyBulletText={destroyBulletText}
          changeTrackStatus={changeTrackStatus}
        />
      );
    };

    function checkTrackStatus(){
      const trackStatus = [track0.status, track1.status, track2.status];
      console.log("track status",trackStatus)
      const isNotAvailable = (currentTrack) => currentTrack == false;
      if (trackStatus.every(isNotAvailable)) {
        return false;
    
      } else {
        const availableTracks = trackStatus
          .map((currentTrack, index) => (currentTrack ? index : -1))
          .filter((currentNumber) => currentNumber >= 0);
        const randomTrack =
          availableTracks[Math.floor(Math.random() * availableTracks.length)];
        return randomTrack;
      }
    };
  
    function changeTrackStatus(number,width){
      console.log("this get bullet length",width)
      let duration = width / 100 * 10000;
      setTimeout(() => {
        console.log(number);
        setTracks[number]({status:true,bullets:[...tracks[number].bullets]})
      }, duration);
      console.log("3.now the status change back to available")
    };

    function placeBulletText(content){
      console.log("1. content:",content);
      const targetTrack = checkTrackStatus();
      console.log("2. targetTrack:",targetTrack);
      const bullet = createBulletText(
        content,
        targetTrack
      );
      if (targetTrack===false) {
        console.log("no track is available");
        setQueue([...queue,bullet])
      } else {
        console.log("2. this bullet goes to", targetTrack);
        setTracks[targetTrack]({
          status:false,
          bullets:[...[tracks[targetTrack].bullets],bullet]
        })

        // timerChangeStatus(targetTrack);
      }
    };

    function destroyBulletText(targetTrack){
      let oldTrack = [...tracks[targetTrack].bullets];
      console.log(oldTrack);
      let newTrack = oldTrack.length > 1 ? [oldTrack.shift()] : [];
      setTracks[targetTrack]({status:tracks[targetTrack].status,bullets:newTrack})
    };

    return(
        <StyledBulletTracks {...props} className="bullet-tracks">
            <BulletTrack order={0} status={track0.status}>
                {track0.bullets}
            </BulletTrack>
            <BulletTrack order={1} status={track1.status}>
                {track1.bullets}
            </BulletTrack>
            <BulletTrack order={2} status={track2.status}>
                {track2.bullets}
            </BulletTrack>
        </StyledBulletTracks>
    )
}