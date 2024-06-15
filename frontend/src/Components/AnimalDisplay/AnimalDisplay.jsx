import React from 'react';
import './AnimalDisplay.css';
import { FaStar } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';

const AnimalDisplay = (props) => {

    const { animal } = props;

    const { addToCart } = React.useContext(ShopContext);

  return (

    <div className='animaldisplay'>
        <div className="animaldisplay-left">
            <div className="animaldisplay-image">
                <img className='animaldisplay-main-image' src={animal.image} alt='' />
            </div>
        </div>

        <div className="animaldisplay-right">
            <h1>{animal.name}</h1>

            <div className="animaldisplay-right-star">
                <FaStar style={{color: 'rgba(0,212,255,1)', fontSize: 22}} />
                <FaStar style={{color: 'rgba(0,212,255,1)', fontSize: 22}} />
                <FaStar style={{color: 'rgba(0,212,255,1)', fontSize: 22}} />
                <FaStar style={{color: 'rgba(0,212,255,1)', fontSize: 22}} />
                <FaStar style={{color: 'rgba(0,212,255,1)', fontSize: 22}} />
                <FaStar style={{color: '#0661ab', fontSize: 22}} />
            </div>

            <div className="animaldisplay-right-price">
                <div className='animaldisplay-age'><p>Age: {animal.age} Years</p></div>
                <div className='animaldisplay-price'><p>Price: $ {animal.price}</p></div>
            </div>

            <div className="addtocart">
                <button onClick={() => {addToCart(animal.id)}}>Add to Cart</button>
            </div>

        </div>
    </div>

  )
}

export default AnimalDisplay;