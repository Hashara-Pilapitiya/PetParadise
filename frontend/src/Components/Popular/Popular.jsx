import React, { useEffect, useState } from 'react';
import './Popular.css';
// import data_animal from '../Assets/data.js';
import AnimalCard from '../Animals/AnimalCard.jsx';

const Popular = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popular')
      .then(response => response.json())
      .then(data => {
        setPopular(data);
      })
      .catch(err => console.error(err));
  }
  , []);

  return (
    <div className='popular'>
        <h1>Popular Pets</h1>
        <div className='popular-animals'>
            {popular.map((animal, i) => {

                return <AnimalCard key={i} id={animal.id} name={animal.name} image={animal.image} age={animal.age} price={animal.price} />

            })}
        </div>
    </div>
  )
}

export default Popular;