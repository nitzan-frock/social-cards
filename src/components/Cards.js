import React from 'react';
import Card from './Card/Card';

const cards = (props) => {
    return props.cards.map((card, index) => {
        return (
            <Card
            portrait={card.portrait}
            name={card.name}
            key={index}
            image={card.image} />
        );
    });
};

export default cards;