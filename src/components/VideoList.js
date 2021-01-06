import VideoItem from './VideoItem';
import {Col} from 'react-bootstrap';
import React from 'react';

function VideoList (props) {
    console.log(props.videoResults);
    const ItemList = () => {
        let arrItems=[]
        for (let x=0; x<props.videoResults.length; x++){
            arrItems.push(<VideoItem key={x} id={x} videoResults={props.videoResults} />)
        }
        return [arrItems];
    }
    return (
        <Col xs={4}>
            <p>Results</p>
            <ItemList />
        </Col>
    );
}

export default VideoList;