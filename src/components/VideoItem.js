import React from 'react';
import {Col, Row, Image} from 'react-bootstrap'
function VideoItem (props) {
    const videoTitle=props.videoResults[props.id].snippet.title;
    const videoThumbnail=props.videoResults[props.id].snippet.thumbnails.default.url;

    return (
        <Col xs={12}
            onClick={()=>props.handleVideoSelect(props.id)}
            className=' mb-2'
        >
            <Row>
                <Col><Image src={videoThumbnail} alt={videoTitle} className='embed-responsive'/></Col>
                <Col><p>{videoTitle}</p></Col>
            </Row>
            
        </Col>
    );
}

export default VideoItem;