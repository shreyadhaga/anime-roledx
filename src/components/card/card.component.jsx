import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img alt="Anime" src={`https://robohash.org/${props.anime.id}?set=set4&size=200x180`} />
        <h3> {props.anime.name}</h3>
        <div className="card-content">

            <p>{props.anime.email} </p>
        </div>
    </div>
) 