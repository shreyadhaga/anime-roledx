import React from 'react';

import { Card } from '../card/card.component';

import './card-list.style.css';

export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.anime.map(anime => (
                <Card key={anime.id} anime={anime} />
            ))}
        </div>
    );
}