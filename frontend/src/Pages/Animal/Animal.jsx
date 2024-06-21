import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../../Components/Breadcrums/Breadcrum';
import AnimalDisplay from '../../Components/AnimalDisplay/AnimalDisplay';
import RelatedAnimals from '../../Components/RelatedAnimals/RelatedAnimals';

const Animal = () => {

  const { all_animals } = useContext(ShopContext);




  const { animalId } = useParams();

  const animal = all_animals.find((animal) => animal.id === Number(animalId));

  return (

    <div>

      <Breadcrum  animal={animal} />

      <AnimalDisplay animal={animal} />

      <RelatedAnimals />


    </div>

  )
}

export default Animal;