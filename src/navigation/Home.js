import React from 'react';
import {Col, Row} from 'react-bootstrap';
import VideoList from '../components/VideoList'

function Home (props) {
    return(
        <Col>
            {/* search? searchResults : recommended */}
            <Row>
                <Col>
                    <h4>Search results:</h4>
                    <VideoList videoResults={props.videoResults} handleVideoSelect={props.handleVideoSelect}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Last searches</h4>
                    <ul>
                        <li>This</li>
                        <li>This</li>
                        <li>This</li>
                        <li>This</li>
                    </ul>
                </Col>
                <Col>
                    {/* favorites */}
                    <VideoList 
                        videoResults={props.videoResults} 
                        handleVideoSelect={props.handleVideoSelect}/>
                </Col>
            </Row>
        </Col>
    );
}

export default Home;