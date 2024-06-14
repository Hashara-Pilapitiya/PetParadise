import React from 'react';
import all_animals from '../Components/Assets/all_animals';

export const ShopContext = React.createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {all_animals};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
