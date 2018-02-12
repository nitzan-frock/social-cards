import React, { Component } from 'react';
import Portrait from '../../components/Card/Header/Portrait/Portrait';
import PersonInfo from '../../components/Card/Header/PersonInfo/PersonInfo';
import './CardHeader.css';

export default class CardHeader extends Component {
    //TODO: add randomized person generator information for name, portrait/any other info needed
    render() {
        return (
            <div className="CardHeader" >
                <div className="Portrait">
                    <Portrait />
                </div>
                <div className="PersonInfo">
                    <PersonInfo/>
                </div>
            </div>
        );
    }
}