import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {id, img, name, price, seller, ratings } = props.product;
    const handelCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h6>{name}</h6>
                <p>${price}</p>
                <h6>Menufectur: {seller}</h6>
                <p>Rating: {ratings} start</p>
            </div>
            <button className='cart-btn' onClick={()=>handelCart(props.product)}>Add to Crat <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;