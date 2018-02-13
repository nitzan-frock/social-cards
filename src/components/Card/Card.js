import React from 'react';
import './Card.css';
import CardHeader from './Header/CardHeader/CardHeader';
import Blurb from './Blurb/Blurb';


const card = (props) => {
    return (
        <div className="Card" >
            <CardHeader portrait={props.portrait} name={props.name}/>
            <img className="InterestImage" src={props.image} alt="placeholder"/>
            <Blurb/>
        </div>
    );
}

export default card;