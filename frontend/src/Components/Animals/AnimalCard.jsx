import React from 'react';
import './AnimalCard.css';
import { Link } from 'react-router-dom';

const AnimalCard = (props) => {
  return (

    <div className='animals'>
        <Link to={`/animal/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt='' /></Link>
        <h3>{props.name}</h3>

        <div className='animal-info'>
          <p><span>Age: </span>{props.age} <span>Years</span></p>
          <p><span>Price: $</span>{props.price}</p>

          console.log(props.id);
        </div>

        
    </div>

  )
}

export default AnimalCard;