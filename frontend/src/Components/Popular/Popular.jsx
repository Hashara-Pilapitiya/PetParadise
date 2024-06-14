import React from 'react';
import './Popular.css';
import data_animal from '../Assets/data.js';
import AnimalCard from '../Animals/AnimalCard.jsx';

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular Pets</h1>
        <div className='popular-animals'>
            {data_animal.map((animal, i) => {

                return <AnimalCard key={i} id={animal.id} name={animal.name} image={animal.image} age={animal.age} price={animal.price} />

            })}
        </div>
    </div>
  )
}

export default Popular;