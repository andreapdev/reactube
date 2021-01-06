import React from 'react';
import {Form}from 'react-bootstrap';

function SearchBar (props) {
    let term=null;
    let searchMsg=null;

    const handleKeyDown = (e) => {
        term=e.target.value;
        if(e.key==="Enter"){
            e.preventDefault();
            props.handleSubmit(term);
        }
    }


    return (
        <Form>
            <Form.Group>
                <Form.Control type='text' placeholder='Search' onKeyDown={handleKeyDown}></Form.Control>
                <Form.Text>{searchMsg}</Form.Text>
            </Form.Group>
        </Form>
    );

}

export default SearchBar;