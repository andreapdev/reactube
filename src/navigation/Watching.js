import React from 'react';
import {Row} from 'react-bootstrap';
import VideoDetail from '../components/VideoDetail';
import VideoList from '../components/VideoList';

function Watching (props) {

    return(
        <Row>
            <VideoDetail videoResults={props.videoResults} selectedVideo={props.selectedVideo}/>
            <VideoList videoResults={props.videoResults} handleVideoSelect={props.handleVideoSelect} /> 

            {/* Change these to Recommended */}
            
        </Row>
    );
}

export default Watching;