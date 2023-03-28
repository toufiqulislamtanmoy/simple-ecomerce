import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h6>{name}</h6>
                <p>${price}</p>
                <h6>Menufectur: {seller}</h6>
                <p>Rating: {ratings} start</p>
            </div>
            <button className='cart-btn'>Add to Crat</button>
        </div>
    );
};

export default Product;