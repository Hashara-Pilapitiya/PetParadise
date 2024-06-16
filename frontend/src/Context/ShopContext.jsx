import React, {useState} from 'react';
import all_animals from '../Components/Assets/all_animals';

export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
    let cart = {};

    for (let index = 0; index < all_animals.length + 1; index++) {
        cart[index] = 0;
    }

    return cart;

}

const ShopContextProvider = (props) => {

    const [cart, setCart] = useState(getDefaultCart());

    const addToCart = (animalID) => {
        setCart((prev) => ({...prev, [animalID]: prev[animalID] + 1}));
        console.log(cart);
    }

    const removeFromCart = (animalID) => {
        setCart((prev) => ({...prev, [animalID]: prev[animalID] - 1}));
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
    

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_animals, cart, addToCart, removeFromCart};


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
