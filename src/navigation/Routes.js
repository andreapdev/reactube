import React from "react";
import {Row, Col} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import SearchBar from '../components/SearchBar';
import Navigation from './Navigation';
import Favorites from "./Favorites";
import Home from "./Home";
import History from './History';
import Watching from './Watching';

function Routes(props) {
  return (
    
    <Router>
      <Navigation submitted={props.submitted}/>
      <Col xs={8}>
        <Row className="justify-content-center">
          <SearchBar handleSubmit={props.handleSubmit} />
        </Row>
        <Row>
            <Switch>
            <Route path="/" exact component={() => 
                <Home 
                    videoResults={props.videoResults}
                    selectedVideo={props.selectedVideo}
                    handleVideoSelect={props.handleVideoSelect}
            />} />
            <Route path="/favorites" exact component={() => <Favorites />} />
            <Route path="/history" exact component={() => <History />} />
            <Route
                path="/watching"
                exact
                component={() => (
                <Watching
                    videoResults={props.videoResults}
                    selectedVideo={props.selectedVideo}
                    handleVideoSelect={props.handleVideoSelect}
                />
                )}
            />
            </Switch>
        </Row>
      </Col>
    </Router>
    
  );
}

export default Routes;
