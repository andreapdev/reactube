import React from 'react';
import {Col} from 'react-bootstrap';

function VideoDetail (props) {
    let videoNumber = props.selectedVideo? props.selectedVideo : 0;
    if (props.videoResults[videoNumber]){
        const videoTitle=props.videoResults[videoNumber].snippet.title;
        const videoDescription=props.videoResults[videoNumber].snippet.description;
        const videoId= props.videoResults[videoNumber].id.videoId;
        const videoUrl=`https://www.youtube.com/embed/${videoId}`
        
        return (
            <Col xs={8} className='my-4'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe src={videoUrl} title={videoTitle} />
                </div>
                <h3>{videoTitle} <button className='fav-button'><i className="fas fa-star fav-star"></i></button></h3>
                
                <p>{videoDescription}</p>
            </Col>
        );
    }else{
        return (
            <Col xs={8}>
            </Col>
        );
    }
}

export default VideoDetail;