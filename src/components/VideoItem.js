import React from 'react';
import {Card, Image} from 'react-bootstrap'
function VideoItem (props) {
    const videoTitle=props.videoResults[props.id].snippet.title;
    const videoThumbnail=props.videoResults[props.id].snippet.thumbnails.default.url;
    const thumbnailHeight=props.videoResults[props.id].snippet.thumbnails.default.height;
    const thumbnailWidth=props.videoResults[props.id].snippet.thumbnails.default.width;

    console.log(thumbnailHeight, thumbnailWidth)
    return (
        <Card onClick={()=>props.handleVideoSelect(props.id)}>
            <Card.Title>{videoTitle}</Card.Title>
            <div>
            <Image className="embed-responsive embed-responsive-4by3" src={videoThumbnail} alt={videoTitle}  />
            </div>

        </Card>
    );
}

export default VideoItem;