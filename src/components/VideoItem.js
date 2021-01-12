import React from 'react';
import {Col, Row, Image} from 'react-bootstrap'
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
        <Row
            onClick={()=>handleClick()}
            className=' mb-2'
        >
            <Col><Image src={videoThumbnail} alt={videoTitle} className='embed-responsive'/></Col>
            <Col><p>{videoTitle}</p></Col>
        </Row>
    );
    
}

export default VideoItem;