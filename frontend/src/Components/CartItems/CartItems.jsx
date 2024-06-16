import React from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { ImCross } from "react-icons/im";

const CartItems = () => {

    const {getTotalCartAmount, all_animals, cart, removeFromCart } = React.useContext(ShopContext);

  return (

    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Animals</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
            <p>Remove</p>
        </div>

        <hr />

        {all_animals.map((e) => {

            if(cart[e.id] > 0) {
                return (
                    <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} className='cartitems-image' alt='' />
                            <p>{e.name}</p>
                            <p>$ {e.price}</p>
            
                            <button className='cartitems-quantity'>{cart[e.id]}</button>
                            <p>$ {e.price * cart[e.id]}</p>

                            <ImCross className='remove-icon' onClick={() => {removeFromCart(e.id)}} alt='' />
        
            
                        </div>
                    </div>
                )
            }

            return null;

        })}

        <div className="cartitems-down">
            <div className="cartitems-total">

                <h2>Cart Totals</h2>

                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>$ {getTotalCartAmount()}</p>
                    </div>

                    <hr />

                    <div className="cartitems-total-item">
                        <p>Sipping Free</p>
                        <p>Free</p>
                    </div>

                    <hr />

                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>$ {getTotalCartAmount()}</h3>
                    </div>

                </div>

                <button className='cartitems-checkout'>Proceed to Checkout</button>

            </div>

            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here.</p>

                <div className="cartitems-promobox">
                    <input type="text" placeholder='Enter Your Promo Code...' />
                    <button>Apply</button>
                </div>
            </div>
        </div>

    </div>

  )
}

export default CartItems;