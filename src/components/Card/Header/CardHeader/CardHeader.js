import React from 'react';
import Portrait from '../Portrait/Portrait';
import PersonInfo from '../PersonInfo/PersonInfo';
import './CardHeader.css';

const cardHeader = (props) => {
    
    //TODO: add randomized person generator information for name, portrait/any other info needed
    return (
        <div className="CardHeader" >
            <div className="Portrait">
                <Portrait portrait={props.portrait} />
            </div>
            <div className="PersonInfo">
                <PersonInfo name={props.name}/>
            </div>
        </div>
    );
}

export default cardHeader;