import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../../Components/Breadcrums/Breadcrum';
import AnimalDisplay from '../../Components/AnimalDisplay/AnimalDisplay';
import RelatedAnimals from '../../Components/RelatedAnimals/RelatedAnimals';
import { toast } from "react-toastify";

const Animal = () => {
  const [all_animals, setAll_Animals] = useState([]);
  const { animalId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('http://localhost:4000/allanimals');
        const data = await result.json();

        if (!result.ok) {
          throw new Error("An error occurred");
        }
        setAll_Animals(data);
      } catch (error) {
        toast.error("Error loading animals");
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const animal = all_animals.find((animal) => animal.id === Number(animalId));

  if (!animal) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <Breadcrum animal={animal} />

      <AnimalDisplay animal={animal} />

      <RelatedAnimals />

    </div>
  );
};

export default Animal;