/* eslint-disable react/prop-types */
// import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    const { img, name, price, ratings, seller } = props.product;
    // eslint-disable-next-line react/prop-types
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: ${price}</p>
            <div className='product-info'>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)}
                className='product-button'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;