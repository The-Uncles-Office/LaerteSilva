import React from 'react'
import './Card.css'

export default Card =>
    <div className="card">
        <img className="card-image" src={Card.src} alt="alternative"/>
        <div className="card-body">
             <h4 className="card-title">{Card.title}</h4>
             <p>{Card.description}</p>
        </div>
    </div>