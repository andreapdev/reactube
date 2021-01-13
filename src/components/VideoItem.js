import React from 'react';
import {Col, Row, Image, Card, CardImg} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function VideoItem (props) {
    const videoTitle=props.videoResults[props.id].snippet.title;
    const videoThumbnail=props.videoResults[props.id].snippet.thumbnails.default.url;


    let history=useHistory();
    const handleClick = () =>{
        props.handleVideoSelect(props.id);
        history.push('/watching');
    }
    return (
        <Card
            onClick={()=>handleClick()}
            className='col ml-3 p-0'>
                <Card.Img src={videoThumbnail} alt={videoTitle}/>
                <Card.Title>{videoTitle.substr(0, 15)+'...'}</Card.Title>
        </Card>
    );
    
}

export default VideoItem;