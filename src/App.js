import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import {Row, Container} from 'react-bootstrap';


function App() {

  const [videoResults, setVideoResults]=useState([]);
  const [selectedVideo, setSelectedVideo]=useState(null);

  const handleSubmit = async (termFromSearch) => {
   
    const apiUrl = 'https://www.googleapis.com/youtube/v3';
    const axios = require('axios');
    
    try{
      const response = await axios({
        method: 'get',
        url: apiUrl+'/search', 
        params: {
          q:termFromSearch,
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyBD18tkfB5wEatzomVntEGXhczaSh1u_6E',
        }
      })

      setVideoResults(response.data.items);

    } catch(error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    console.log(videoResults);
  }, [videoResults]);
  
  const handleVideoSelect = sel =>{

  }

  return (
    <Container className="App">
      <Row>
        <SearchBar handleSubmit={handleSubmit} />
      </Row>
      <Row>
        <VideoDetail />
        <VideoList videoResults={videoResults} handleVideoSelect={handleVideoSelect}/>
      </Row>
    </Container>
  );
}

export default App;
