import React, {useEffect, useState} from 'react';

export const ShopContext = React.createContext({});

const getDefaultCart = () => {
    let cart = {};

    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }

    return cart;

}

const ShopContextProvider = (props) => {

    const [all_animals, setAll_Animals] = useState([]);

    const [cart, setCart] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4000/allanimals')
        .then((res) => res.json())
        .then((data) => setAll_Animals(data));

        if(localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/gettotalcartdata', {
                headers: {
                    method: 'POST',
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`
                },

                body: ""
            })
            .then((res) => res.json())
            .then((data) => {
                
                    setCart(data);
               
            });
        }

        
     }, []);


    const addToCart = (animalID) => {
        setCart((prev) => ({...prev, [animalID]: prev[animalID] + 1}));

        if(localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`
                },
                body: JSON.stringify({id: animalID})
            })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
    }

    const removeFromCart = (animalID) => {
        setCart((prev) => ({...prev, [animalID]: prev[animalID] - 1}));

        if(localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`
                },
                body: JSON.stringify({id: animalID})
            })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let total = 0;

        for (const animalID in cart) {
            const animal = all_animals.find((animal) => animal.id === parseInt(animalID));

            if (animal) {
                total += animal.price * cart[animalID];
            }
        }

        return total;

    }

    const getTotalCartItems = () => {
        let total = 0;

        for (const animalID in cart) {
            total += cart[animalID];
        }

        return total;
    }
    

    const contextValue = {getTotalCartItems, getTotalCartAmount, cart, addToCart, removeFromCart};


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
