import React from 'react';
import {Col} from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom';

function Navigation (props) {
    return(
        <Col xs={2} className= 'navbar-col' >
            <ul className='navbar-nav'>
                <li
                    className={`p-4 nav-item  ${
                    props.location.pathname === '/' ? 'active' : ''
                    }`}
                >
                    <Link className='nav-link' to='/'>
                        <span>Home </span>
                        <i class='fas fa-home'></i>
                        <span className='sr-only'>(current)</span>
                    </Link>
                </li>
                <li
                    className={`p-4 nav-item  ${
                    props.location.pathname === '/history' ? 'active' : ''
                    }`}
                >
                    <Link className='nav-link' to='/history'>
                        <span>History </span>
                        <i class='fas fa-history'></i>
                    </Link>
                </li>
                <li
                    className={`p-4 nav-item  ${
                    props.location.pathname === '/favorites' ? 'active' : ''
                    }`}
                >
                    <Link className='nav-link' to='/favorites'>
                        <span>Favorites </span>
                        <i class='fas fa-star'></i>
                    </Link>
                </li>
            </ul>
        </Col>
    );
}

export default withRouter(Navigation);