import React, { useState, useEffect } from 'react';
import './ShopCategory.css';
import AnimalCard from '../../Components/Animals/AnimalCard';



const ShopCategory = (props) => {

    const [all_animals, setAllAnimals] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/allanimals')
      .then((res) => res.json())
      .then((data) => setAllAnimals(data));

      
  }, []);

      return (
        <div className='shop-catrgory'>
    
          <div className='banner-img'>
    
            <img src={props.banner} alt='banner' />
    
          </div>
    
          <div className='shop-category-title'>
            <h1>Choose Your Own Pet.</h1>
          </div>
    
          <div className='shopcategory-animals'>
            {all_animals && all_animals.map((animal, index) => {
              if (props.category === animal.category) {
                return <AnimalCard key={index} id={animal.id} name={animal.name} image={animal.image} age={animal.age} price={animal.price}/>
              }
              else {
                return (null);
              }
            })}
          </div>
    
          <div className='shopcategory-loadmore'>
            <button>Load More</button>
          </div>
          </div>
  )
}

export default ShopCategory;
    
