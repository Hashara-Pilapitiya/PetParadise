import React from 'react';
import './AddAnimal.css';
import Upload from '../../Assets/upload.png';

const AddAnimal = () => {

  return (

    <div className='addanimal'>

        <div className="addanimal-itemfield">
            <p>Animal Name</p>
            <input type="text" name='name' placeholder='Type Here...' />
        </div>

        <div className='addanimal-itemfield-price'>
            <div className="addanimal-itemfield">
                <p>Age</p>
                <input type="text" name='price' placeholder='Type Here...' />
            </div>
            

            <div className="addanimal-itemfield">
                <p>Price</p>
                <input type="text" name='price' placeholder='Type Here...' />
            </div>
        </div>
        

        <div className="addanimal-itemfield">
            <p>Animal Category</p>
            <select name='category' className='add-animal-selector'>
                <option value='mammal'>Mammals</option>
                <option value='bird'>Birds</option>
                <option value='reptile'>Reptiles</option>
                <option value='dog'>Dogs</option>
                <option value='fish'>Fishes</option>
                <option value='cat'>Cats</option>
            </select>
        </div>

        <div className="addanimal-itemfield">
            <p>Image</p>
            <label htmlFor='file-input'>
                <img src={Upload} className='addanimal-thumbnail-img' alt='thumbnail' />
            </label>
            <input type='file' id='file-input' name='image' hidden />
        </div>

        <button className='addanimal-btn'>Add Animal</button>

    </div>

  )

}

export default AddAnimal;