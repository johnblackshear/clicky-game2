import React from 'react';
import './Card.css';

const Card = props => (
    <div className="card">
        <div className="card-img">
        <div className="title">
            <h2>{props.name}</h2>
        </div>
            <img alt={props.name} src={props.image}/>
   
        </div>
    </div>
);

export default Card;