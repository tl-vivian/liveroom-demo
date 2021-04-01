import React ,{useState} from 'react';
import styled from "styled-components";

const StyledBulletTrack = styled.div`
    background-color:${props=>props.status?"rgba(0,0,204,0.5)":"rgba(204,0,0,0.5)"};
    height:56px;
    
`;
const StyledBulletTracks = styled.div`
    display:flex;
    flex-direction:column-reverse;
    left:-16px;
    right:-16px;
    bottom:132px;
    position:absolute;
`;

function BulletTrack(props){
    return(
        <StyledBulletTrack {...props} className="bullet-track">
            {props.order}
            {props.children}
        </StyledBulletTrack>
    )
}

function handleBulletSubmit(event){
    event.preventDefault();
    const { bulletText } = this.state;
    console.log(this.state);
    const targetTrack = this.checkTrackStatus();
    const bullet = this.createBulletText(
      this.state.bulletText.inputContent,
      targetTrack
    );
    if (!targetTrack) {
      console.log("no track is available");
      this.setState({
        bulletText: {
          ...bulletText,
          content: bulletText.inputContent,
          inputContent: "",
          queue: [...bulletText.queue, bullet],
        },
      });
    } else {
      console.log("this bullet goes to", targetTrack);
      this.setState({
        bulletText: {
          ...bulletText,
          content: bulletText.inputContent,
          inputContent: "",
          [`track${targetTrack}`]: [
            ...bulletText[[`track${targetTrack}`]],
            bullet,
          ],
          [`track${targetTrack}Status`]: false,
        },
      });
      this.timerChangeStatus(targetTrack);
    }
  };

  function checkTrackStatus(){
    const { track1Status, track2Status, track3Status } = this.state.bulletText;
    const trackStatus = [track1Status, track2Status, track3Status];
    const isNotAvailable = (currentTrack) => currentTrack == false;
    if (trackStatus.every(isNotAvailable)) {
      return false;
    } else {
      const availableTracks = trackStatus
        .map((currentTrack, index) => (currentTrack ? index + 1 : -1))
        .filter((currentNumber) => currentNumber >= 0);
      const randomTrack =
        availableTracks[Math.floor(Math.random() * availableTracks.length)];
      return randomTrack;
    }
  };

  function timerChangeStatus(order){
    setTimeout(() => {
      console.log(order);
      const { bulletText } = this.state;
      this.setState({
        bulletText: { ...bulletText, [`track${order}Status`]: true },
      });
    }, 5000);
  };
  function createBulletText(bulletContent, targetTrack){
    return (
      <BulletText
        content={bulletContent}
        key={new Date().getTime()}
        target={targetTrack}
        destroyBulletText={this.destroyBulletText}
      />
    );
  };

  function destroyBulletText(targetTrack){
    const { bulletText } = this.state;
    let track = [...bulletText[[`track${targetTrack}`]]];
    console.log(track);
    let newTrack = track.length > 1 ? [track.shift()] : [];
    this.setState({
      bulletText: { ...bulletText, [`track${targetTrack}`]: newTrack },
    });
  };

export default function BulletTracks(props){
    const [track1,setTrack1]=useState({status:true,bullets:[]});
    const [track2,setTrack2]=useState({status:true,bullets:[]});
    const [track3,setTrack3]=useState({status:true,bullets:[]});
    const [queue,setQueue]=useState([]);
    return(
        <StyledBulletTracks {...props} className="bullet-tracks">
            <BulletTrack order={1} status={track1.status}>
                {track1.bullets}
            </BulletTrack>
            <BulletTrack order={2} status={track2.status}>
                {track2.bullets}
            </BulletTrack>
            <BulletTrack order={3} status={track3.status}>
                {track3.bullets}
            </BulletTrack>
        </StyledBulletTracks>
    )
}