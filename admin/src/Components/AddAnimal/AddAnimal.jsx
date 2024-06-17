import React from 'react';
import './AddAnimal.css';
import Upload from '../../Assets/upload.png';

const AddAnimal = () => {

    const [image, setImage] = React.useState(false);

    const [animalDetails, setAnimalDetails] = React.useState({  
        name: '',
        age: '',
        price: '',
        category: 'Dogs',
        image: ''
    });

    const handleImage = (e) => {
       setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setAnimalDetails({...animalDetails, [e.target.name]: e.target.value});
    }

    const add_Animal = async () => {
        console.log(animalDetails);

        let responseData;
        let animal = animalDetails;

        const formData = new FormData();
        formData.append('animal', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData    
        }).then((res) => res.json()).then((data) => {responseData = data;});

        if(responseData.success) {
            animal.image = responseData.image_url;

            console.log(animal);

            await fetch('http://localhost:4000/addanimal', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(animal)
            }).then((res) => res.json()).then((data) => {
                data.success ? alert('Animal Added Successfully') : alert('Failed to Add Animal');
            });
        }


    };

  return (

    <div className='addanimal'>

        <div className="addanimal-itemfield">
            <p>Animal Name</p>
            <input value={animalDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here...' />
        </div>

        <div className='addanimal-itemfield-price'>
            <div className="addanimal-itemfield">
                <p>Age</p>
                <input value={animalDetails.age} onChange={changeHandler}
                type="text" name='age' placeholder='Type Here...' />
            </div>
            

            <div className="addanimal-itemfield">
                <p>Price</p>
                <input value={animalDetails.price} onChange={changeHandler} type="text" name='price' placeholder='Type Here...' />
            </div>
        </div>
        

        <div className="addanimal-itemfield">
            <p>Animal Category</p>
            <select value={animalDetails.category} onChange={changeHandler} name='category' className='add-animal-selector'>
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
                <img src={image ? URL.createObjectURL(image) : Upload} className='addanimal-thumbnail-img' alt='thumbnail' />
            </label>
            <input onChange={handleImage} type='file' id='file-input' name='image' hidden />
        </div>

        <button onClick={() => {add_Animal()}} className='addanimal-btn'>Add Animal</button>

    </div>

  )

}

export default AddAnimal;