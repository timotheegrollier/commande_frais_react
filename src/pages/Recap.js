import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';


const Recap = () => {
    return (
        <div>
            <Nav title='Recap'></Nav>
            <Link to={'/'}>Back</Link>
        </div>
    );
};

export default Recap;