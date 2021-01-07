import React from 'react';
import {Col} from 'react-bootstrap';

function VideoDetail (props) {
    let videoNumber = props.selectedVideo? props.selectedVideo : 0;
    if (props.videoResults[videoNumber]){
    const videoTitle=props.videoResults[videoNumber].snippet.title;
    const videoDescription=props.videoResults[videoNumber].snippet.description;
    const videoId= props.videoResults[videoNumber].id.videoId;
    const videoUrl=`https://www.youtube.com/embed/${videoId}`
    console.log(videoUrl)
    return (
        <Col xs={8}>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe src={videoUrl} title={videoTitle} />
            </div>
            <h3>{videoTitle}</h3>
            <p>{videoDescription}</p>
        </Col>
    );
    }else{
        return (
            <Col xs={8}>
            <p>Nothing to show yet</p>
        </Col>
        );
    }
}

export default VideoDetail;