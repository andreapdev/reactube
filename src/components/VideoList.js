import VideoItem from './VideoItem';
import {CardDeck} from 'react-bootstrap';
import React from 'react';

function VideoList (props) {
    console.log(props.videoResults);
    const ItemList = () => {
        let arrItems=[]
        if(props.videoResults){
            for (let x=0; x<props.videoResults.length; x++){
                arrItems.push(
                    <VideoItem 
                        key={x} 
                        id={x} 
                        videoResults={props.videoResults} 
                        handleVideoSelect={props.handleVideoSelect} 
                    />)
            }
            return [arrItems];
         }else{
             return null;
         }
    }
    return (
        <CardDeck className='row mb-4'><ItemList /></CardDeck>
    );
}

export default VideoList;