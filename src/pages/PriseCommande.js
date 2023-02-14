import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';


const PriseCommande = () => {
    return (
        <div>
            <Nav title="Prise de commande"></Nav>
            <Link to={'/recap'}>Recap</Link>
        </div>
    );
};

export default PriseCommande;