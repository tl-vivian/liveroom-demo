import React,{useState,useEffect,useRef} from 'react';
import styled,{keyframes} from "styled-components";
import BulletText from "./BulletText";

const StyledBulletTracks = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    left:-16px;
    right:-16px;;

`;
const StyledBulletTrack = styled.div`
    background-color:${props=>props.availability?"rgba(0,204,0,.5)":"rgba(204,0,0,0.5)"};
    height:56px;
    width:100%;
`;


const BulletTrack = (props)=>{
    return(
        <styledBulletTrack {...props}>
            {props.name}
            {props.children}
        </styledBulletTrack>
    )
}



// export default function BulletTracks(props){
//     const [track1,setTrack1] =useState(true);
//     const [track2,setTrack2] =useState(true);
//     const [track3,setTrack3] =useState(true);
//     const [bulletQueue,setQueue] = useState([]);


//     //useState updates array like this:
//     //setTheArray(oldArray => [...oldArray, newElement]);
    

//     const timeAvailable = function(track,setTrack){
//         const time = 3000;
//         if(track){
//             setTrack(false);
//             setTimeout(()=>{
//                 setTrack(true)
//             },time)
//         }else{
//             setTimeout(()=>{
//                 setTrack(true)
//             },time)
//         }

//     }

//     const createBulletText = (bulletText)=>{
//        return <BulletText content={bulletText} />;
//     }
    
//     setQueue((bulletQueue)=>[...bulletQueue,createBulletText(props.content)])

//     return(
//         <StyledBulletTracks>
//             <StyledBulletTrack name="track2" availability={track1} onClick={()=>timeAvailable(track1,setTrack1)}/>
//             <StyledBulletTrack name="track1" availability={track2} onClick={()=>timeAvailable(track2,setTrack2)}/>
//             <StyledBulletTrack name="track3" availability={track3} onClick={()=>timeAvailable(track3,setTrack3)}/>
//         </StyledBulletTracks>
//     )
// }


export default class BulletTracks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            track1:true,
            track2:true,
            track3:true,
            bulletQueue:[]
        }
    }

    timeAvailable = (track)=>{
        const time = 3000;
        const{track1,track2,track3} = this.state;
        if(track1){
            this.setState({track1:false})
            setTimeout(()=>{
                this.setState({track1:true})
            },time)
        }else{
            setTimeout(()=>{
                this.setState({track1:true})
            },time)
         }
    }

    shiftBullet = ()=>{
        let queue = [...this.state.bulletQueue];
        let shiftedBullet = queue.shift();
        return shiftedBullet;
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.bulletText!==this.props.bulletText){
            const bullet = <BulletText content={this.props.bulletText}/>
            this.setState({bulletQueue:[...this.state.bulletQueue,bullet]})
        }

    }



    render(){
        const{track1,track2,track3} = this.state;
        return(
        <StyledBulletTracks>
            <StyledBulletTrack name="track1" availability={track1} onClick={()=>this.setState({bulletQueue:this.state.bulletQueue.slice(1)})}>
            {this.state.bulletQueue&&this.shiftBullet()}
            </StyledBulletTrack>
            <StyledBulletTrack name="track2" availability={track2} onClick={()=>this.timeAvailable(track2)}/>
            <StyledBulletTrack name="track3" availability={track3} onClick={()=>this.timeAvailable(track3)}/>
        </StyledBulletTracks>

        )
    }

}