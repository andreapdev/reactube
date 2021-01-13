import VideoItem from './VideoItem';
import {Col, Row} from 'react-bootstrap';
import React from 'react';

function VideoList (props) {
    console.log(props.videoResults);
    const ItemList = () => {
        let arrItems=[]
        for (let x=0; x<props.videoResults.length; x++){
            arrItems.push(
                <VideoItem 
                    key={x} 
                    id={x} 
                    videoResults={props.videoResults} 
                    handleVideoSelect={props.handleVideoSelect} 
                />)
        }
        return [arrItems];
    }
    return (
        <Col xs={4} className='my-4'>
            <Row><ItemList /></Row>
        </Col>
    );
}

export default VideoList;