import React from 'react';
import {Col} from 'react-bootstrap';
import VideoList from '../components/VideoList'

function Home (props) {
    return(
        <Col>
            <p>Home here</p>
            {/* search? searchResults : recommended */}
            <VideoList videoResults={props.videoResults} handleVideoSelect={props.handleVideoSelect}/>
            {/* history / last searches */}
            {/* favorites */}

        </Col>
    );
}

export default Home;