import React from 'react';
import './ShopCategory.css';
import {ShopContext} from '../../Context/ShopContext';

const ShopCategory = (props) => {

  const {all_animals} = React.useContext(ShopContext);

  return (
    <div className='shop-catrgory'></div>
  )
}

export default ShopCategory;