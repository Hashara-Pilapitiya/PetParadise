import React, { useEffect, useState } from 'react';
import './AnimalList.css';
import { ImCross } from "react-icons/im";

const AnimalList = () => {

  const [allanimals, setAllAnimals] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allanimals')
    .then((response) => response.json())
    .then((data) => {setAllAnimals(data)});
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (

    <div className='animallist'>

      <h1>All Animal List</h1>

      <div className="listanimal-format-main">
        <p>Animals</p>
        <p>Category</p>
        <p>Name</p>
        <p>Age</p>
        <p>Price</p>
        <p>Remove</p>
      </div>

      <div className="listanimal-allanimals">
        <hr />
        {allanimals.map((animal, index) => {
          return <><div key={index} className="listanimal-format-main listanimal-format">
              <img src={animal.image} alt="" className="listanimal-animal-icon" />
              <p className='category'>{animal.category}</p>
              <p className='name'>{animal.name}</p>
              <p className='age'>{animal.age}</p>
              <p className='price'>$ {animal.price}</p>
              <ImCross className='listanimal-remove-icon' />
          </div>

          <hr />
          </>

        })}
      </div>

    </div>

  )

}

export default AnimalList;