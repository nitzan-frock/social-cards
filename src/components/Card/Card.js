import React from 'react';
import './Card.css';
import CardHeader from '../../containers/CardHeader/CardHeader';

const card = (props) => {
    return (
        <div className="Card" >
            <CardHeader />
            <p>Picture of interest</p>
            <p>Blurb</p>
        </div>
    );
}

export default card;