/* eslint-disable react/prop-types */
// import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart }) => {
    // const { cart } = props; option 2
    console.log(cart)

    // for price total:
    let totalPrice = 0;
    let totalShippingPrice = 0;
    let quantity = 0;
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingPrice = totalShippingPrice + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShippingPrice + tax;

    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <p>Selected items: <b>{quantity}</b></p>
            <p>Total Price: $<b>{totalPrice}</b></p>
            <p>Total Shipping Charge: $<b>{totalShippingPrice}</b></p>
            <p>Tax: $<b>{tax.toFixed(2)}</b></p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Cart;