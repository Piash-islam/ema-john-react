/* eslint-disable react/prop-types */
// import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const { cart } = props; option 2
    console.log(cart)

    // for price total:
    let totalPrice = 0;
    let totalShippingPrice = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShippingPrice = totalShippingPrice + product.shipping;
    }

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShippingPrice + tax;

    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <p>Selected items: <b>{cart.length}</b></p>
            <p>Total Price: $<b>{totalPrice}</b></p>
            <p>Total Shipping Charge: $<b>{totalShippingPrice}</b></p>
            <p>Tax: $<b>{tax.toFixed(2)}</b></p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;