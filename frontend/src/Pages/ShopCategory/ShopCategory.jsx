// import React, { useContext } from 'react';
// import './ShopCategory.css';
// import {ShopContext} from '../../Context/ShopContext';
// import AnimalCard from '../../Components/Animals/AnimalCard';



// const ShopCategory = (props) => {

//   const {all_animals} = useContext(ShopContext);

//   console.log(all_animals);

//   return (
//     <div className='shop-catrgory'>

//       <div className='banner-img'>

//         <img src={props.banner} alt='banner' />

//       </div>

//       <div className='shop-category-title'>
//         <h1>Choose Your Own Pet.</h1>
//       </div>

//       <div className='shopcategory-animals'>
//         {all_animals && all_animals.map((animal, index) => {
//           if (props.category === animal.category) {
//             return <AnimalCard key={index} id={animal.id} name={animal.name} image={animal.image} age={animal.age} price={animal.price}/>
//           }
//           else {
//             return (null);
//           }
//         })}
//       </div>

//       <div className='shopcategory-loadmore'>
//         <button>Load More</button>
//       </div>

  

      
//     </div>
//   )
// }

// export default ShopCategory;


import React, { useState, useEffect } from 'react';
import './ShopCategory.css';
import { toast } from "react-toastify";
import AnimalCard from '../../Components/Animals/AnimalCard';



const ShopCategory = (props) => {

    const [all_animals, setAllAnimals] = useState([]);

    console.log(all_animals);

  

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const res = await fetch("http://localhost:4000/allanimals");
    
    //         const result = await res.json();
    //         setAllAnimals(result.data);
    
    //         if (!res.ok) {
    //           toast.error(result.message);
    //         }
    
            
    //       } catch (error) {
    //         toast.error(error.message);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
    useEffect(() => {
      fetch('http://localhost:4000/allanimals')
      .then((res) => res.json())
      .then((data) => setAllAnimals(data));

      
  }, []);

  console.log(all_animals);

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

export default ShopCategory;
    
