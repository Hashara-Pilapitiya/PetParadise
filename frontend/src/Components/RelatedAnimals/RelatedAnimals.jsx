import React from 'react';
import './RelatedAnimals.css';
import data_animals from '../Assets/data';
import AnimalCard from '../../Components/Animals/AnimalCard';

const RelatedAnimals = () => {
  return (
    <div className='relatedanimals'>
        <h1>Related Animals</h1>
        <div className="relatedanimas-1">
            {data_animals.map((animal, i) => {
                return <AnimalCard key={i} id={animal.id} name={animal.name} image={animal.image} age={animal.age} price={animal.price} />;
            }
    )}
        </div>
    </div>
  )
}

export default RelatedAnimals;