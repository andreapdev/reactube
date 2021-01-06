import React from 'react';
import {Card} from 'react-bootstrap'
function VideoItem (props) {
    const videoTitle=props.videoResults[props.id].snippet.title;
    const videoThumbnail=props.videoResults[props.id].snippet.thumbnails.default.url;
    return (
        <Card>
            <p>{videoTitle}</p>
            <img src={videoThumbnail} alt={videoTitle} />
        </Card>
    );
}

export default VideoItem;