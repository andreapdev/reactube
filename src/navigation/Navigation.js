import React from 'react';
import {Col} from 'react-bootstrap'
import { Link, withRouter } from "react-router-dom";

function Navigation (props) {
    return(
        <Col xs={4}>
            <ul className="navbar-nav ml-auto">
                <li
                    className={`nav-item  ${
                    props.location.pathname === "/" ? "active" : ""
                    }`}
                >
                <Link className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                </Link>
                </li>
                <li
                    className={`nav-item  ${
                    props.location.pathname === "/history" ? "active" : ""
                    }`}
                >
                <Link className="nav-link" to="/history">
                    History
                </Link>
                </li>
                <li
                    className={`nav-item  ${
                    props.location.pathname === "/favorites" ? "active" : ""
                    }`}
                >
                <Link className="nav-link" to="/favorites">
                    Favorites
                </Link>
                </li>
            </ul>
        </Col>
    );
}

export default withRouter(Navigation);