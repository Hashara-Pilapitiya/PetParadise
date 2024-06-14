import React from 'react';
import './AnimalCard.css';

const AnimalCard = (props) => {
  return (

    <div className='animals'>
        <img src={props.image} alt='' />
        <h3>{props.name}</h3>

        <div className='animal-info'>
          <p><span>Age: </span>{props.age} <span>Years</span></p>
          <p><span>Price: $</span>{props.price}</p>
        </div>

        
    </div>

  )
}

export default AnimalCard;