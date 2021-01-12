import React from 'react';
import {Form}from 'react-bootstrap';
import {useHistory} from 'react-router-dom';


function SearchBar (props) {
    let term=null;
    let history=useHistory();
    const handleKeyDown = (e) => {
        term=e.target.value;
        if(e.key==="Enter"){
            e.preventDefault();
            props.handleSubmit(term);   
            history.push('/');
        }
    }

    return (
        <Form className='w-75 my-4'>
            <Form.Control 
                type='text' 
                placeholder='Search' 
                onKeyDown={handleKeyDown}
            ></Form.Control>
            
        </Form>
    );
}

export default SearchBar;