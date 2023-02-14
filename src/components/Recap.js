import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recap extends Component {
    render() {
        return (
            <div>
                Récap
                <Link to={'/'}>Back</Link>
            </div>
        );
    }
}

export default Recap;